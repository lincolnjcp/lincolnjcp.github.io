import React, { Component } from 'react';
import $ from 'jquery';
import ClipboardButton from 'react-clipboard.js';

class Typography extends Component {

componentDidMount() {
    window.updateCodeGenerator = function(){
        var attrName = $('input[name="code_type_text"]').val();
        var attrSize = $('select[name="code_type_size"]').val();
        var attrAlignment = $('select[name="code_type_alignment"]').val();
        var attrColor = $('select[name="code_type_color"]').val();
        var attrMargin = $('select[name="code_type_margin"]').val();
        var HTMLCode = String($(".code-generator").data("html-pattern"))
          
          .replace(/\[\[code_type_text\]\]/g, attrName)
          .replace(/\[\[code_type_size\]\]/g, attrSize)
          .replace(/\[\[code_type_alignment\]\]/g, attrAlignment)
          .replace(/\[\[code_type_color\]\]/g, attrColor)
          .replace(/\[\[code_type_margin\]\]/g, attrMargin)
          ;

        var HTMLCodePreview = HTMLCode
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace('javascript:void();', '#')
          .replace(/\[\[format_tab_start\]\]/g, '<p class="code-format-tab">')
          .replace(/\[\[format_tab_end\]\]/g, '</p>')
          .replace(/\[\[format_attribute_start\]\]/g, '<span class="code-format-attribute">')
          .replace(/\[\[format_attribute_end\]\]/g, '</span>')
          .replace(/\[\[format_tag_start\]\]/g, '<span class="code-format-tag">')
          .replace(/\[\[format_tag_end\]\]/g, '</span>')
          .replace(/\[\[format_tag_value_start\]\]/g, '<span class="code-format-tag-value">')
          .replace(/\[\[format_tag_value_end\]\]/g, '</span>')
          .replace(/\[\[format_br\]\]/g, '<br /><br />')
          .replace(/(\s*)\</g, '<')
          ;

        HTMLCode = HTMLCode.replace(/\[\[(.*?)\]\]/g, "");

        $(".code-generator-preview").html(HTMLCode);

        $(".code-generator-code-preview").html(HTMLCodePreview);
        $(".code-generator-copy button").attr("data-clipboard-text", HTMLCode);

        $(".color-picker-swatch").removeClass().addClass('color-picker-swatch').addClass(attrColor+"-bg");


        /*

        var parent = $(this).closest(".design-system-toggle-section");
    var children = parent.find(".icon");
    var attr = parent.attr('data-color-class');
    var icon = parent.find('.color-picker-swatch');
    var curColorSVG = $(this).val()+"-svg";
    var curColorBG = $(this).val()+"-bg";
    if (typeof attr == typeof undefined) {
      attr = "color-nightsky-bg";
    }
    if (curColorSVG == "color-white-svg") {
      children.css("background-color", "#000");
    } else {
      children.css("background-color", "");
    }
    children.removeClass(attr);
    var attrBg = attr.replace('-svg', '-bg');
    icon.removeClass(attrBg);
    parent.attr('data-color-class', curColorSVG);
    children.addClass(curColorSVG);
    icon.addClass(curColorBG);

    */
    }

    $('input[name="code_type_text"]').keyup(function(){
        window.updateCodeGenerator();
    }); 

    $('.code-generator select').change(function(){
        window.updateCodeGenerator();
    }); 

    $(".code-generator-toggle-editor a").click(function(){
        if($(this).html() == "Hide Editor") {
            $(this).html("Show Editor");
            $(".code-generator-edit").addClass("hide-for-small-only");
        } else {
            $(this).html("Hide Editor");
            $(".code-generator-edit").removeClass("hide-for-small-only");
        }
    });

    window.updateCodeGenerator();
}

  render() {
    return (
<div>
    <div className="row">
        <div className="small-12 columns">
            <h1>Typography</h1>
            <h2>Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.<br /><br />

By consistently tying typographic styles to appropriate fuctions in the interface, we create a clear visual pattern for customers while they’re interacting with our product. </h2>
<hr />
        </div>
    </div>
    
    <div className="row" id="code-generator">
        <div className="small-12 columns">
            
            <h3>Code Generator</h3>
            
            
            <div className="code-generator" data-html-pattern="
                            <[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                class=&quot;[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]&quot;[[format_attribute_end]]>
                                [[format_tab_start]]
                                    [[code_type_text]]
                                [[format_tab_end]]
                            <[[format_tag_start]]/p[[format_tag_end]]>
                            [[format_br]]
                            <[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                class=&quot;[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]&quot;[[format_attribute_end]]>
                                [[format_tab_start]]
                                    [[code_type_text]]
                                [[format_tab_end]]
                            <[[format_tag_start]]/p[[format_tag_end]]>
                            [[format_br]]
                            <[[format_tag_start]]p[[format_tag_end]] [[format_attribute_start]]
                                class=&quot;[[format_attribute_end]][[format_tag_value_start]][[code_type_margin]] [[code_type_alignment]] [[code_type_size]] [[code_type_color]][[format_tag_value_end]][[format_attribute_start]]&quot;[[format_attribute_end]]>
                                [[format_tab_start]]
                                    [[code_type_text]]
                                [[format_tab_end]]
                            <[[format_tag_start]]/p[[format_tag_end]]>
                            ">
                <div className="code-generator-right">
                    <div className="code-generator-controls">
                        <div className="code-generator-toggle-editor">
                            <p className="std-txt std-txt-S mrg-zero"><a href="javascript:void();">Show Editor</a></p>
                        </div>
                        <div className="code-generator-edit hide-for-small-only">
                            <div className="">
                                <label htmlFor="name" className="std-txt std-txt-S mrg-S">Line 1</label>
                                <input type="text" className="form-full  mrg-M" name="code_type_text" defaultValue="Extra 20% Off" />
                            </div>
                            <label htmlFor="code_type_alignment" className="std-txt std-txt-S mrg-S">Color</label>
                            <div class="design-system-color-picker mrg-M">
                                  <span class="color-picker-icon selected"><span class="color-nightsky-bg color-picker-swatch"></span></span>
                                <span className="select select-M select-full">
                                        <select name="code_type_color">
                                          <option value="color-passion">Passion</option>
                                          <option value="color-lipstick">Lipstick</option>
                                          <option value="color-penneyred">Penney Red</option>
                                          <option value="color-blush">Blush</option>
                                          <option value="color-nightsky" selected>Night Sky</option>
                                          <option value="color-shadow">Shadow</option>
                                          <option value="color-slate">Slate</option>
                                          <option value="color-concrete">Concrete</option>
                                          <option value="color-lightgrey">Light Gray</option>
                                          <option value="color-white">White</option>
                                        </select>
                                      </span>
                            </div>
                            <label htmlFor="code_type_size" className="std-txt std-txt-S mrg-S">Size</label>
                            <div className="mrg-M">
                                <span className="select select-M select-full">
                                        <select name="code_type_size">
                                        <optgroup label="Price">
                                          <option value="price price-L">XL</option>
                                          <option value="price price-M">L</option>
                                          <option value="price price-S">M</option>
                                          <option value="price price-XS">S</option>
                                        </optgroup>
                                        <optgroup label="Title">
                                          <option value="title title-XXL">XXL</option>
                                          <option value="title title-XL">XL</option>
                                          <option value="title title-L">L</option>
                                          <option value="title title-M">M</option>
                                          <option value="title title-S">S</option>
                                        </optgroup>
                                        <optgroup label="Standard Text">
                                          <option value="std-txt std-txt-L">L</option>
                                          <option value="std-txt std-txt-M" selected>M</option>
                                          <option value="std-txt std-txt-S">S</option>
                                          <option value="std-txt std-txt-XS">XS</option>
                                        </optgroup>
                                        <optgroup label="Copy">
                                          <option value="M">M</option>
                                          <option value="S">S</option>
                                        </optgroup>
                                        </select>
                                      </span>
                            </div>
                            <label htmlFor="code_type_margin" className="std-txt std-txt-S mrg-S">Margin</label>
                            <div className="mrg-M">
                                <span className="select select-M select-full">
                                        <select name="code_type_margin">
                                        
                                          <option value="mrg-zero" selected>Zero</option>
                                          <option value="mrg-S">S</option>
                                          <option value="mrg-M">M</option>
                                          <option value="mrg-L">L</option>
                                          <option value="mrg-XL">XL</option>
                                        
                                        </select>
                                      </span>
                            </div>
                            <label htmlFor="code_type_alignment" className="std-txt std-txt-S mrg-S">Alignment</label>
                            <div className="mrg-M">
                                <span className="select select-M select-full">
                                        <select name="code_type_alignment">
                                          <option value="algn-lft" selected>Left</option>
                                          <option value="algn-mid">Center</option>
                                          <option value="algn-rght">Right</option>
                                        </select>
                                      </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="code-generator-left">
                    <div className="code-generator-preview">
                    </div>
                    <div className="code-generator-code">
                        <div className="design-system-headline-with-toggle">
                            <div className="code-generator-copy">
                                <ClipboardButton data-clipboard-text="I'll be copied">
                                    Copy Code
                                </ClipboardButton>
                            </div>
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

            <hr />
        </div>
    </div>
    
    <div className="row" id="price">
        <div className="small-12 columns">
            <h3>Price <span className="design-system-css-class design-system-css-class-inline">class="price"</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="typography-sample">
                <p className="price price-XL">$75.00</p>
                <p className="design-system-css-class">.price-XL</p>
            </div>
            <div className="typography-sample">
                <p className="price price-L">$75.00</p>
                <p className="design-system-css-class">.price-L</p>
            </div>
            <div className="typography-sample">
                <p className="price price-M">$75.00</p>
                <p className="design-system-css-class">.price-M</p>
            </div>
            <div className="typography-sample typography-sample-last">
                <p className="price price-S">$75.00</p>
                <p className="design-system-css-class">.price-S</p>
            </div>
            <hr />
        </div>
    </div>
    <div className="row" id="title">
        <div className="small-12 columns">
            <h3>Title <span className="design-system-css-class design-system-css-class-inline">class="title"</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="typography-sample">
                <p className="title title-XXL">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.title-XXL</p>
            </div>
            <div className="typography-sample">
                <p className="title title-XL">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.title-XL</p>
            </div>
            <div className="typography-sample">
                <p className="title title-L">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.title-L</p>
            </div>
            <div className="typography-sample">
                <p className="title title-M">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.title-M</p>
            </div>
            <div className="typography-sample typography-sample-last">
                <p className="title title-S">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.title-S</p>
            </div>
            <hr />
        </div>
    </div>
    <div className="row" id="standard-text">
        <div className="small-12 columns">
            <h3>Standard Text <span className="design-system-css-class design-system-css-class-inline">class="std-txt"</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="typography-sample">
                <p className="std-txt std-txt-L">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.std-txt-L</p>
            </div>
            <div className="typography-sample">
                <p className="std-txt std-txt-M">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.std-txt-M</p>
            </div>
            <div className="typography-sample">
                <p className="std-txt std-txt-S">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.std-txt-S</p>
            </div>
            <div className="typography-sample typography-sample-last">
                <p className="std-txt std-txt-XS">The quick brown fox jumps over the lazy dog.</p>
                <p className="design-system-css-class">.std-txt-XS</p>
            </div>
            <hr />
        </div>
    </div>
    
    <div className="row" id="copy">
        <div className="small-12 columns">
            <h3>Copy <span className="design-system-css-class design-system-css-class-inline">&lt;p&gt;</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="typography-sample">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="design-system-css-class">.M</p>
            </div>
            <div className="typography-sample typography-sample-last">
                <p className="S">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="design-system-css-class">.S</p>
            </div>
            <hr />
        </div>
    </div>
    <div className="row" id="lists">
        <div className="small-12 columns">
            <h3>Lists <span className="design-system-css-class design-system-css-class-inline">class=“list”</span></h3>
            <h5>Text Lists</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p className="design-system-css-class">???</p>
            <h5>Icon Lists</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list-icons">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p className="design-system-css-class">.list-icons</p>
            <h5>Link Lists</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list-links">
                <li><a href="javascript:void();">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
                <li><a href="javascript:void();">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
                <li><a href="javascript:void();">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
            </ul>
            <p className="design-system-css-class">.list-links</p>
            <hr />
        </div>
    </div>
    <div className="row" id="links">
        <div className="small-12 columns">
            <h3>Links</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><a href="javascript:void();">The quick brown fox jumps over the lazy dog.</a></p>
            <hr />
        </div>
    </div>
    <div className="row" id="promo-labels">
        <div className="small-12 columns">
            <h3>Promo Labels <span className="design-system-css-class design-system-css-class-inline">class=“promo-lbl”</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="promo-lbl promo-lbl-XL">Extra 20% Off</p>
            <p className="design-system-css-class">.promo-lbl-XL</p>
            <p className="promo-lbl promo-lbl-L">Extra 20% Off</p>
            <p className="design-system-css-class">.promo-lbl-L</p>
            <p className="promo-lbl promo-lbl-M">Extra 20% Off</p>
            <p className="design-system-css-class">.promo-lbl-M</p>
            <p className="promo-lbl promo-lbl-S">+ get an extra 10% off with your JCPenney Credit Card</p>
            <p className="design-system-css-class">.promo-lbl-S</p>
            <hr />
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    );
  }
}

export default Typography;