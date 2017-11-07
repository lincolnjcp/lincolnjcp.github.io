import React, { Component } from 'react';

class CreateInput extends Component {

    // Rendering input text controls
    renderInputTextControl() {
        return (
            <div>
                <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-S">{this.props.displayLabel}</label>
                <input type="text" className="form-full mrg-M" name={this.props.name} defaultValue={this.props.value} />
            </div>
        );
    }

    //Rendering selection option
    renderSelectControl() {
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
            </div>);
    }

    //Rendering color selection option
    renderSelectColorControl() {
        return (<div>
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
        </div>);
    }

    //Rendering option group control
    renderOptionGroupControl() {
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
            </div>);
    }

    //Rendering checkbox control
    renderCheckboxControl() {
        return (
            <div>
                <label className="checkbox mrg-S">
                    <input type="checkbox" name={this.props.name} value={this.props.value} defaultChecked={this.props.defaultSelect} /> <span className="std-txt std-txt-S">{this.props.displayLabel}</span>
                </label>
            </div>
        );
    }


    render() {
        if (this.props.fieldType == "text") {
            return this.renderInputTextControl();
        } else if (this.props.fieldType == "select") {
            return this.renderSelectControl();
        } else if (this.props.fieldType == "select-color") {
            return this.renderSelectColorControl();
        } else if (this.props.fieldType == "select-grouped") {
            return this.renderOptionGroupControl();
        } else {
            return this.renderCheckboxControl();
        }

    }
}

export default CreateInput;