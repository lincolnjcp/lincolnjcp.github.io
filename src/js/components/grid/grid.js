import React, { Component } from 'react';

class Grid extends Component {

componentDidMount() {
}

  render() {
    return (
<div>
    <div className="row">
        <div className="small-12 columns">
            <h1 className="title title-XL mrg-L">Grid, Spacing &amp; Layout</h1>
            <h2 className="std-txt std-txt-XL mrg-L max-width-text">To promote a sense of visual harmony across a wide range of applications, the design system provides the following recommendations on how to combine components into complex patterns and screen layouts.<br /><br />
There are two kinds of grids that occur within JCPenney eCommerce Platforms, horizontal and vertical. The following breakpoints have been designed to guide the layout and the scaling of elements across screen resolutions. <br /><br />
The screen sizes were determined by a combination of common screen resolutions, previous JCP design work, along with input from various Screen Inventory documentation conducted by JCPenney. Dimensions for an X-Large Screen was accounted for; however, small to large will be the teams primary focus.</h2>
<hr />
        </div>
    </div>
    
    
   

    <div className="row" id="horizontal-grid">
        <div className="small-12 columns">
            <h3 className="title title-L mrg-L">Horizontal Grid</h3>
            <p className="mrg-L">The horizontal grid is key to understanding horizontal positioning of elements on a screen The horizontal grid contains the columns, gutters and margins of a page. Each column has a gutter on either side of the column. The margin is the padding on the outside of columns and gutters, and provides space outside of the content area</p>
            <h5 className="title title-M mrg-S">Horizontal Grid Layout</h5>
            <table border="0" width="100%" className="table-full table-borders mrg-XL algn-mid std-txt std-txt-S">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Screen Size
          </th>
          <th>
            Number of Columns
          </th>
          <th>
            Columns Gutter
          </th>
          <th>
            Margins
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Small
          </td>
          <td>
            0-599
          </td>
          <td rowspan="4">
            12
          </td>
          <td>
            16px
          </td>
          <td>
            8px
          </td>
        </tr>
        <tr>
          <td>
            Medium
          </td>
          <td>
            600-1023
          </td>

          <td>
            16px
          </td>
          <td>
            16px
          </td>
        </tr>

        <tr>
          <td>
            Large
          </td>
          <td>
            1024-1439
          </td>

          <td>
            24px
          </td>
          <td>
            16px
          </td>
        </tr>
        <tr>
          <td>
            X-Large
          </td>
          <td>
           1440+
          </td>

          <td>
            24px
          </td>
          <td>
            24px
          </td>
        </tr>
      </tbody>
    </table>

            <h5 className="title title-M mrg-S">How The Grid Layout Works in Sketch</h5>
            <p>For the sake of documentation and design purposes, the horizontal grid layout, as stated by the table above will be how the grid is constructed</p>
            <div className="mrg-M"><img src="/images/design-system/grids/grid-horizontal-grid-2.jpg" alt="" /></div>

            <h5 className="title title-M mrg-S">****How a Grid works in Code</h5>
            <p className="mrg-M">Within frameworks columns typically have gutters on either side of the column. This will not change the way pages are designed just good to understand how Sketch simplifies the grid.</p>
            
            <div className="design-system-grid-preview">
                <div className="row">
                    <div className="small-1 columns first"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns"><div className="design-system-preview-inner"></div></div>
                    <div className="small-1 columns last"><div className="design-system-preview-inner"></div></div>
                </div>
            </div>
            <div className="design-system-grid-preview-labels mrg-L">
                <div className="design-system-grid-preview-label-gutter">Gutter</div>
                <div className="design-system-grid-preview-label-column">Column</div>
            </div>

            <h5 className="title title-M mrg-S">Column Composition</h5>
            <p className="mrg-M">Columns Flex with the device width, gutters remain fixed unless transitioning between breakpoints, for example from small to medium.</p>
            <div className="mrg-M"><img src="/images/design-system/grids/grid-horizontal-grid-4.jpg" alt="" /></div>
            <hr />
        </div>
    </div>

    <div className="row" id="vertical-grid">
        <div className="small-12 columns">
            <h3 className="title title-L mrg-L">Vertical Grid</h3>
            <p className="mrg-M">Our vertical baseline grid is the key to achieving vertical rhythm. Vertical rhythm is the balanced spacing of elements as the user moves down the page. It is created by three factors: font size, line height and margin or padding. The diagram below shows how vertical spacing in 10-pixel increments helps create hierarchy and harmony between text and containers. The 10px increment was determined by the base unit</p>
            <div className="mrg-M"><img src="/images/design-system/grids/grid-vertical-grid.jpg" alt="" /></div>
            <hr />
        </div>
    </div>

    <div className="row" id="documentation">
        <div className="small-12 columns">
            <h3 className="title title-L mrg-L">Documentation &amp; Articles</h3>
            <p className="mrg-M">General Breakdown of Spacing in Interactive Design<br />
            <a href="https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2" target="_blank">https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2</a><br /><br />
            </p>
            <p className="mrg-M">Material Designs Approach and Documentation of Units of Measurement<br />
            <a href="https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp" target="_blank">https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp</a><br /><br />
            </p>
            <p className="mrg-M">Most Common Device Sizes</p>
            <div className="mrg-M"><img src="/images/design-system/grids/grid-documentation.jpg" alt="" /></div>
        </div>
    </div>
    
    
    <div className="row">
        <div className="small-12 columns">
            <hr />
            <p className="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    );
  }
}

export default Grid;