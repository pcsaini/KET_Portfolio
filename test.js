/**
 * Created by pcsaini on 21/8/17.
 */
$(window).load(function(){$(".loader").delay(300).fadeOut();$(".animationload").delay(600).fadeOut("slow");});$(window).stellar({horizontalScrolling:false,responsive:true,scrollProperty:'scroll',parallaxElements:false,horizontalScrolling:false,horizontalOffset:0,verticalOffset:0});$(document).ready(function(){$("#testi-carousel").owlCarousel({items:1,singleItem:true,startDragging:true,autoPlay:true});});$(window).scroll(function(){if($(".navbar").offset().top>1){$(".navbar-fixed-top").addClass("navbar-bg");}else{$(".navbar-fixed-top").removeClass("navbar-bg");}});$(function(){$('.navbar a').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top- 50},1500,'easeInOutExpo');event.preventDefault();});});jQuery("html").niceScroll({scrollspeed:50,mousescrollstep:38,cursorwidth:7,cursorborder:0,cursorcolor:'#757575',autohidemode:false,zindex:9999999,horizrailenabled:false,cursorborderradius:0});jQuery(document).ready(function(){wow=new WOW({animateClass:'animated',offset:100,mobile:true});wow.init();});$(window).load(function(){var $container=$('.portfolioContainer');$container.isotope({filter:'*',animationOptions:{duration:750,easing:'linear',queue:false}});$('.portfolioFilter a').click(function(){$('.portfolioFilter .current').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false}});return false;});});$('.field-popup').magnificPopup({type:'inline',fixedContentPos:false,fixedBgPos:true,overflowY:'auto',closeBtnInside:true,preloader:false,midClick:true,removalDelay:300,mainClass:'my-mfp-zoom-in'});$(window).scroll(function(){if($(this).scrollTop()>100){$('.back-to-top').fadeIn();}else{$('.back-to-top').fadeOut();}});$('.back-to-top').click(function(){$("html, body").animate({scrollTop:0},1000);return false;});$('.progress-bar').waypoint({handler:function(){$(this).each(function(){$(this).animate({width:$(this).attr('data-percent')},1000);});},offset:'95%'});