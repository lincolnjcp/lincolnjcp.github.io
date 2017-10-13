import React, { Component } from 'react';

class Grid extends Component {

componentDidMount() {
}

  render() {
    return (
<div>
    <div className="row">
        <div className="small-12 columns">
            <h1>Grid, Spacing &amp; Layout</h1>
            <h2>To promote a sense of visual harmony across a wide range of applications, the design system provides the following recommendations on how to combine components into complex patterns and screen layouts.<br /><br />
There are two kinds of grids that occur within JCPenney eCommerce Platforms, horizontal and vertical. The following breakpoints have been designed to guide the layout and the scaling of elements across screen resolutions. <br /><br />
The screen sizes were determined by a combination of common screen resolutions, previous JCP design work, along with input from various Screen Inventory documentation conducted by JCPenney. Dimensions for an X-Large Screen was accounted for; however, small to large will be the teams primary focus.</h2>
<hr />
        </div>
    </div>
    
    
    <div className="row" id="base-unit">
        <div className="small-12 columns">
            <h3>Base Unit</h3>
            <p>Measurements are recorded in rems. A rem is a relative size that allows elements to scale better between different screen sizes and device types. One rem is equivalent to 8 pixels in design software such as Sketch or Photoshop. 8 was chosen. 8 was chosen for its high level of divsibility and easy scalibility for retina devices (Example @0.5) and @1.5X).</p>
            <p>Every spatial and layout design decision should at consider this basic measurement first.</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-base-unit.jpg" alt="" /></div>
            <hr />
        </div>
    </div>

    <div className="row" id="horizontal-grid">
        <div className="small-12 columns">
            <h3>Horizontal Grid</h3>
            <p>The horizontal grid is key to understanding horizontal positioning of elements on a screen The horizontal grid contains the columns, gutters and margins of a page. Each column has a gutter on either side of the column. The margin is the padding on the outside of columns and gutters, and provides space outside of the content area</p>
            <h5>Horizontal Grid Layout</h5>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-horizontal-grid-1.jpg" alt="" /></div>

            <h5>How The Grid Layout Works in Sketch</h5>
            <p>For the sake of documentation and design purposes, the horizontal grid layout, as stated by the table above will be how the grid is constructed</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-horizontal-grid-2.jpg" alt="" /></div>

            <h5>****How a Grid works in Code</h5>
            <p>Within frameworks columns typically have gutters on either side of the column. This will not change the way pages are designed just good to understand how Sketch simplifies the grid.</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-horizontal-grid-3.jpg" alt="" /></div>

            <h5>Column Composition</h5>
            <p>Columns Flex with the device width, gutters remain fixed unless transitioning between breakpoints, for example from small to medium.</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-horizontal-grid-4.jpg" alt="" /></div>
            <hr />
        </div>
    </div>

    <div className="row" id="vertical-grid">
        <div className="small-12 columns">
            <h3>Vertical Grid</h3>
            <p>Our vertical baseline grid is the key to achieving vertical rhythm. Vertical rhythm is the balanced spacing of elements as the user moves down the page. It is created by three factors: font size, line height and margin or padding. The diagram below shows how vertical spacing in 10-pixel increments helps create hierarchy and harmony between text and containers. The 10px increment was determined by the base unit</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-vertical-grid.jpg" alt="" /></div>
            <hr />
        </div>
    </div>

    <div className="row" id="documentation">
        <div className="small-12 columns">
            <h3>Documentation &amp; Articles</h3>
            <p>General Breakdown of Spacing in Interactive Design<br />
            <a href="https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2" target="_blank">https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2</a><br /><br />
            </p>
            <p>Material Designs Approach and Documentation of Units of Measurement<br />
            <a href="https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp" target="_blank">https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp</a><br /><br />
            </p>
            <p>Most Common Device Sizes</p>
            <div class="design-system-preview-image"><img src="/images/design-system/grid-documentation.jpg" alt="" /></div>
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

export default Grid;