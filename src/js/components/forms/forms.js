import React, { Component } from 'react';
import $ from 'jquery'

class Forms extends Component {

    componentDidMount() {

        $('#phone-number')
            .keydown(function (e) {
                var key = e.which || e.charCode || e.keyCode || 0;
                var $phone = $(this);

                // Don't let them remove the starting '('
                if ($phone.val().length === 1 && (key === 8 || key === 46)) {
                    $phone.val('(');
                    return false;
                }
                // Reset if they highlight and type over first char.
                else if ($phone.val().charAt(0) !== '(') {
                    $phone.val('(' + String.fromCharCode(e.keyCode) + '');
                }

                // Auto-format- do not expose the mask as the user begins to type
                if (key !== 8 && key !== 9) {
                    if ($phone.val().length === 4) {
                        $phone.val($phone.val() + ')');
                    }
                    if ($phone.val().length === 5) {
                        $phone.val($phone.val() + ' ');
                    }
                    if ($phone.val().length === 9) {
                        $phone.val($phone.val() + '-');
                    }
                }

                // Allow numeric (and tab, backspace, delete) keys only
                return (key == 8 ||
                    key == 9 ||
                    key == 46 ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            })

            .bind('focus click', function () {
                var $phone = $(this);

                if ($phone.val().length === 0) {
                    $phone.val('(');
                }
                else {
                    var val = $phone.val();
                    $phone.val('').val(val); // Ensure cursor remains at the end
                }
            })

            .blur(function () {
                var $phone = $(this);

                if ($phone.val() === '(') {
                    $phone.val('');
                }
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h1 className="title title-XL mrg-L">Forms</h1>
                        <h2 className="std-txt std-txt-XL mrg-L txt-max-width">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
                        <hr />
                    </div>
                </div>
                <div className="row" id="appearance">
                    <div className="small-12 columns">
                        <h3 className="title title-L mrg-L">Appearance</h3>
                        <p className="txt-max-width">Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br /><br /><br /> </p>
                        <div className="small-12 medium-12 columns email-form">
                            <div className="small-12 medium-4 columns">
                                <div className="form-group input-group">
                                    <span className="has-float-label">
                                        <input className="form-control email-text" id="email" type="text" placeholder="example@email.com" />
                                        <label htmlFor="email">Email</label>
                                    </span>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Text Field</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns select-form">
                            <div className="small-12 medium-4 columns select">
                                <label className="form-group has-float-label">
                                    <select className="form-control custom-select">
                                        <option value=''>Month</option>
                                        <option value='1'>01 - Janaury</option>
                                        <option value='2'>02 - February</option>
                                        <option value='3'>03 - March</option>
                                        <option value='4'>04 - April</option>
                                        <option value='5'>05 - May</option>
                                        <option value='6'>06 - June</option>
                                        <option value='7'>07 - July</option>
                                        <option value='8'>08 - August</option>
                                        <option value='9'>09 - September</option>
                                        <option value='10'>10 - October</option>
                                        <option value='11'>11 - November</option>
                                        <option value='12'>12 - December</option>
                                    </select>
                                    <span>Month</span>
                                </label>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Select Input</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns text-area-form">
                            <div className="small-12 medium-4 columns">
                                <div className="form-group input-group">
                                    <span className="has-float-label">
                                        <textarea className="form-control" name="instructions">Please deliver to side service entrance of apartment building. Enter code 9090 to access garage.</textarea>
                                        <label htmlFor="instructions">Delivery Instructions</label>
                                    </span>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Textarea</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns radio-button-form">
                            <div className="small-12 medium-4 columns">
                                <div className="form-group input-group">
                                    <div className="mrg-XL">
                                        <input type="radio" id="one" name="name" value="" defaultChecked="true" />
                                        <label htmlFor="one">Ship to Home<br />
                                            <span className="std-txt">Arrives May 5th - May 23rd</span></label>
                                    </div>
                                    <div className="mrg-XL">
                                        <input type="radio" id="two" name="name" value="" defaultChecked="true" />
                                        <label htmlFor="two">
                                            <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                        </label>
                                    </div>
                                    <div className="mrg-XL">
                                        <input type="radio" disabled id="three" name="name" value="" />
                                        <label htmlFor="three">
                                            <p className="std-txt std-txt-M"><span className="color-penneyred">FREE</span> Store Pickup Today at <br /><a href="#">Stonebriar Mall</a></p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Radio Button</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns checkbox-form">
                            <div className="small-12 medium-4 columns">
                                <div className="form-group input-group">
                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" disabled="true" /> <span>Disabled Checkbox</span>
                                    </label>

                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" /> <span>Checkbox</span>
                                    </label>

                                    <label className="checkbox mrg-M">
                                        <input type="checkbox" defaultChecked="true" /> <span>Checkbox</span>
                                    </label>

                                    <br />

                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Checkbox</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns phone-form">
                            <div className="small-12 medium-4 columns">
                                <div className="form-group input-group">
                                    <span className="has-float-label">
                                        <input className="form-control email-text" id="phone-number" maxlength="14" type="text" placeholder="( ___ ) ___-____" />
                                        <label htmlFor="Phone">Phone Number</label>
                                    </span>
                                </div>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Phone Number</h4>
                                <p className="txt-max-width">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;
