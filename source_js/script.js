//// Write any custom javascript functions here
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

//----------------------NAV bar
//---------------- smooth scrolling---------------
//$(document).ready(function(){
//	
//	$(function() {
//  $("ul a").click(function() {
//      var target = $(this.hash);
//      if (target.length) {
//        $('html,body').animate({ scrollTop: target.offset().top-77 }, 1000);
//        return false;
//      }
//  });
//}); 

//////position indicator------------------------
// 
//    var nav1pos = $("#nav1").offset().top;
//    var nav2pos = $("#nav2").offset().top;
//    var nav3pos = $("#nav3").offset().top;
//    var nav4pos = $("#nav4").offset().top;
//
//    var $nav1nav = $("#l1");
//    var $nav2nav = $("#l2");
//    var $nav3nav = $("#l3");
//    var $nav4nav = $("#l4");
//   
//    var $activeClass = $nav1nav;
//
// $(window).scroll(function(){   
//    var scrollPos = $(document).scrollTop() + 70;
//    var winHeight = $(window).height();
//    var docHeight = $(document).height();
//
//     if(scrollPos < nav2pos){
//               console.log("1");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $nav1nav;
//      $activeClass.addClass("active-nav");
//    }
//    else if((scrollPos > nav2pos) && (scrollPos < nav3pos)){
//                     console.log("2");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $nav2nav;
//      $activeClass.addClass("active-nav");
//    }
//     else if((scrollPos > nav3pos) && (scrollPos < nav4pos)){
//                      console.log("3");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $nav3nav;
//      $activeClass.addClass("active-nav");
//    }
//     
//     else if(scrollPos > nav4pos){
//                      console.log("4");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $nav4nav;
//      $activeClass.addClass("active-nav");
//    }
//
//    else {
//      $activeClass.addClass("active-nav")
//    }
//});
//
//});
//
//    
//
//
//
////--------------------Header------------------------
///**
// * cbpAnimatedHeader.js v1.0.0
// * http://www.codrops.com
// *
// * Licensed under the MIT license.
// * http://www.opensource.org/licenses/mit-license.php
// * 
// * Copyright 2013, Codrops
// * http://www.codrops.com
// */
//var AnimatedHeader = (function() {
//
//  var docElem = document.documentElement,
//    header = document.querySelector('.header'),
//    didScroll = false,
//    changeHeaderOn = 65;
//
//  function init() {
//    window.addEventListener('scroll', function(event) {
//      if (!didScroll) {
//        didScroll = true;
//        setTimeout(scrollPage, 250);
//      }
//    }, false);
//  }
//
//  function scrollPage() {
//    var sy = scrollY();
//    if (sy >= changeHeaderOn) {
//      classie.add(header, 'header-shrink');
//    } else {
//      classie.remove(header, 'header-shrink');
//    }
//    didScroll = false;
//  }
//
//  function scrollY() {
//    return window.pageYOffset || docElem.scrollTop;
//  }
//
//  init();
//
//})();
//
//( function( window ) {
//
//'use strict';
//
//// classList support for class management
//
//var hasClass, addClass, removeClass;
//
//if ( 'classList' in document.documentElement ) {
//  hasClass = function( elem, c ) {
//    return elem.classList.contains( c );
//  };
//  addClass = function( elem, c ) {
//    elem.classList.add( c );
//  };
//  removeClass = function( elem, c ) {
//    elem.classList.remove( c );
//  };
//}
//else {
//  hasClass = function( elem, c ) {
//    return classReg( c ).test( elem.className );
//  };
//  addClass = function( elem, c ) {
//    if ( !hasClass( elem, c ) ) {
//      elem.className = elem.className + ' ' + c;
//    }
//  };
//  removeClass = function( elem, c ) {
//    elem.className = elem.className.replace( classReg( c ), ' ' );
//  };
//}
//
//function toggleClass( elem, c ) {
//  var fn = hasClass( elem, c ) ? removeClass : addClass;
//  fn( elem, c );
//}
//
//var classie = {
//
//  hasClass: hasClass,
//  addClass: addClass,
//  removeClass: removeClass,
//  toggleClass: toggleClass,
// 
//  has: hasClass,
//  add: addClass,
//  remove: removeClass,
//  toggle: toggleClass
//};
//
//// transport
//if ( typeof define === 'function' && define.amd ) {
//  // AMD
//  define( classie );
//} else {
//  // browser global
//  window.classie = classie;
//}
//
//})( window );
//


