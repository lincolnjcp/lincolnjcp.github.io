import React, { Component } from 'react';
import $ from 'jquery'

function varToURL(info) {
  var infoURL = info.replace(/ /g,"-").toLowerCase();
  return infoURL;
}

class SubNav extends Component {

  componentDidMount() {

    var lastId,
        // All list items
        menu = $('.design-system-inner-nav'),
        menuItems = menu.find("a[href^='#']"),

        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr('href'));
          if (item.length) { return item; }
        });
    
        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e){
          menu.addClass('locked');
          menu.find('li.active').removeClass('active');
          $(this).closest('li').addClass('active');
          $(".design-system-inner-nav-indicator").addClass("active").css("top", $(".design-system-inner-nav-fixed").find(".active").position().top-4  );
          var href = $(this).attr('href'),
              offsetTop = href === '#' ? 0 : $(href).offset().top+1;
          $('html, body').stop().animate({ 
              scrollTop: offsetTop
          }, 300, function(){
            menu.removeClass('locked');
          });
          e.preventDefault();
        });
      
      if($(".design-system-inner-nav-fixed").find(".active").length < 1) {
        $(".design-system-inner-nav-fixed li").first().addClass("active");
      }
     $(".design-system-inner-nav-indicator").css("top", $(".design-system-inner-nav-fixed").find(".active").position().top-4  );        
     setTimeout(function(){ $(".design-system-inner-nav-indicator").addClass("active"); }, 10);

        // Bind to scroll
        $(window).unbind("scroll").scroll(function(){
          if(!menu.hasClass("locked")){
           // Get container scroll position
           var fromTop = $(this).scrollTop();
           
           // Get id of current scroll item
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop) {
               return this;
             }
           });
           // Get the id of the current element
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : '';
           
           if (lastId !== id) {
               lastId = id;
               // Set/remove active class
               menuItems
                 .parent().removeClass('active')
                 .end().filter('[href="#'+id+'"]').parent().addClass('active');
               

               if($(".design-system-inner-nav-fixed li.active").length < 1){

            
                $(".design-system-inner-nav-fixed li").first().addClass("active");

               }
               $(".design-system-inner-nav-indicator").addClass("active").css("top", $(".design-system-inner-nav-fixed").find(".active").position().top-4  );

               $('.nav.show').removeClass('show');
               $('.nav').has('.active').addClass('show');

           }                   
           }
        });


}
  render() {
    return(
<div className="design-system-inner-nav">
    <div className="design-system-inner-nav-fixed">
    <p className="txt-caps txt-bold color-nightsky mrg-L">{this.props.name}</p>
    
    <ul>
      { this.props.data.map(info =>
        <li key={info}><a href={"#"+varToURL(info)}>{info}</a></li>
        
      )}

    </ul>
    <div className="design-system-inner-nav-indicator"></div>
    </div>


</div>)}};
export default SubNav;