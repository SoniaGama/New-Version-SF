var $splashSection = $('#splash-container');
var $indexSection =$('#index-container');


var $logInBtn = $('#login-enter-btn');
var $singUpBtn = $('#signup-btn');
var $siteNavBar = $('#site-nav');
var $homeBtn = $('#home-btn');
var $collectionsBtn = $('#collections-btn');
var $settingsBtn = $('#settings-btn');
var $helpBtn = $('#help-btn');
var $logOutBtn = $('#logout-btn');
var $recoveryBtn = $('#recovery-btn');
var $recoveringBtn = $('#recover-btn');
var $desktopNav = $('#desktop-nav');
var $mobileNav = $('#desktop-nav');

var $indexSection = $('#index-container');
var $homeSection = $('#home-section');
var $moviesSection = $('#movies-section');
var $albumsSection = $('#albums-section');
var $helpSection = $('#help-section');
var $settingsSection = $('#settings-section');
var $siteFooter = $('#site-footer');

var $movieSearchBox = $('#movie-search-box');
var $movieSearcher = $('#movie-searcher');
var $searcherByMovie = $('#search-by-movie');
var $searchMovieBtn = $('#search-movie');
var $moviesResultsContainer = $('#movies-results-container');
var $moviesResultsList = $('#movies-results-list');
var $movieResultTitle = $('#movie-result-title');
var $closeMovieInfoCardBtn = $('#close-movie-info-btn');

var $artistSearchBox = $('#artist-search-box');
var $albumSearcher = $('#album-searcher');
var $searcherByArtist = $('#searcher-by-artist');
var $albumsContainer = $('#albums-container');
var $albumsList = $('#albums-result-list');
var $albumResultTitle = $('#album-result-title');
var $searchAlbumBtn = $('#search-album');
var $closeAlbumInfoCardBtn = $('#close-album-info-btn');

var $moviesGallery = $('#movies-gallery');
var $pinPoster = $('#pin-poster');

var $albumsGallery = $('#albums-gallery');
var $pinCover = $('#pin-cover');

var $feedBackBtn = $('#feedback-btn');

var $userData = $('#user-data');

var $termsAgree = $('terms-agree');

var $loginModal= $('#modal-login');
var $loginSection = $('#login-section');
var $loginFacebookBtn = $('#login-fb');
var $loginSpotifyBtn = $('#login-spotify');
var $loginBtn = $('#login-btn');
var $recoveryBtn = $('#recovery-btn');
var $recoverySection = $('#recovery-section');
var $recoverBtn = $('#recover-btn');

var $signupModal = $('#modal-signup');
var $signupSection = $('#signup-section');
var $signupFacebookBtn = $('#signup-fb');
var $signupSpotifyBtn = $('#signup-spotify');
var $signupBtn = $('#signup-btn');
var $confirmationSection = $('#confirmation-section');

var $movieInfoModal = $('#movie-info');
var $movieInfoContainer = $('#movie-info-container');
var $movieInfoCard = $('#movie-info-card');
var $movieInfoDetails = $('#movie-info-details');
var $movieTitleModal = $('#movie-title-modal');
var $posterModal = $('#poster-modal');
var $movieYearModal = $('#movie-year-modal');
var $movieGenreModal = $('#movie-genre-modal');
var $movieDirectorModal = $('#movie-director-modal');
var $movieRateModal = $('#movie-rate-modal');
var $movieTagLine = $('#movie-tagline');
var $movieInfoFooter = $('#movie-info-footer');
var $movieSoundtrack = $('#movie-soundtrack');
var $movieHomepage = $('#movie-homepage');
var $addMovie = $('#add-movie');

var $albumInfoModal = $('#album-info');
var $albumInfoContainer = $('#album-info-container');
var $albumInfoCard = $('#album-info-card');
var $albumInfoDetails = $('#album-info-details');
var $albumTitleModal = $('#album-title-modal');
var $coverModal = $('#cover-modal');
var $albumYearModal = $('#album-year-modal');
var $albumArtist = $('#album-artist-modal');
var $albumProducer = $('#album-producer-modal');
var $albumTrackList = $('#album-tracklist');
var $albumItem = $('#album-item');
var $trackNumber = $('#track-number');
var $numberTrack = $('.number-track');
var $trackName = $('#track-name');
var $nameTrack = $('.track-name');
var $byId = $('#by');
var $byClass = $('.by');
var $trackArtist = $('#track-artist');
var $artistTrack = $('.artist-track');
var $albumInfoFooter = $('#album-info-footer');
var $albumMovieBtn = $('#album-movie');
var $showAlbumTracklistBtn = $('#show-tracklist');
var $addAlbumBtn = $('#add-album');

var $feedbackModal = $('#feedback');
var $sendFeedbackSection = $('#send-feedback-section');
var $sendFeedbackBtn = $('#send-feedback-btn');
var $thankyouFeedbackSection = $('#thankyou-feedback');

var $wrongAuthAlert = $('#wrong-auth');

var $noResultsAlert = $('#no-results');



$(document).ready(function(e){
  //Nav, Modals and Select//
  $(".button-collapse").sideNav();
  $('.modal').modal();
  //Nav, Modals and Select End//
  //Splash Page//
  console.log('control-1');
  $splashSection.fadeOut(5500);
  $indexSection.removeClass('hide');
  $siteFooter.removeClass('hide');
  $indexSection.fadeIn(1000);
  $indexSection.addClass('show');
  $siteFooter.addClass('show');
});//END OF DOCUMENT.READY
//Showing Home//

$logInBtn.click(function(e){
  e.preventDefault();
  console.log('login-btn');
  $indexSection.removeClass('show');
  $indexSection.addClass('hide');
  $siteNavBar.removeClass('hide');
  $siteNavBar.addClass('show');
  $homeSection.removeClass('hide');
  $homeSection.addClass('show');
  $siteFooter.removeClass('hide');
  $siteFooter.addClass('show');
});

$homeBtn.click(function(e){
  e.preventDefault();
  console.log('home-btn');
  $settingsSection.removeClass('show');
  $settingsSection.addClass('hide');
  $indexSection.removeClass('show');
  $indexSection.addClass('hide');
  $siteNavBar.removeClass('hide');
  $siteNavBar.addClass('show');
  $moviesSection.removeClass('show');
  $moviesSection.addClass('hide');
  $albumsSection.removeClass('show');
  $albumsSection.addClass('hide');
  $homeSection.removeClass('hide');
  $homeSection.addClass('show');
  $siteFooter.removeClass('hide');
  $siteFooter.addClass('show');
});



//Showing Movies Results//
$searchMovieBtn.click(function(e){
  e.preventDefault();
  console.log('search movie');
  $artistSearchBox.hide();
  $movieSearchBox.removeClass('l6');
  $movieSearchBox.addClass('l12');
  $moviesResultsContainer.removeClass('hide');
  $moviesResultsContainer.addClass('show');
});

//Closing movie info
$closeMovieInfoCardBtn.click(function(e){
  console.log('close info card');
  e.preventDefault();
  $artistSearchBox.show();
  $movieSearchBox.removeClass('l12');
  $movieSearchBox.addClass('l6');
});

//Showing Albums//
$searchAlbumBtn.click(function(e){
  e.preventDefault();
  console.log('search album');
  $movieSearchBox.hide();
  $artistSearchBox.removeClass('l6');
  $artistSearchBox.addClass('l12');
  $albumTrackList.hide();
  $albumsContainer.removeClass('hide');
  $albumsContainer.addClass('show');
});

//Closing album info
$closeAlbumInfoCardBtn.click(function(e){
  console.log('close info card');
  e.preventDefault();
  $movieSearchBox.show();
  $artistSearchBox.removeClass('l12');
  $artistSearchBox.addClass('l6');

});

//Showing collections

$collectionsBtn.click(function(e){
  e.preventDefault();
  console.log('collections-btn');
  $settingsSection.removeClass('show');
  $settingsSection.addClass('hide');
  $indexSection.removeClass('show');
  $indexSection.addClass('hide');
  $homeSection.removeClass('show');
  $homeSection.addClass('hide');
  $siteNavBar.removeClass('hide');
  $siteNavBar.addClass('show');
  $moviesSection.removeClass('hide');
  $moviesSection.addClass('show');
  $albumsSection.removeClass('hide');
  $albumsSection.addClass('show');
  $siteFooter.removeClass('hide');
  $siteFooter.addClass('show');
});



//Showing Settings//
$settingsBtn.click(function(e){
  e.preventDefault();
  console.log('settings-btn');
  $settingsSection.removeClass('show');
  $settingsSection.addClass('hide');
  $indexSection.removeClass('show');
  $indexSection.addClass('hide');
  $homeSection.removeClass('show');
  $homeSection.addClass('hide');
  $siteNavBar.removeClass('hide');
  $siteNavBar.addClass('show');
  $moviesSection.removeClass('show');
  $moviesSection.addClass('hide');
  $albumsSection.removeClass('show');
  $albumsSection.addClass('hide');
  $helpSection.removeClass('show');
  $helpSection.addClass('hide');
  $settingsSection.removeClass('hide');
  $settingsSection.addClass('show');
  $siteFooter.removeClass('hide');
  $siteFooter.addClass('show');
});


//Showing Help//
$helpBtn.click(function(e){
  e.preventDefault();
  console.log('settings-btn');
  $settingsSection.removeClass('show');
  $settingsSection.addClass('hide');
  $indexSection.removeClass('show');
  $indexSection.addClass('hide');
  $homeSection.removeClass('show');
  $homeSection.addClass('hide');
  $siteNavBar.removeClass('hide');
  $siteNavBar.addClass('show');
  $moviesSection.removeClass('show');
  $moviesSection.addClass('hide');
  $albumsSection.removeClass('show');
  $albumsSection.addClass('hide');
  $settingsSection.removeClass('show');
  $settingsSection.addClass('hide');
  $helpSection.removeClass('hide');
  $helpSection.addClass('show');
  $siteFooter.removeClass('hide');
  $siteFooter.addClass('show');
});


//Showing Logout//
