const request = superagent;
const url = 'https://api.themoviedb.org/3/search/movie?api_key=308ef47d4177eecfbb266f41f2617b5f&language=en-US&query=';


function loadPage() {
    $('#search-by-movie').keyup(searchMovie);
}

function searchMovie() {
    var $titles;
    var $moviesResult;
    var containerMovies = $('#movies-result-list');
    containerMovies.empty();
    var $query = $('#search-by-movie').val();
    // console.log($query);
    var api_endpoint_seach = url + $query + '&page=1';
    request.get(api_endpoint_seach).then(function (response) {
        var results = response.body.results;
        //arroja toda la info de la peli

        results.forEach(element => {
            movieTitle = element.title;
            movieId = element.id;    

            $titles = $('<a />').addClass('movie-result-title search-result btn btn-flat modal-trigger flow-text').attr('href', '#movie-info').attr('data-id', movieId).text(movieTitle);
            $moviesResult = $('<div />').addClass('col s10 offset-s1').attr('id', 'movies-result');

            $moviesResult.append($titles);
            containerMovies.append($moviesResult);

        });
        $('.movie-result-title').click(paintInfo);

    });

}

function paintInfo(e) {
    console.log('siii');

}


$(document).ready(loadPage);