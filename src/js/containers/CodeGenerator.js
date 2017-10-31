import React, { Component } from 'react';
import $ from 'jquery';
import ClipboardButton from 'react-clipboard.js';

class CreateInput extends Component {
    
    render() {
        if(this.props.fieldType == "text") {
            return (
                <div>
                      <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-S">{this.props.displayLabel}</label>
                      <input type="text" className="form-full mrg-M" name={this.props.name} defaultValue={this.props.value} />
                </div>
            )
        } else if(this.props.fieldType == "select") {
            return (
                <div>
                    <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-S">{this.props.displayLabel}</label>
                    <div className="mrg-M">
                      <span className="select select-M select-full">
                        <select name={this.props.name} defaultValue={this.props.defaultSelect}>
                          {this.props.value.map((field, index) => {
                                 return (
                                        <option key={index} value={field.value}>{field.text}
                                        </option>
                                    )
                                })}


                        </select>
                      </span>
                    </div>
                </div>
            )
        } else if(this.props.fieldType == "select-color") {
            return (
                <div>
                    <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-S">{this.props.displayLabel}</label>
                    <div class="design-system-color-picker mrg-M">
                        <span class="color-picker-icon selected"><span class="color-nightsky-bg color-picker-swatch"></span></span>
                        <span className="select select-M select-full">
                            <select name={this.props.name} defaultValue={this.props.defaultSelect}>
                                {this.props.value.map((field, index) => {
                                 return (
                                        <option key={index} value={field.value}>{field.text}
                                        </option>
                                    )
                                })}
                            </select>

                        </span>
                    </div>


                </div>
            )
        } else if(this.props.fieldType == "select-grouped") {
            return (
                <div>
                    <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-S">{this.props.displayLabel}</label>
                    <div className="mrg-M">
                      <span className="select select-M select-full">
                        <select name={this.props.name} defaultValue={this.props.defaultSelect}>
                          {this.props.value.map((field, index) => {
                                 return (
                                        <optgroup label={field.displayLabel} >

                                        {field.value.map((field, index) => {
                                         return (
                                                <option key={index} value={field.value}>{field.text}
                                                </option>
                                            )
                                        })}

                                        </optgroup>
                                    )
                           })}


                        </select>
                      </span>
                    </div>
                </div>
            )
        } else {

            return (
                <div>
                      <label className="checkbox mrg-S">
                          <input type="checkbox" name={this.props.name} value={this.props.value} defaultChecked={this.props.defaultSelect} /> <span className="std-txt std-txt-S">{this.props.displayLabel}</span>
                      </label>
                </div>
            )
        }

    }
}


class CodeGenerator extends Component {


componentDidMount() {
    window.updateCodeGenerator = function(){
        
        var HTMLCode = String($(".code-generator").data("html-pattern"));

        $(".code-generator input, .code-generator select").each(function(){
            var value = $(this).val();
            if($(this).attr('type') == "checkbox" && !$(this).is(':checked')) {
                value = '';

            }
            var replaceTxt = '\\[\\['+$(this).attr('name')+'\\]\\]';
            var regex = new RegExp(replaceTxt, 'g');

            HTMLCode = HTMLCode.replace(regex, value);
        });

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
          .replace(/\[\[format_br\]\]/g, '<br />')
          .replace(/(\s*)\<\/span/g, '</span')
          ;

        HTMLCode = HTMLCode.replace(/\[\[(.*?)\]\]/g, "");

        $(".code-generator-preview").html(HTMLCode);

        $(".code-generator-code-preview").html(HTMLCodePreview);
        $(".code-generator-copy button").attr("data-clipboard-text", HTMLCode);
        
        $(".color-picker-swatch").each(function(){
            var attrColor = $(this).closest(".design-system-color-picker").find("select").val();
            var regex = new RegExp("-bg$");
            if (!regex.test(attrColor)) {
                attrColor+="-bg";
            }
            $(this).removeClass().addClass('color-picker-swatch').addClass(attrColor);
        });

    }

    $('.code-generator input[type="text"]').keyup(function(){
        window.updateCodeGenerator();
    }); 

    $('.code-generator select, .code-generator input[type="checkbox"]').change(function(){
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

  onSuccess() {
    var element = $(".code-generator-copy button");
    var width = element.outerWidth();
    element.css('width', width).text("Copied");
    setTimeout(function(){
        $(".code-generator-copy button").css('width', '').text("Copy Code");
    }, 5000)

  }

  render() {


    return (
        <div>
            <div className="code-generator mrg-L" data-html-pattern={this.props.htmlPattern}>
                <div className="code-generator-right">
                    <div className="code-generator-controls">
                        <div className="code-generator-toggle-editor">
                            <p className="std-txt std-txt-S mrg-zero"><a href="javascript:void();">Show Editor</a></p>
                        </div>
                        <div className="code-generator-edit hide-for-small-only">
                            {this.props.formFields.map((field, index) => { return (
                            <div key={index}>
                                <CreateInput name={field.name} value={field.value} displayLabel={field.displayLabel} fieldType={field.fieldType} defaultSelect={field.defaultSelect} />
                            </div>
                            ) })}
                        </div>
                    </div>
                </div>
                <div className="code-generator-left">
                    <div className="code-generator-preview">
                    </div>
                    <div className="code-generator-code">
                        <div className="design-system-headline-with-toggle">
                            <div className="code-generator-copy">
                                <ClipboardButton data-clipboard-text="I'll be copied" onSuccess={this.onSuccess}>
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
        </div>
    );
  }
}

export default CodeGenerator