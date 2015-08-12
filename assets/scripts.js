//Custom Functions

function videoStripeHeight() {
	var container = $(".header-video").height();
	$(".video-content-stripe").height(container);	
}



$( document ).ready(function() {

HeaderVideo.init({
  container: $('.header-video'),
  header: $('.header-video--media'),
  videoTrigger: $("#video-trigger"),
  autoPlayVideo: false

}); 


console.log('madeit')

}); //End doc ready