//// Write any custom javascript functions here
//////position indicator------------------------
// 
//    var homepos = $("#home").offset().top;
//    var marketpos = $("#market").offset().top;
//    var productpos = $("#product").offset().top;
//
//    var $homenav = $("#l1");
//    var $marketnav = $("#l2");
//    var $productnav = $("#l3");
//   
//    var $activeClass = $homenav;
//
// $(window).scroll(function(){   
//    var scrollPos = $(document).scrollTop() + 70;
//    var winHeight = $(window).height();
//    var docHeight = $(document).height();
//
//     if(scrollPos < marketpos){
//               // console.log("home");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $homenav;
//      $activeClass.addClass("active-nav");
//    }
//    else if((scrollPos > marketpos) && (scrollPos < productpos)){
//                      //  console.log("market");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $marketnav;
//      $activeClass.addClass("active-nav");
//    }
//     
//     else if(scrollPos > productpos){
//                      //  console.log("market");
//
//      $activeClass.removeClass("active-nav");
//      $activeClass = $productnav;
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
