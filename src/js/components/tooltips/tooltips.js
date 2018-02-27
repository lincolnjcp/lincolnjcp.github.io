import React, { Component } from 'react';

class Tooltips extends Component {

  componentDidMount() {
    (function () {

        var scrollContainer = document.querySelector('.scrollable'),
          scrollContentWrapper = document.querySelector('.scrollable .scroll-content-wrapper'),
          scrollContent = document.querySelector('.scrollable .scroll-content'),
          contentPosition = 0,
          scrollerBeingDragged = false,
          scroller,
          topPosition,
          scrollerHeight;
  
        function calculateScrollerHeight() {
          // *Calculation of how tall scroller should be
          var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
          return visibleRatio * scrollContainer.offsetHeight;
        }
  
        function moveScroller(evt) {
          // Move Scroll bar to top offset
          var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;
          topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5); // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
          scroller.style.top = topPosition + 'px';
        }
  
        function startDrag(evt) {
          normalizedPosition = evt.pageY;
          contentPosition = scrollContentWrapper.scrollTop;
          scrollerBeingDragged = true;
        }
  
        function stopDrag(evt) {
          scrollerBeingDragged = false;
        }
  
        function scrollBarScroll(evt) {
          if (scrollerBeingDragged === true) {
            var mouseDifferential = evt.pageY - normalizedPosition;
            var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
            scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
          }
        }
  
        function createScroller() {
          // *Creates scroller element and appends to '.scrollable' div
          // create scroller element
          scroller = document.createElement("div");
          scroller.className = 'scroller';
  
          // determine how big scroller should be based on content
          scrollerHeight = calculateScrollerHeight();
  
          if (scrollerHeight / scrollContainer.offsetHeight < 1) {
            // *If there is a need to have scroll bar based on content size
            scroller.style.height = scrollerHeight + 'px';
  
            // append scroller to scrollContainer div
            scrollContainer.appendChild(scroller);
  
            // show scroll path divot
            scrollContainer.className += ' showScroll';
  
            // attach related draggable listeners
            scroller.addEventListener('mousedown', startDrag);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarScroll)
          }
  
        }
  
        createScroller();
        // *** Listeners ***
        scrollContentWrapper.addEventListener('scroll', moveScroller);
      }());

}

  render() {
    return (
      <div>
        <div class="mrg-L row">
          <div class="tooltip tooltip-single tooltip-left-side">
            <span>Tooltip left side</span>
          </div>
          <br></br>
          <br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-top-left">
            <span>Tooltip Top left side</span>
          </div>
          <br></br>
          <br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-bottom-left">
            <span>Tooltip Bottom left side</span>
          </div>
          <br></br>
          <br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-right-side">
            <span>Tooltip right side</span>
          </div>
          <br></br>
          <br></br><br></br><br></br>


          <div class="tooltip tooltip-single tooltip-top-right ">
            <span>Tooltip Top right side</span>
          </div>

          <br></br><br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-bottom-right ">
            <span>Tooltip Bottom right side</span>
          </div>
          <br></br><br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-top-center">
            <span>Tooltip Top center side</span>
          </div>
          <br></br><br></br><br></br><br></br>

          <div class="tooltip tooltip-single tooltip-bottom-center">
            <span>Tooltip Bottom center side</span>
          </div>
          <br></br><br></br><br></br><br></br>
          <div class="tooltip tooltip-single tooltip-dark">
            <span>Tooltip Single line dark</span>
          </div>
          <br></br><br></br><br></br><br></br>

          <div class="tooltip tooltip-multi-line tooltip-top-center scroll-container">
            <div class="scroll-block custom-scroll scrollable">
              <div class="scroll-content-wrapper">
                <div class="scroll-content">
                  a For new residential mattresses purchased in conjunction with a BedGard Encasement. the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt.
                </div>
              </div>
            </div>
            <div class="scroll-block-fade"></div>
          </div>
          <br></br><br></br><br></br><br></br>
          
          {/* <div class="tooltip tooltip-multi-line tooltip-bottom-center scroll-container">
            <div class="scroll-block custom-scroll scrollable">
              <div class="scroll-content-wrapper">
                <div class="scroll-content">
                  For new residential mattresses purchased in conjunction with a BedGard Encasement. the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt.
                </div>
              </div>
            </div>
            <div class="scroll-block-fade"></div>
          </div>
          <br></br><br></br><br></br><br></br>
          <div class="tooltip tooltip-top-right tooltip-multi-line scroll-container">
            <div class="scroll-block custom-scroll scrollable">
              <div class="scroll-content-wrapper">
                <div class="scroll-content">
                  For new residential mattresses purchased in conjunction with a BedGard Encasement. the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt.
                </div>
              </div>
            </div>
          </div>
          <br></br><br></br><br></br> */}


          <div class="tooltip tooltip-top-right tooltip-long tooltip-list">
            <ul>
              <li><a href="javascript:void(0)">My Account</a></li>
              <li><a href="javascript:void(0)">My Rewards</a></li>
              <li><a href="javascript:void(0)">My Orders</a></li>
              <li><a href="javascript:void(0)">My Rewards (0)</a></li>
              <li><a href="javascript:void(0)">My List</a></li>
              <li><a href="javascript:void(0)">Profile Settings</a></li>
              <li><a href="javascript:void(0)">Nofications</a></li>
              <li><a href="javascript:void(0)">My JCPenney.com</a></li>
              <li><a href="javascript:void(0)">Gift Registry</a></li>
              <li><a href="javascript:void(0)">JCPenney Credit Card</a></li>
              <li class="tooltip-divider"><a href="javascript:void(0)">Sign Out</a></li>
            </ul>
          </div>
          <br></br><br></br><br></br>
          <div class="tooltip tooltip-right-side tooltip-multi-line">
            <div class="tooltip-close">

            </div>
            <span>
              <h1 class="title title-M mrg-S">This is a Tooltip H1 Title</h1>
              <input type="radio" id="tooltip-radio" name="tootlip-radio" />
              <label for="tooltip-radio">Vanilla label</label>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltips;