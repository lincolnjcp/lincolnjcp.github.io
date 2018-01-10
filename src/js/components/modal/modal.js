import React, { Component } from 'react';

const errorImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/error.svg');
const successImage = require('!!raw-loader?es5=1!../../../images/global/icons/alert/success.svg');

class Modal extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="modal-overlay"></div>
          <div className="modal">
            <button className="modal-close"></button>
            <h2 className="modal-sub-title">This is a Modal</h2>
            <p className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </p>
            <button type="button" name="button" className="btn btn-secondary btn-L">Cancel</button>
            <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
          </div>

          <br />

          <div className="modal">
            <button className="modal-close"></button>
            <h2 className="modal-sub-title">This is a Modal with One CTA</h2>
            <p className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </p>
            <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
          </div>

          <br />

          <div className="modal">
            <button className="modal-close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: errorImage }} />
            <h2 className="modal-sub-title mrg-L">Your Cart is Empty</h2>
            <p className="modal-body">
              Oops! We cannot apply this coupon because your cart is empty. We can apply this coupon code once you add an item to your bag.
            </p>
            <button type="button" name="button" className="btn btn-secondary btn-L btn-grey-txt">Shop Sales</button>
            <button type="button" name="button" className="btn btn-primary btn-L">OK</button>
          </div>

          <br />

          <div className="modal">
            <button className="modal-close"></button>
            <p className="mrg-S">Online & In Store</p>
            <h2 className="modal-title-XXL title mrg-S">Extra 15% OFF</h2>
            <p className="modal-body">Show coupon to sales associate</p>
            <button type="button" name="button" className="btn btn-secondary btn-L btn-grey-txt">Print Coupon</button>
          </div>

          <br />

          <div className="modal">
            <button className="modal-close"></button>
            <span className="icon" dangerouslySetInnerHTML={{ __html: successImage }} />
            <h2 className="modal-sub-title mrg-L">Coupon Applied</h2>
            <p className="modal-body">
            You saved $78.99
            </p>
            <button type="button" name="button" className="btn btn-secondary btn-L btn-grey-txt">OK</button>
          </div>

          <br />

          <div className="modal">
            <button className="modal-close"></button>
            <div className="msg msg-neutral mrg-S">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            </div>
            <h2 className="modal-sub-title">This is a Modal</h2>
            <p className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </p>
            <button type="button" name="button" className="btn btn-secondary btn-L">Cancel</button>
            <button type="button" name="button" className="btn btn-primary btn-L">Save</button>
          </div>

          <br />

          <div className="modal scroll-container">
              <button className="modal-close"></button>
              <div className="scroll-block custom-scroll">
                <h2 className="title title-L test">10 Year Mattress Encasement Plan Twin</h2>
                <h4 className="title-M title mrg-L">Sealy Essentials™ Holly Hills Firm - Mattress + Box Spring</h4>
                BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage. BEDGARD ENCASEMENT: 10 Year Plan with Encasement: For new residential mattresses purchased in conjunction with a BedGard Encasement. Coverage includes: All accidental stains (excluding accumulations). Construction of Mattress Protector. WHY BEDGARD ENCASEMENT? The manufacturer of the mattress will void the warranty if the mattress is stained. A full encasement reduces conditions which attract dust mites, allergens and bed bugs. HOW DOES IT WORK? Customers purchase and use the BedGard Protector along with their new residential mattress. If their mattress becomes stained during normal residential use while using the protector, the affected portion or the complete mattress will be repaired or replaced!HOW LONG IS COVERAGE? The BedGard Product Limited Warranty is effective for ten (10) years from the date the customer takes delivery of the Mattress Protector and the Mattress. WHAT PROBLEMS ARE COVERED? Construction and staining of the BedGard Mattress Protector/Pad. All accidental stains attributed to a single occurrence (excluding accumulation defined as a gradual buildup of dirt, dust, body oils and perspiration). HOW LONG DOES THE CUSTOMER HAVE TO REPORT A PROBLEM? Problems must be reported within ten (10) days of occurrence of the stain or damage.</div>
              <div className="scroll-block-fade"></div>
          </div> 

        </div>
      </div>
    );
  }
}

export default Modal;