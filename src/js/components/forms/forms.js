import React, { Component } from 'react';
import $ from 'jquery'

class Forms extends Component {

    componentDidMount() {
        $('select').change(function () {
            var selectedClass = $(".select select");
            selectedClass.val() == '' ? $('.select-label').addClass('hide') : $('.select-label').removeClass('hide');
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
                        <p>Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                        <div className="small-12 medium-12 columns">
                            <form>
                                <div className="small-12 medium-4 columns select">
                                    <span className="select-label hide">Month</span>
                                    <select className="" name="select_month" >
                                        <option value=''>Select Month</option>
                                        <option value='1'>Janaury</option>
                                        <option value='2'>February</option>
                                        <option value='3'>March</option>
                                        <option value='4'>April</option>
                                        <option value='5'>May</option>
                                        <option value='6'>June</option>
                                        <option value='7'>July</option>
                                        <option value='8'>August</option>
                                        <option value='9'>September</option>
                                        <option value='10'>October</option>
                                        <option value='11'>November</option>
                                        <option value='12'>December</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="small-12 medium-8 columns">
                            <h4 className="title title-M mrg-L">Text Field</h4>
                            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus.<br /><br /><br /><br /></p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Forms;