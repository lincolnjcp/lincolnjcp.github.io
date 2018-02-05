import React, { Component } from 'react';

const errorImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/error.svg');
const successImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success.svg');

class Modal extends Component {

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
              
              if (scrollerHeight / scrollContainer.offsetHeight < 1){
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
        <div className="row">
          <div className="modal-overlay"></div>
          <div className="modal modal-S">
            <button className="modal-close" title="close"></button>
            <h2 className="title title-L mrg-M">Delete Address</h2>
            <p className="mrg-XL std-txt std-txt-M">
              Are you sure you want to delete this address from your account?
            </p>
            <button type="button" name="button" className="btn btn-secondary title title-M">No</button>
            <button type="button" name="button" className="btn btn-primary title title-M">Yes</button>
          </div>

          <br />
          <br />
          <div className="modal modal-L text-left">
            <button className="modal-close" title="close"></button>
            <h2 className="title title-L mrg-M">Truckable Item Delivery</h2>
            <p className="std-txt std-txt-M mrg-L">
              Some heavy or bulky items cannot be delivered via UPS, USPS or FedEx. These items must be delivered via truck.
            </p>
            <ul className="mrg-L std-txt std-txt-M list">
              <li><p>Additional delivery charges may apply and will be reflected at checkout. </p></li>
              <li><p>You will be contacted in 7 to 14 days from the time the item is shipped to schedule a delivery appointment.</p></li>
              <li><p>After delivery, you may be contacted about your satisfaction.</p></li>
              <li><p>All contacts may be automated calls to the number you provided for delivery.</p></li>
              <li><p>You must be present to accept delivery.</p></li>

            </ul>
          </div>
          <br />
          <br />
          <div className="modal modal-S">
            <button className="modal-close" title="close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: errorImage }} />
            <h2 className="title title-L mrg-M">Account Locked</h2>
            <p className="std-txt std-txt-M mrg-M">
              Check the email <span class="bold-text">username@emaildomain.com</span>
              for instructions on how to unlock it.
            </p>
            <button type="button" name="button" className="btn btn-secondary title title-M btn-grey-txt">OK</button>
          </div>

          <br />

          <div className="modal alert-pop-up">
            <button className="modal-close" title="close"></button>
            <p className="mrg-S">Online & In Store</p>
            <h2 className="modal-title-XXL title mrg-S">Extra 15% OFF</h2>
            <p className="modal-body">Show coupon to sales associate</p>
            <button type="button" name="button" className="btn btn-secondary title title-M">Print Coupon</button>
          </div>

          <br />

          <div className="modal alert-pop-up">
            <button className="modal-close" title="close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: successImage }} />
            <h2 className="modal-sub-title title title-L">Coupon Applied</h2>
            <p className="modal-body std-txt std-txt-M">
              You saved $78.99
            </p>
            <button type="button" name="button" className="btn btn-secondary title title-M">OK</button>
          </div>

          <br />

          <div className="modal dialog-pop-up">
            <button className="modal-close" title="close"></button>
            {/* <div className="msg msg-neutral mrg-S">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
    </div> */}
            <h2 className="modal-sub-title">This is a Modal</h2>
            <p className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </p>
            <button type="button" name="button" className="btn btn-secondary title title-M">Cancel</button>
            <button type="button" name="button" className="btn btn-primary title title-M">Save</button>
          </div>

          <br />
          <br />
          <div className="modal scroll-container">
            <button className="modal-close" title="close"></button>
            <div className="scroll-block custom-scroll scrollable">
              <div className="scroll-content-wrapper">
                <div className="scroll-content">
                  <h2 className="title title-L test mrg-XS">10 Year Mattress Encasement Plan Twin</h2>
                  <h4 className="title-M title mrg-M">Sealy Essentials™ Holly Hills Firm - Mattress + Box Spring</h4>
                  BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage.</div>
              </div>
            </div>
            <div className="scroll-block-fade"></div>
          </div>
          <br />
          <br />
          <div className="modal scroll-container">
            <button className="modal-close" title="close"></button>
            <div className="scroll-block custom-scroll">
              <h2 className="title title-L test mrg-XS">10 Year Mattress Encasement Plan Twin</h2>
              <img src="https://www.jcpenney.com/dotcom/images/Levis_MENS_BT_DIV2_SIZECHART_OCT2016%20(002).jpg" alt="Marketing Content" />
            </div>
            <div className="scroll-block-fade"></div>
          </div>
          <br />
          <br />
          <div className="modal alert-pop-up informational-pop-up form-modal-pop">
            <button className="modal-close" title="close"></button>
            <h2 className="modal-sub-title title title-L">Send by Email</h2>
            <p className="modal-body std-txt std-txt-M">
              <h4 class="title-M title mrg-XS information-sendcopy"> Send a copy of your list to up to 10 email addresses </h4>
            </p>
            <div className="form-group column">
              <input className="form-control input-text " type="text" placeholder="To" />
            </div>
            <h4 class="title-XS title mrg-L information-sendcopy"> Separate emails by comma. This information will not be used for marketing purposes.</h4>
            <div className="form-group column">
              <textarea class="form-control text-area" name="instructions" placeholder="Your Message" ></textarea>
              <label class="checkbox mrg-M"><input type="checkbox" value="on" /> <span>Send me a copy</span> </label>
            </div>
            <button type="button" name="button" class="btn btn-primary title title-M form-save">Save</button>

          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Modal;