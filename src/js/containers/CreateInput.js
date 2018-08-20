import React, { Component } from 'react';

class CreateInput extends Component {

    // Rendering input text controls
    renderInputTextControl() {
        return (
            <div className="row mrg-btm-M">
                <div className="sm12 columns">
                    <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-btm-S">{this.props.displayLabel}</label>
                    <input type="text" className="form-full" name={this.props.name} defaultValue={this.props.value} />
                </div>
            </div>
        );
    }

    //Rendering selection option
    renderSelectControl() {
        return (
                <div className="row mrg-btm-L">
                  <div className="sm12 columns select-form">
                      <div className="sm12 columns select">
                          <div className="form-float-label">
                              <select className="form-control custom-select" name={this.props.name} defaultValue={this.props.defaultSelect}>
                                  {this.props.value.map((field, index) => {
                                return (
                                    <option key={index} value={field.value}>{field.text}
                                    </option>
                                )
                            })}
                              </select>
                              <span>{this.props.displayLabel}</span>
                          </div>
                      </div>
                  </div>                            
                </div>
            );
    }

    //Rendering color selection option
    renderSelectColorControl() {
        return (<div className="row mrg-btm-L">
                  <div className="sm12 columns">
            <label htmlFor={this.props.name} className="std-txt std-txt-S mrg-btm-S">{this.props.displayLabel}</label>
            <div class="design-system-color-picker">
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
        </div>);
    }

    //Rendering option group control
    renderOptionGroupControl() {
        return (
            <div className="row mrg-btm-L">
              <div className="sm12 columns select-form">
                  <div className="sm12 columns select">
                      <div className="form-float-label">
                          <select className="form-control custom-select" name={this.props.name} defaultValue={this.props.defaultSelect}>
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
                          <span>{this.props.displayLabel}</span>
                      </div>
                  </div>
              </div>                            
            </div>);
    }

    //Rendering checkbox control
    renderCheckboxControl() {
        return (
            <div className="row mrg-btm-L">
              <div className="sm12 columns select-form">
                <label className="checkbox mrg-btm-S">
                    <input type="checkbox" name={this.props.name} value={this.props.value} defaultChecked={this.props.defaultSelect} /> <span className="std-txt std-txt-S">{this.props.displayLabel}</span>
                </label>
              </div>
            </div>
        );
    }

    renderSelectPatternControl() {
        return (
                <div className="row mrg-btm-L">
                  <div className="sm12 columns select-form">
                      <div className="sm12 columns select">
                          <div className="form-float-label">
                              <select className="form-control custom-select select-pattern" name={this.props.name} defaultValue={this.props.defaultSelect}>
                                  {this.props.value.map((field, index) => {
                                return (
                                    <option key={index} value={field.value}>{field.text}
                                    </option>
                                )
                            })}
                              </select>
                              <span>{this.props.displayLabel}</span>
                          </div>
                      </div>
                  </div>                            
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
        } else if (this.props.fieldType == "select-pattern") {
            return this.renderSelectPatternControl();
        } else {
            return this.renderCheckboxControl();
        }

    }
}

export default CreateInput;