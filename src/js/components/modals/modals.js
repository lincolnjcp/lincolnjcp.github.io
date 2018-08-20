import React, { Component } from 'react';

const errorImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/error.svg');
const successImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success.svg');

class Modals extends Component {

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
        <div className="row">
          <div className="modal-overlay"></div>
          <div className="modal elevation-2 modal-S">
            <button className="modal-close" title="close"></button>
            <h2 className="title title-L mrg-btm-M">Delete Address</h2>
            <p className="mrg-btm-XL std-txt std-txt-M">
              Are you sure you want to delete this address from your account?
            </p>
            <a href="javascript:void();" role="button" className="btn btn-secondary btn-M title title-M mrg-rght-S btn-grey-txt">No</a>
            <a href="javascript:void();" role="button" className="btn btn-primary btn-M title title-M">Yes</a>
          </div>

          <br />
          <br />
          <div className="modal elevation-2 modal-L text-left">
            <button className="modal-close" title="close"></button>
            <h2 className="title title-L mrg-btm-M">Truckable Item Delivery</h2>
            <p className="std-txt std-txt-M mrg-btm-L">
              Some heavy or bulky items cannot be delivered via UPS, USPS or FedEx. These items must be delivered via truck.
            </p>
            <ul className="mrg-btm-XL std-txt std-txt-M list">
              <li>Additional delivery charges may apply and will be reflected at checkout.</li>
              <li>You will be contacted in 7 to 14 days from the time the item is shipped to schedule a delivery appointment.</li>
              <li>After delivery, you may be contacted about your satisfaction.</li>
              <li>All contacts may be automated calls to the number you provided for delivery.</li>
              <li>You must be present to accept delivery.</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="modal elevation-2 modal-S">
            <button className="modal-close" title="close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: errorImage }} />
            <h2 className="title title-L mrg-btm-M">Account Locked</h2>
            <div className="std-txt std-txt-M mrg-btm-M">
              Check the email <em class="email-text">username@emaildomain.com</em>
              for instructions on how to unlock it.
            </div>
            <a href="javascript:void();" role="button" className="btn btn-secondary btn-M title title-M btn-grey-txt">Ok</a>
          </div>

          <br />

          <div className="modal elevation-2 modal-S">
            <button className="modal-close" title="close"></button>
            <p className="mrg-btm-S">Online & In Store</p>
            <h2 className="promo-lbl promo-lbl-XL mrg-btm-S">Extra 15% OFF</h2>
            <p className="mrg-btm-XL">Show coupon to sales associate</p>
            <a href="javascript:void();" role="button" className="btn btn-secondary btn-M title title-M btn-grey-txt">Print Coupon</a>
          </div>

          <br />

          <div className="modal elevation-2 modal-S">
            <button className="modal-close" title="close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: successImage }} />
            <h2 className="modal-sub-title title title-L">Coupon Applied</h2>
            <p className="mrg-btm-XL std-txt std-txt-M">
              You saved $78.99
            </p>
            <a href="javascript:void();" role="button" className="btn btn-secondary btn-M title title-M btn-grey-txt">Ok</a>
          </div>

          <br />
          <br />
          <div className="modal elevation-2 scroll-container modal-L">
            <button className="modal-close" title="close"></button>
            <div className="scroll-block custom-scroll scrollable">
              <div className="scroll-content-wrapper">
                <div className="scroll-content">
                  <h2 className="title title-L test mrg-btm-XS">10 Year Mattress Encasement Plan Twin</h2>
                  <h4 className="title-M title mrg-btm-M">Sealy Essentials™ Holly Hills Firm - Mattress + Box Spring</h4>
                  BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage.</div>
              </div>
            </div>
            <div className="scroll-block-fade"></div>
          </div>
          <br />
          <br />
          <div className="modal elevation-2 scroll-container modal-M">
            <button className="modal-close" title="close"></button>
            <div className="scroll-block custom-scroll scrollable">
              <div className="scroll-content-wrapper">
                <div className="scroll-content">
                  <h2 className="title title-L test mrg-btm-XS">10 Year Mattress Encasement Plan Twin</h2>
                  <h4 className="title-M title mrg-btm-M">Sealy Essentials™ Holly Hills Firm - Mattress + Box Spring</h4>
                  BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage.</div>
              </div>
            </div>
            <div className="scroll-block-fade"></div>
          </div>
          <br />
          <br />
          <div className="modal elevation-2 scroll-container modal-L">
            <button className="modal-close" title="close"></button>
            <div className="scroll-block custom-scroll">
              <h2 className="title title-L test mrg-btm-XS">10 Year Mattress Encasement Plan Twin</h2>
              <img src="https://www.jcpenney.com/dotcom/images/Levis_MENS_BT_DIV2_SIZECHART_OCT2016%20(002).jpg" alt="Marketing Content" />
            </div>
            <div className="scroll-block-fade"></div>
          </div>
          <br />
          <br />
          <div className="modal elevation-2 form-modal elevation-2 modal-M input-form">
            <button className="modal-close" title="close"></button>
            <h2 className="title title-L algn-lft algn-lft mrg-btm-XS">Send by Email</h2>
            <p className="mrg-btm-XL std-txt std-txt-M fl-left">
              <h4 class="title-M title mrg-btm-XS color-slate algn-lft"> Send a copy of your list to up to 10 email addresses </h4>
            </p>
            <div class="input-group">
                <div class="form-float-label">
                    <input class="form-control email-text input-text" id="email" type="text" placeholder="To " />
                    <label htmlFor="email">To</label>
                </div>
            </div>
            <h4 class="title-XS std-txt mrg-btm-L fl-left algn-lft">Separate emails by comma. This information will not be used for marketing purposes.</h4>
            <div class="input-group">
                <div class="form-float-label">
                    <textarea class="form-control input-text text-area" name="instructions" placeholder="Your Message"></textarea>
                    <label htmlFor="instructions">Your Message</label>
                </div>
            </div>
            <div class="input-group">
              <label class="checkbox mrg-btm-M mrg-top-S algn-lft">
                  <input type="checkbox" /> <span>Send me a copy</span>
              </label>
            </div>
            <div className="md12 sm12 lg12 xl12 nopad">
              <a href="javascript:void();" role="button" className="btn btn-primary btn-M title title-M fl-right">Save</a>
            </div>
            
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Modals;