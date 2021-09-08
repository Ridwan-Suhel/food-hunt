//on scroll sticky header
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});


//bootstrap scroll spy second way using js. if u use js no need to use data-attribute in body tag
// document.addEventListener("DOMContentLoaded", function(){
//   var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#main_nav',
//     offset: 200
//   })
// });


//nav click to hide navbar
$(function () {
	$('.nav-link').on('click', function () {
	        $('.navbar-collapse').collapse('hide');
	    });
});