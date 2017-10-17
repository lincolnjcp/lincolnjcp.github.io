import React, { Component } from 'react';
import $ from 'jquery'

class Buttons extends Component {

componentDidMount() {
    window.updateCodeGenerator = function(){
        var attrName = $('input[name="code_button_text"]').val();
        var attrSize = $('select[name="code_button_size"]').val();
        var attrStyle = $('select[name="code_button_style"]').val();
        var attrWidth = $('input[name="code_button_width"]:checked').length ? $('input[name="code_button_width"]').val() : '';
        var attrDisabled = $('input[name="code_button_disabled"]:checked').length ? $('input[name="code_button_disabled"]').val() : '';

        var HTMLCode = $(".code-generator").attr("data-html-pattern")
          .replace('[[code_button_text]]', attrName)
          .replace('[[code_button_size]]', attrSize)
          .replace('[[code_button_style]]', attrStyle)
          .replace('[[code_button_width]]', attrWidth)
          .replace('[[code_button_disabled]]', attrDisabled);

          var HTMLCodePreview = HTMLCode
          .replace('<', '&lt;')
          .replace('>', '&gt;');

        $(".code-generator-preview").html(HTMLCode);

        $(".code-generator-code-preview").html(HTMLCodePreview);
         //$(".code-generator-code-preview").html(HTMLCode);
    }

    $('input[name="code_button_text"]').keyup(function(){
        window.updateCodeGenerator();
    }); 

    $('select[name="code_button_size"], select[name="code_button_style"], input[name="code_button_width"], input[name="code_button_disabled"]').change(function(){
        window.updateCodeGenerator();
    }); 

    $(".code-generator-toggle-editor a").click(function(){
        if($(this).html() == "Hide Editor") {
            $(this).html("Show Editor");
            $(".code-generator-edit").addClass("hide");
        } else {
            $(this).html("Hide Editor");
            $(".code-generator-edit").removeClass("hide");
        }
    });

    window.updateCodeGenerator();
}

  render() {
    return (
      <div>
    <div className="row">
        <div className="small-12 columns">
            <h1>Buttons</h1>
            <h2>Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="small-12 columns">
            <hr />
            <h3>Code Generator</h3>

            <div className="code-generator" data-html-pattern="&lt;a href=&quot;javascript:void();&quot; class=&quot;btn [[code_button_size]] [[code_button_style]] [[code_button_width]] [[code_button_disabled]]&quot;&gt;[[code_button_text]]&lt;/a&gt;">
                            <div className="code-generator-right">
            <div className="code-generator-controls">
                    <div className="code-generator-toggle-editor">
                        <p className="std-txt std-txt-S mrg-L"><a href="javascript:void();">Hide Editor</a></p>
                    </div>
                    <div className="code-generator-edit">
                        <label for="name" className="std-txt std-txt-S mrg-S">Text Label</label>
                        <input type="text" className="form-full  mrg-M" name="code_button_text" defaultValue="My Button" />

                        <label for="name" className="std-txt std-txt-S mrg-S">Style</label>
                        <div className="mrg-M">
                          <span className="select select-M">
                            <select name="code_button_style">
                              <option value="btn-primary" selected>Primary</option>
                              <option value="btn-secondary">Secondary</option>
                            </select>
                          </span>
                        </div>

                        <label for="name" className="std-txt std-txt-S mrg-S">Size</label>
                        <div className="mrg-M">
                          <span className="select select-M">
                            <select name="code_button_size">
                              <option value="btn-S">Small</option>
                              <option value="btn-M">Medium</option>
                              <option value="btn-L"  selected>Large</option>
                            </select>
                          </span>
                        </div>

                        <label className="checkbox mrg-S">
                          <input type="checkbox" name="code_button_width" value="btn-full" /> <span className="std-txt std-txt-S">Full Width</span>
                        </label>

                        <label className="checkbox mrg-S">
                          <input type="checkbox" name="code_button_disabled" value="btn-disabled" /> <span className="std-txt std-txt-S">Disabled</span>
                        </label>

                        <label className="checkbox mrg-S">
                          <input type="checkbox" checked="true" /> <span className="std-txt std-txt-S">Display Content Loader</span>
                        </label>
                    </div>

                    </div>
                    </div>
                    <div className="code-generator-left">
                    <div className="code-generator-preview">
                        
                    </div>
                    <div className="code-generator-code">
                        <div className="design-system-headline-with-toggle">
                        <div className="code-generator-copy"><a href="javascript:void();">Copy Code</a></div>
                        <div className="design-system-headline-toggle">
                            <a href="javascript:void(0)" className="design-system-toggle left">React</a>
                            <a href="javascript:void(0)" className="design-system-toggle right active">HTML</a>
                        </div>
                        </div>
                        </div>
                        <div className="code-generator-code-preview">
                            
                        </div>
                        </div>

            </div>
        </div>
    </div>
    <div className="row" id="when-to-use">
        <div className="small-12 columns">
            <hr />
            <h3>When to Use</h3>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
            <div className="button-overview">
                <a href="javascript:void();" className="btn btn-primary btn-L mrg-L">Primary Large</a>
                <a href="javascript:void();" className="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                <a href="javascript:void();" className="btn btn-L btn-disabled mrg-L">Disabled Large</a>
                
            </div>
            <h5>Best Practices</h5>
            <ul>
                <li>Aenean lacinia bibendum nulla sed consectetur</li>
                <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
            </ul>
        </div>
    </div>
    <div className="row" id="appearance">
        <div className="small-12 columns">
            <hr />
            <h3>Appearance</h3>
            <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-primary btn-S mrg-L">Primary Small</a>
                    </div>

                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-primary btn-M mrg-L">Primary Medium</a>
                    </div>

                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-primary btn-L mrg-L">Primary Large</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Primary Action</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-secondary btn-S mrg-L">Secondary Small</a>
                    </div>

                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-secondary btn-M mrg-L">Secondary Medium</a>
                    </div>

                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-secondary btn-L mrg-L">Secondary Large</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Secondary Action</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-primary btn-L mrg-L btn-icon"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> Checkout</a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Icon and Label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row button-preview-row">
                <div className="small-12 medium-4 large-4 columns">
                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-primary btn-L mrg-L btn-icon btn-icon-slide"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> <span>Add to Cart</span></a>
                    </div>

                    <div className="button-preview algn-mid">
                      <a href="javascript:void();" className="btn btn-secondary btn-L mrg-L btn-icon btn-icon-slide"><img src="/images/global/icons/utility/cart/cart.svg" alt="" /> <span>Add to Cart</span></a>
                    </div>
                </div>
                <div className="small-12 medium-8 large-8 columns">
                    <h5 className="button-title">Icon Hover Effect</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row" id="responsive-behavior">
        <div className="small-12 columns">
            <hr />
            <h3>Responsive Behavior</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
            <div className="design-system-placeholder">Placeholder</div>
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <hr />
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Buttons;