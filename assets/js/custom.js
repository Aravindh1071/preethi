/* 
 * Custom Jquery for this theme

 */

jQuery(function($){

	AOS.init({
    duration: 800,
    once: true,
  });

  jQuery('body').on('click','.thumbnail-img',function() {
  	jQuery(this).closest('.video-section').addClass("video-open");
  	jQuery(this).parent().find('video').trigger('play');
  	/*jQuery(this).parent().find('video')[0].load();*/
  });

  jQuery('body').on('click','.close-icon',function() {
  	jQuery(this).parent().parent('.video-section').removeClass("video-open");
  	jQuery(this).parent().parent().find('video').trigger('pause');
  });

  /*desktop Version Starts*/
    var winheight = jQuery(window).outerHeight();
    var headerheight = jQuery('header').outerHeight();
    var desktopselect24 = jQuery(".desktop-version .section4").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect3 - winheight) {
        jQuery('.desktop-version .section1').addClass("remove-sticky");
      }
      else {
        jQuery('.desktop-version .section1').removeClass("remove-sticky");
      }
    });

    var desktopselect3 = jQuery(".desktop-version .section4").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect3 - headerheight) {
        jQuery('.desktop-version .section4').addClass("section4-sticky");
      }
      else {
        jQuery('.desktop-version .section4').removeClass("section4-sticky");
      }
    });

    var desktopselect4 = jQuery(".desktop-version .section6").offset().top;
    var section6height = jQuery(".desktop-version .section6").outerHeight();
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect4 + section6height - headerheight) {
        jQuery('.desktop-version .section4').addClass("section4-sticky-disable");
      }
      else {
        jQuery('.desktop-version .section4').removeClass("section4-sticky-disable");
      }
    });

    var desktopselect5 = jQuery(".desktop-version .section7").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect5 - headerheight) {
        jQuery('.desktop-version .section7').addClass("section7-sticky");
      }
      else {
        jQuery('.desktop-version .section7').removeClass("section7-sticky");
      }
    });

    var desktopselect6 = jQuery(".desktop-version .section20").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect6) {
        jQuery('.desktop-version .section7').addClass("section7-sticky-disable");
      }
      else {
        jQuery('.section7').removeClass("section7-sticky-disable");
      }
    });

    var desktopselect7 = jQuery(".desktop-version .section27").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect7 - headerheight) {
        jQuery('.desktop-version .section27').addClass("section27-sticky");
      }
      else {
        jQuery('.desktop-version .section27').removeClass("section27-sticky");
      }
    });

    var desktopselect8 = jQuery(".desktop-version .section31").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect8) {
        jQuery('.desktop-version .section27').addClass("section27-sticky-disable");
      }
      else {
        jQuery('.desktop-version .section27').removeClass("section27-sticky-disable");
      }
    });

    var desktopselect9 = jQuery(".desktop-version .section7").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect9 - headerheight) {
        jQuery('.desktop-version .section7').addClass("section7-heading");
      }
      else {
        jQuery('.desktop-version .section7').removeClass("section7-heading");
      }
    });

    var desktopselect11 = jQuery(".desktop-version .section11").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect11 - headerheight - 90) {
        jQuery('.desktop-version .section11').addClass("section11-heading");
        jQuery('.desktop-version .section7').addClass("section7-heading-remove");
      }
      else {
        jQuery('.desktop-version .section11').removeClass("section11-heading");
        jQuery('.desktop-version .section7').removeClass("section7-heading-remove");
      }
    });

    var desktopselect13 = jQuery(".desktop-version .section14").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect13 - headerheight - 90) {
        jQuery('.desktop-version .section14').addClass("section14-heading");
        jQuery('.desktop-version .section11').addClass("section11-heading-remove");
      }
      else {
        jQuery('.desktop-version .section14').removeClass("section14-heading");
        jQuery('.desktop-version .section11').removeClass("section11-heading-remove");
      }
    });

    var desktopselect15 = jQuery(".desktop-version .section19").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect15 - headerheight - 90) {
        jQuery('.desktop-version .section19').addClass("section19-heading");
        jQuery('.desktop-version .section14').addClass("section14-heading-remove");
      }
      else {
        jQuery('.desktop-version .section19').removeClass("section19-heading");
        jQuery('.desktop-version .section14').removeClass("section14-heading-remove");
      }
    });

    var desktopselect16 = jQuery(".desktop-version .section22").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect16) {
        jQuery('.desktop-version .section19').addClass("section19-heading-remove");
      }
      else {
        jQuery('.desktop-version .section19').removeClass("section19-heading-remove");
      }
    });

    var desktopselect17 = jQuery(".desktop-version .section23").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect17 - headerheight - 85) {
        jQuery('.desktop-version .section23').addClass("section23-heading");
      }
      else {
        jQuery('.desktop-version .section23').removeClass("section23-heading");
      }
    });

    var desktopselect18 = jQuery(".desktop-version .section25").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect18) {
        jQuery('.desktop-version .section23').addClass("section23-heading-remove");
      }
      else {
        jQuery('.desktop-version .section23').removeClass("section23-heading-remove");
      }
    });
    
    var desktopselect19 = jQuery(".desktop-version .section25").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect19 - headerheight - 85) {
        jQuery('.desktop-version .section25').addClass("section25-heading");
      }
      else {
        jQuery('.desktop-version .section25').removeClass("section25-heading");
      }
    });

    var desktopselect20 = jQuery(".desktop-version .section27").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect20) {
        jQuery('.desktop-version .section25').addClass("section25-heading-remove");
      }
      else {
        jQuery('.desktop-version .section25').removeClass("section25-heading-remove");
      }
    });

    var desktopselect21 = jQuery(".desktop-version .section27").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect21 - headerheight - 85) {
        jQuery('.desktop-version .section27').addClass("section27-heading");
      }
      else {
        jQuery('.desktop-version .section27').removeClass("section27-heading");
      }
    });

    var desktopselect22 = jQuery(".desktop-version .environment-video").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect22 - headerheight - 85) {
        jQuery('.desktop-version .section27').addClass("section27-heading-remove");
        jQuery('.desktop-version .section27').addClass("section27-sticky-disable");
      }
      else {
        jQuery('.desktop-version .section27').removeClass("section27-heading-remove");
        jQuery('.desktop-version .section27').removeClass("section27-sticky-disable");
      }
    });

    var desktopselect24 = jQuery(".desktop-version .section31").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect24 - headerheight - 85) {
        jQuery('.desktop-version .section31').addClass("section31-heading");
      }
      else {
        jQuery('.desktop-version .section31').removeClass("section31-heading");
      }
    });

    var desktopselect23 = jQuery(".desktop-version .section2").offset().top;
    var windivide = winheight / 3;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > desktopselect23 - windivide) {
        jQuery('.desktop-version .section2').addClass("section2-shown");
      }
    });
  /*desktop Version Ends*/

  /*Mobile Version Starts*/
    var winheight = jQuery(window).outerHeight();
    var objectSelect3 = jQuery(".mobile-version .section4").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect3 - winheight) {
        jQuery('.mobile-version .section1').addClass("remove-sticky");
      }
      else {
        jQuery('.mobile-version .section1').removeClass("remove-sticky");
      }
    });

    var objectSelect3 = jQuery(".mobile-version .section4").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect3 - 135) {
        jQuery('.mobile-version .section4').addClass("section4-sticky");
      }
      else {
        jQuery('.mobile-version .section4').removeClass("section4-sticky");
      }
    });

    var objectSelect4 = jQuery(".mobile-version .section7").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect4 - winheight + 120) {
        jQuery('.mobile-version .section4').removeClass("section4-sticky");
      }
    });

    var objectSelect5 = jQuery(".mobile-version .section7").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect5 - 110) {
        jQuery('.mobile-version .section7').addClass("section7-sticky");
      }
      else {
        jQuery('.mobile-version .section7').removeClass("section7-sticky");
      }
    });

    var objectSelect6 = jQuery(".mobile-version .section22").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect6) {
        jQuery('.mobile-version .section7').addClass("section7-sticky-disable");
      }
      else {
        jQuery('.section7').removeClass("section7-sticky-disable");
      }
    });

    var objectSelect7 = jQuery(".mobile-version .section27").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect7 - 150) {
        jQuery('.mobile-version .section27').addClass("section27-sticky");
      }
      else {
        jQuery('.mobile-version .section27').removeClass("section27-sticky");
      }
    });

    var objectSelect8 = jQuery(".mobile-version .section31").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect8) {
        jQuery('.mobile-version .section27').addClass("section27-sticky-disable");
      }
      else {
        jQuery('.mobile-version .section27').removeClass("section27-sticky-disable");
      }
    });

    var objectSelect9 = jQuery(".mobile-version .section7").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect9 - 115) {
        jQuery('.mobile-version .section7').addClass("section7-heading");
      }
      else {
        jQuery('.mobile-version .section7').removeClass("section7-heading");
      }
    });

    /*var objectSelect10 = jQuery(".mobile-version .section10").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect10) {
        jQuery('.mobile-version .section7').addClass("section7-heading-remove");
      }
      else {
        jQuery('.mobile-version .section7').removeClass("section7-heading-remove");
      }
    });*/

    var objectSelect11 = jQuery(".mobile-version .section11").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect11 - 255) {
        jQuery('.mobile-version .section11').addClass("section11-heading");
        jQuery('.mobile-version .section7').addClass("section7-heading-remove");
      }
      else {
        jQuery('.mobile-version .section11').removeClass("section11-heading");
        jQuery('.mobile-version .section7').removeClass("section7-heading-remove");
      }
    });

    /*var objectSelect12 = jQuery(".mobile-version .section13").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect12) {
        jQuery('.mobile-version .section11').addClass("section11-heading-remove");
      }
      else {
        jQuery('.mobile-version .section11').removeClass("section11-heading-remove");
      }
    });*/

    var objectSelect13 = jQuery(".mobile-version .section14").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect13 - 255) {
        jQuery('.mobile-version .section14').addClass("section14-heading");
        jQuery('.mobile-version .section11').addClass("section11-heading-remove");
      }
      else {
        jQuery('.mobile-version .section14').removeClass("section14-heading");
         jQuery('.mobile-version .section11').removeClass("section11-heading-remove");
      }
    });

   /* var objectSelect14 = jQuery(".mobile-version .section18").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect14) {
        jQuery('.mobile-version .section14').addClass("section14-heading-remove");
      }
      else {
        jQuery('.mobile-version .section14').removeClass("section14-heading-remove");
      }
    });
*/
    var objectSelect15 = jQuery(".mobile-version .section19").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect15 - 255) {
        jQuery('.mobile-version .section19').addClass("section19-heading");
        jQuery('.mobile-version .section14').addClass("section14-heading-remove");
      }
      else {
        jQuery('.mobile-version .section19').removeClass("section19-heading");
        jQuery('.mobile-version .section14').removeClass("section14-heading-remove");
      }
    });

    var objectSelect16 = jQuery(".mobile-version .section22").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect16) {
        jQuery('.mobile-version .section19').addClass("section19-heading-remove");
      }
      else {
        jQuery('.mobile-version .section19').removeClass("section19-heading-remove");
      }
    });

    var objectSelect17 = jQuery(".mobile-version .section23").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect17 - 295) {
        jQuery('.mobile-version .section23').addClass("section23-heading");
      }
      else {
        jQuery('.mobile-version .section23').removeClass("section23-heading");
      }
    });

    var objectSelect18 = jQuery(".mobile-version .section25").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect18) {
        jQuery('.mobile-version .section23').addClass("section23-heading-remove");
      }
      else {
        jQuery('.mobile-version .section23').removeClass("section23-heading-remove");
      }
    });
    
    var objectSelect19 = jQuery(".mobile-version .section25").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect19 - 295) {
        jQuery('.mobile-version .section25').addClass("section25-heading");
      }
      else {
        jQuery('.mobile-version .section25').removeClass("section25-heading");
      }
    });

    var objectSelect20 = jQuery(".mobile-version .service-video1").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect20) {
        jQuery('.mobile-version .section25').addClass("section25-heading-remove");
      }
      else {
        jQuery('.mobile-version .section25').removeClass("section25-heading-remove");
      }
    });

    var objectSelect21 = jQuery(".mobile-version .section27").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect21 - 240) {
        jQuery('.mobile-version .section27').addClass("section27-heading");
      }
      else {
        jQuery('.mobile-version .section27').removeClass("section27-heading");
      }
    });

    var objectSelect30 = jQuery(".mobile-version .service-video2").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect30 - 280) {
        jQuery('.mobile-version .section27').addClass("section27-heading-remove");
      }
      else {
        jQuery('.mobile-version .section27').removeClass("section27-heading-remove");
      }
    });

    var objectSelect22 = jQuery(".mobile-version .section31").offset().top;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect22 - 280) {
        jQuery('.mobile-version .section27').addClass("section27-heading-remove");
        jQuery('.mobile-version .section31').addClass("section31-heading");
      }
      else {
        jQuery('.mobile-version .section27').removeClass("section27-heading-remove");
        jQuery('.mobile-version .section31').removeClass("section31-heading");
      }
    });

    var objectSelect23 = jQuery(".mobile-version .section2").offset().top;
    var windivide = winheight / 3;
    jQuery(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      if (scroll > objectSelect23 - windivide) {
        jQuery('.mobile-version .section2').addClass("section2-shown");
      }
    });
  /*Mobile Version Ends*/

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

	/* For iOS touch hover effect */
	document.addEventListener("touchstart", function() {},false);
	
});













