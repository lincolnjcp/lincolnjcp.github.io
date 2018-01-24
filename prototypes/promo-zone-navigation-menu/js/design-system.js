$( document ).ready(function() {
	/* Header */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["$"],factory):$&&!$.fn.hoverIntent&&factory($)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

    $('.dropdown-button').unbind('click').on('click', function () {
        var parent_box = $(this).closest('.dropdown-menu-block');
        parent_box.siblings().find('.dropdown-menu').hide();
        parent_box.find('.dropdown-menu').slideToggle(200, 'swing');            
        $(this).toggleClass("arrow-down"); 
    });

    $('.side-panel-btn').unbind('click').on('click', function(event){
      event.preventDefault();
      var parent = $($(this).attr('data-target'));
      parent.addClass('is-visible');
      if($(this).attr('id') == "mainMenuSidePanelButton") {
        parent.addClass('is-enabled');
      }
    });

    $(window).resize(function() {
      if($('#mainMenuSidePanelButton').filter(":visible").length < 1) {
        $('.side-panel-disable-desktop').removeClass('is-enabled');
      }
    });

    $('.side-panel').unbind('click').on('click', function(event){
      var closed = false;
      if( $(event.target).is('.side-panel')) { 
        $(this).removeClass('is-visible');       
        closed = true;
      } else if ($(event.target).is('.side-panel-close') || $(event.target).closest('a').hasClass('side-panel-close') ) {
         $(event.target).closest('.side-panel').removeClass('is-visible');
         closed = true;
      }
      if(closed === true && $(this).find('.main-menu-reset').length > 0) {
        setTimeout(function(){            
          $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
          $('.main-menu-md-panel.tier2-click').removeClass('tier2-click');
          $('.side-panel-container').removeClass('tier2-open');
        }, 400);
        
      }
      event.preventDefault();
    });

    $(".main-menu-secondary-li-shop-departments").hoverIntent({
        over: function() {
            if ($("#mainMenusecondaryLightBox").length == 0) {
                $("body").append('<div id="mainMenusecondaryLightBox"></div>');
                var top = 0;
                if($(".main-menu-bar-secondary").length > 0){
                  top = $(".main-menu-bar-secondary").height()+$(".main-menu-bar-secondary").offset().top;
                }
                $("#mainMenusecondaryLightBox").css({ "top": top, "height": $(document).height() })
                $("#mainMenusecondaryLightBox").fadeOut(0).fadeIn(200);
            }
            $(".main-menu-secondary-li").addClass("main-menu-secondary-hover");
        },
        timeout: 400,
        interval: 100,
        out: function() {
            $(".main-menu-secondary-li").removeClass("main-menu-secondary-hover");
            $("#mainMenusecondaryLightBox").remove();
            $('.main-menu-tier1').removeClass('active-tier2').removeClass('active-tier3')
        }
    });


    $(".main-menu-tier1-li").hoverIntent({
        over: function() {
            $(".main-menu-tier1-li").removeClass('active');
            $(this).addClass("active");
            $(".main-menu-tier2-li.active").removeClass('active');
            $(".main-menu-tier2-li.to-activate").removeClass('to-activate');
            $(this).closest('.main-menu-tier1').addClass('active-tier2').removeClass('active-tier3');
        },
        timeout: 200,
        interval: 100,
        out: function() {
            $(this).removeClass("active");
        }
    });

    $(".main-menu-tier2-li").hoverIntent({
        over: function() {
            $('.to-activate').removeClass('to-activate');
            if($(this).closest('.main-menu-tier1').hasClass('active-tier3')) {
              $(".main-menu-tier2-li.active").removeClass('active');
              $(this).addClass("active");
            } else {
              $(this).addClass("to-activate");
              $(".main-menu-tier2-li.active").removeClass('active');
              setTimeout(function(){
                if($('.to-activate').length > 0){
                  $(".main-menu-tier2-li.active").removeClass('active');
                  $('.to-activate').removeClass('to-activate').addClass('active');
                }
            }, 500);
            }
            
            $(this).closest('.main-menu-tier1').addClass('active-tier3');
        },
        timeout: 200,
        interval: 100,
        out: function() {
            if($(".main-menu-tier2-li.active").length < 1) {
              $(this).closest('.main-menu-tier1').removeClass('active-tier3');
            }
        }
    });

    $(".main-menu-tier3-li").hoverIntent({
        over: function() {
            $(this).addClass("active");
        },
        timeout: 200,
        interval: 100,
        out: function() {
            $(this).removeClass("active");               
        }
    });

    /* Navigation Mobile/Tablet */

    $(".main-menu-tier1-link").unbind('click').on('click', function(event){
      event.preventDefault();
      $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
      $('.main-menu-md-panel').removeClass('tier2-click');
      $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click');
      $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 200 });
      $('.side-panel-container').addClass('tier2-open');
    });

    $(".main-menu-tier2-link").unbind('click').on('click', function(event){
      event.preventDefault();
      var target = $(this).closest('.main-menu-tier2-li');
      if(target.hasClass('tier3-click')) {
        target.removeClass('tier3-click');
      } else {
        target.addClass('tier3-click');
      }
    });

    $(".tier2-close").unbind('click').on('click', function(event){
      event.preventDefault();

      $(this).closest('.main-menu-tier1-li').find('.main-menu-tier2-ul').addClass('tier2-click-remove');
      $(this).closest('.main-menu-md-panel').addClass('tier2-click-remove');
      setTimeout(function(){
        $('.tier2-click-remove').removeClass('tier2-click-remove').removeClass('tier2-click');
      }, 400);

      $('.side-panel-container').removeClass('tier2-open');
    });

    $(".main-menu-md-panel-btn").unbind('click').on('click', function(event){
      event.preventDefault();
      $('.main-menu-tier2-ul.tier2-click').removeClass('tier2-click');
      $(this).closest('.main-menu-md-panel-li').find('.main-menu-md-panel').addClass('tier2-click');
      $('.side-panel-content').animate({ scrollTop: 0 }, { duration: 1 });
      $('.side-panel-container').addClass('tier2-open');
    });

    $(".main-menu-reset").on('click', function(event){
      event.preventDefault();
       $('.side-panel-container').trigger('click');
    });



    

    $('.expand-collapse-btn').unbind('click').on('click', function(event){
      var target = $($(this).attr('data-target'));

      var duration = 400;
      if($(this).attr('data-duration')){
        duration = $(this).attr('data-duration');
      }

      if(target.hasClass('is-visible')){
        if($(this).attr('data-show-text')){
          $(this).text($(this).attr('data-show-text'));
        }
        if(duration > 0) {
          target.removeClass('is-visible').slideUp(duration);
        } else {
          target.removeClass('is-visible').css('display', 'none');
        }

      } else {
        if($(this).attr('data-hide-text')){
          $(this).attr('data-show-text', $(this).text());
          $(this).text($(this).attr('data-hide-text'));
        }
        if(duration > 0) {
          target.addClass('is-visible').slideDown(duration);
        } else {
          target.addClass('is-visible').css('display', 'block');
        }
        if($(this).attr('data-hide-on-open-target')){
          $($(this).attr('data-hide-on-open-target')).css('display', 'none');
        }
      }
    });


    $('#menuPrimarySearch').unbind('focus').on('focus', function(event){
      if($('#mainMenuSidePanelButton').filter(":visible").length < 1) { //Not the mobile nav
        $('.main-menu-bar-primary').css('height', $('.main-menu-bar-primary').height());
        $('.main-menu-primary-search-form').css('width', $('.main-menu-primary-search').width());
        $('.main-menu').addClass('main-menu-search-open');
        $('.main-menu-primary-search-form').stop(true, false).animate({ width: $('.main-menu-primary-search').width() }, 400, function() {
          $('.main-menu-primary-search-form').removeAttr('style');    
        });
        
      }
    });

    $('#menuPrimarySearch').unbind('blur').on('blur', function(event){
      $('.main-menu-primary-search-form').stop(true, false).removeAttr('style');
      $('.main-menu-bar-primary').removeAttr('style');
      $('.main-menu').removeClass('main-menu-search-open');
    });
    
    //Preview top nav without design system wrapper
    $("#HideDesignSystem").unbind('click').on('click', function(event){
      $(this).toggleClass('active');
      if($(this).hasClass('active')) {
        $(this).text('Show Design System Wrapper');
        $(".design-system-nav-col").css('display', 'none');
        $(".design-system-content").css('padding',0);
        $(".design-system-inner-content").css('padding',0);
        $(".design-system-enable-hide").css('display', 'none');
        $(".design-system-nav-mobile").css('display', 'none');
        $(".design-system-wrap").css('margin',0);
      } else {
        $(this).text('Hide Design System Wrapper');
        $(".design-system-nav-col").removeAttr('style');
        $(".design-system-content").removeAttr('style');
        $(".design-system-inner-content").removeAttr('style');
        $(".design-system-enable-hide").removeAttr('style');
        $(".design-system-nav-mobile").removeAttr('style');
        $(".design-system-wrap").removeAttr('style');
      }
    });
});