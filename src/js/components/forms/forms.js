import React, { Component } from 'react';
import $ from 'jquery'

class Forms extends Component {

    componentDidMount() {
        $('select').change(function () {
            var selectedClass = $(".select select");
            selectedClass.val() == '' ? $('.select-label').addClass('hide') : $('.select-label').removeClass('hide');
        });

        $('.email-text').on('keyup keydown keypress change paste', function() {       
            if ($(this).val() != '') {
                $('.email-label').removeClass('hide');
            } else {
                $('.email-label').addClass('hide'); 
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
                        <p>Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <br/><br/><br/> </p>
                        <div className="small-12 medium-12 columns email-form">
                            <div className="small-12 medium-4 columns">
                                <span className="email-label hide">Email</span>
                                <input className="email-text" type="text" placeholder="Email"/>
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Text Field</h4>
                                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                            </div>
                        </div>
                        <div className="small-12 medium-12 columns select-form">
                            <div className="small-12 medium-4 columns select">
                                <span className="select-label hide">Month</span>
                                <select name="select_month" >
                                    <option value=''>Select Month</option>
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
                            </div>
                            <div className="small-12 medium-8 columns">
                                <h4 className="title title-M mrg-L">Select Input</h4>
                                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Forms;