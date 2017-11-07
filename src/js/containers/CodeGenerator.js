import React, { Component } from 'react';
import $ from 'jquery';
import ClipboardButton from 'react-clipboard.js';
import CreateInput from './CreateInput';
import Utils from '../helpers/Utils'

class CodeGenerator extends Component {

    componentDidMount() {
        this.updateUIChanges();
    }

    updateUIChanges() {

        window.updateCodeGenerator = function () {

            let HTMLCode = String($(".code-generator").data("html-pattern"));

            $(".code-generator input, .code-generator select").each(function () {
                var value = $(this).val();
                if ($(this).attr('type') == "checkbox" && !$(this).is(':checked')) {
                    value = '';
                }
                var replaceTxt = '\\[\\[' + $(this).attr('name') + '\\]\\]';
                var regex = new RegExp(replaceTxt, 'g');

                HTMLCode = HTMLCode.replace(regex, value);
            });


            var HTMLCodePreview = Utils.decorateHtmlPreview(HTMLCode);

            HTMLCode = HTMLCode.replace(/\[\[(.*?)\]\]/g, "");

            $(".code-generator-preview").html(HTMLCode);

            $(".code-generator-code-preview").html(HTMLCodePreview);
            $(".code-generator-copy button").attr("data-clipboard-text", HTMLCode);

            $(".color-picker-swatch").each(function () {
                var attrColor = $(this).closest(".design-system-color-picker").find("select").val();
                var regex = new RegExp("-bg$");
                if (!regex.test(attrColor)) {
                    attrColor += "-bg";
                }
                $(this).removeClass().addClass('color-picker-swatch').addClass(attrColor);
            });
        }


        $('.code-generator input[type="text"]').keyup(function () {
            window.updateCodeGenerator();
        });

        $('.code-generator select, .code-generator input[type="checkbox"]').change(function () {
            window.updateCodeGenerator();
        });

        $(".code-generator-toggle-editor a").click(function () {
            if ($(this).html() == "Hide Editor") {
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
        setTimeout(function () {
            $(".code-generator-copy button").css('width', '').text("Copy Code");
        }, 5000)

    }

    createInputComponent() {
        return (<div className="code-generator-controls">
            <div className="code-generator-toggle-editor">
                <p className="std-txt std-txt-S mrg-zero"><a href="javascript:void();">Show Editor</a></p>
            </div>
            <div className="code-generator-edit hide-for-small-only">
                {this.props.formFields.map((field, index) => {
                    return (
                        <div key={index}>
                            <CreateInput name={field.name} value={field.value} displayLabel={field.displayLabel} fieldType={field.fieldType} defaultSelect={field.defaultSelect} />
                        </div>
                    )
                })}
            </div>
        </div>);
    }

    codePreviewComponent() {
        return (<div className="code-generator-left">
            <div className="code-generator-preview"></div>
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
            <div className="code-generator-code-preview"></div>
        </div>)
    }

    render() {
        return (
            <div>
                <div className="code-generator mrg-XL" data-html-pattern={this.props.htmlPattern}>
                    <div className="code-generator-right">
                        {this.createInputComponent()}
                    </div>
                    {this.codePreviewComponent()}
                </div>
            </div>
        );
    }
}

export default CodeGenerator