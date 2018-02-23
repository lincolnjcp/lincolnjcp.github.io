import React, { Component } from 'react';
import $ from 'jquery'

class CountdownTimers extends Component {

componentDidMount() {
  $( document ).ready(function() {
  //Target date

  var timerToday = new Date();
  var timerCountDownDate = new Date(timerToday.getFullYear(), timerToday.getMonth(), timerToday.getDate()+7).getTime();

  //Timer Object References
  var timerElem = $("#timer1");
  var timerWindow = $(window);
  var timerHoursElem1 = timerElem.find(".timer-hours .timer-clock-digit-inner").eq(0);
  var timerHoursElem2 = timerElem.find(".timer-hours .timer-clock-digit-inner").eq(1);
  var timerHoursNextElem1 = timerHoursElem1.find(".timer-next-number span");
  var timerHoursNextElem2 = timerHoursElem2.find(".timer-next-number span");  
  var timerMinutesElem1 = timerElem.find(".timer-minutes .timer-clock-digit-inner").eq(0);
  var timerMinutesElem2 = timerElem.find(".timer-minutes .timer-clock-digit-inner").eq(1);
  var timerMinutesNextElem1 = timerMinutesElem1.find(".timer-next-number span");
  var timerMinutesNextElem2 = timerMinutesElem2.find(".timer-next-number span");
  var timerSecondsElem1 = timerElem.find(".timer-seconds .timer-clock-digit-inner").eq(0);
  var timerSecondsElem2 = timerElem.find(".timer-seconds .timer-clock-digit-inner").eq(1);
  var timerSecondsNextElem1 = timerSecondsElem1.find(".timer-next-number span");
  var timerSecondsNextElem2 = timerSecondsElem2.find(".timer-next-number span");

  var timerIntervalDuration = 1000; //Update timer every second
  var timerInit = false; //Triggers the initial setting of the timer
  
  var timerInterval = setInterval(function() {
    var now = new Date().getTime(); // Get todays date and time
    var distance = timerCountDownDate - now; // Find the distance between now an the count down date
  
    //Time calculations for days, hours, minutes and seconds
    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //Update the hours, minutes, and seconds
    window.timerCheckTime(hours, timerHoursNextElem1, timerHoursNextElem2);
    window.timerCheckTime(minutes, timerMinutesNextElem1, timerMinutesNextElem2);
    window.timerCheckTime(seconds, timerSecondsNextElem1, timerSecondsNextElem2);
    
    //Reset the timer-flip class from animated digits
    setTimeout(function() {
      timerElem.find(".timer-flip").each(function() {
        $(this).removeClass("timer-flip");
        var newNumber = $(this).find(".timer-next-number span").html();
        $(this).find(".timer-prev-number span").html(newNumber);
      });
    }, timerIntervalDuration/2);
    
    timerInit = true;
    
    if (distance < 0) {
      // The countdown has completed - do something here
      clearInterval(timerInterval);
      } 
  }, timerIntervalDuration);
  
  
  window.timerCheckTime = function(time, elemNext1, elemNext2) {
    //Function accepts a 1-2 digit time, and the HTML elements to update
    
    if(time < 0) { time = 0; } //Prevent any display issues when the countdown ends
    
    //Compensate for proceeding 0's
    var digits = time.toString(); 
    if(digits.length < 2 ) {
      var digit1 = "0";
      var digit2 = digits.charAt(0);  
    } else {
      var digit1 = digits.charAt(0);
      var digit2 = digits.charAt(1);    
    }
    if(timerInit === true) {
      if(elemNext1.html() !== digit1) {
        elemNext1.html(digit1);
        elemNext1.closest(".timer-clock-digit-inner").addClass("timer-flip");
      }
      if(elemNext2.html() !== digit2) {
        elemNext2.html(digit2);
        elemNext2.closest(".timer-clock-digit-inner").addClass("timer-flip");
      }
    } else {
      //On first time through set the time without animation
      elemNext1.html(digit1);
      elemNext1.closest(".timer-clock-digit-inner").find(".timer-prev-number span").html(digit1);
      elemNext2.html(digit2);
      elemNext2.closest(".timer-clock-digit-inner").find(".timer-prev-number span").html(digit2);
    }
  }

  timerWindow.unbind( "scroll.timerResize" ).bind( "scroll.timerResize", function() {
    var timer_offset = timerElem.offset().top;
      if ( timerWindow.scrollTop() > timer_offset ){
      timerElem.addClass('timer-sticky');
      timerElem.find('.timer-dates-fixed').text(timerElem.find('.timer-dates').text());
      } else {
      timerElem.removeClass('timer-sticky');
      }
  });

});
}

  render() {
    return (
<div>
    <div class="row">
        <div class="sm12 columns">
            <h1 class="title title-XL mrg-L">Countdown Timers</h1>
            <hr />
        </div>
    </div>
  
    <div class="row" id="countdown-timers">
      <div class="sm12 columns">
          <div class="timer" id="timer1">
            <div class="timer-inner ">
              <div class="timer-headline">
                <div class="timer-headline-inner">
                  <span class="timer-hide-fixed-mobile">Day 1 of coupon code </span>
                  <span class="timer-coupon timer-light">FALLNOW</span>
                  <span class="timer-hide-fixed"> ENDS <span class="timer-hide-fixed">IN</span></span>
                  <span class="timer-dates timer-hide-fixed">*Offer ends on 11/12/17</span>
                </div>
              </div>
              <div class="timer-clock">
                <div class="timer-group timer-hours timer-seperator">
                  <div class="timer-digit-set">
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="timer-clock-label"> hours </div>
                </div>
                <div class="timer-group timer-minutes timer-seperator">
                  <div class="timer-digit-set">
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="timer-clock-label"> mins </div>
                </div>
                <div class="timer-group timer-seconds">
                  <div class="timer-digit-set">
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                    <div class="timer-clock-digit">
                      <div class="timer-clock-digit-wrapper">
                        <div class="timer-clock-digit-inner">
                          <div class="timer-prev-number"> <span></span> </div>
                          <div class="timer-next-number"> <span></span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="timer-clock-label"> secs </div>
                </div>
              </div>
              <div class="timer-dates-fixed"></div>
            </div>
          </div>
      </div>
    </div>

    <div class="row" id="countdown-timers">
      <div class="sm12 columns">
        <p><strong>Scroll down to view the sticky version of the countdown timer.</strong></p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nibh et nulla lacinia viverra et fermentum nisl. Cras ipsum magna, porta at auctor quis, hendrerit sit amet dui. Donec purus lectus, placerat in velit sit amet, posuere varius lectus. Nulla ullamcorper urna id tempor condimentum. Phasellus porttitor nunc nec lectus venenatis, sit amet sollicitudin sem fermentum. Integer tortor lorem, pharetra maximus imperdiet et, tincidunt non quam. Etiam mollis posuere turpis ut viverra. Etiam magna ipsum, cursus quis lectus vitae, dapibus convallis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

        <p>Sed sed nisi nec nulla malesuada maximus cursus a elit. Suspendisse iaculis ante vel lacinia pretium. Sed id lacus magna. Aenean sapien dui, elementum non pellentesque eleifend, interdum cursus augue. Aenean viverra commodo justo, vitae fringilla ipsum mollis vel. Duis cursus tellus at feugiat gravida. Maecenas sed ultrices lorem, sed blandit ipsum. In sodales at felis id porta. In vehicula tempor tellus, in mattis risus aliquet ut. Nulla et dolor dui. Nunc sodales enim purus. Donec et varius ipsum, quis blandit tellus. Praesent in quam non dui condimentum faucibus at quis diam.</p>

        <p>Aenean feugiat velit justo, id egestas arcu commodo quis. Vestibulum accumsan vestibulum eros eu placerat. Vivamus scelerisque dapibus urna, ut egestas libero laoreet ut. Maecenas porttitor elementum sem, a tincidunt eros venenatis ut. Quisque odio elit, volutpat quis urna vel, euismod porta mi. Mauris ut erat sit amet arcu dapibus interdum condimentum ac tortor. Maecenas quis porttitor dui. In vel eleifend risus. Mauris sit amet tellus nunc. Vivamus tincidunt mauris ac euismod blandit. Aliquam tempus, augue mattis elementum porta, justo diam feugiat eros, in consequat quam libero id sem.</p>

        <p>Mauris tempus sed nisl nec convallis. Nunc vitae mauris in nisl tempor consequat vel in ligula. Mauris varius vitae urna at porta. Nam aliquet, ligula sed auctor tincidunt, nisl lacus sagittis felis, efficitur pulvinar dui mauris id sapien. Nunc semper erat nec ullamcorper tincidunt. Mauris porta enim et ipsum lacinia molestie. Fusce efficitur ultrices velit, eu tincidunt lectus tincidunt quis.</p>

        <p>Cras ac nisl non ligula viverra sodales id id sem. Donec quis lectus vel urna hendrerit facilisis ut a est. Duis feugiat euismod pellentesque. Etiam vitae molestie velit. Pellentesque vulputate tincidunt elementum. Fusce consectetur purus massa, non aliquam nulla dignissim ultricies. Cras ac justo lorem. Morbi sed metus leo. Proin auctor metus porttitor congue commodo. Morbi dapibus facilisis odio, at fringilla ligula accumsan quis. Mauris fermentum ex pellentesque, cursus nisl et, tristique mi. Sed vitae interdum enim. Suspendisse ut dolor nulla. Vivamus euismod justo tellus, a lobortis urna aliquam in. </p>
      </div>
    </div>


    
    <div class="row">
        <div class="sm12 columns">
            <hr />
            <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    );
  }
}

export default CountdownTimers;