import React, { Component } from 'react';

class Grid extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div class="row" id="horizontal-grid">
          <div class="sm12 columns">

            <div class="show-for-xxs-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">XXS 320</h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 12px<br />
                columns: 6<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-xs-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">XS 360</h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                width: 360px<br />
                margin: 0 16px<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-small-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">S 600</h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 20px<br />
                columns: 12<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-medium-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">M 768</h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 20px<br />
                columns: 12<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-large-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">L 1024</h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 20px<br />
                columns: 12<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-xlarge-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">XL 1280 </h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 32px<br />
                columns: 12<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="show-for-xxlarge-only">
              <h4 class="promo-lbl promo-lbl-L mrg-btm-S">XXL 1366 </h4>
              <p class="mrg-btm-XL algn-lft title title-L color-nightsky">
                margin: 0 32px<br />
                columns: 12<br />
                column gutter: 16px<br />
                vertical spacing: 4px</p>
            </div>

            <div class="row">
              <div class="xxs12 xs12 sm12 md12 lg12 xl12 xxl12 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row">
              <div class="sm12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">full width</p>
              </div>
            </div>

            <div class="row hide-for-xs-only show-for-large-only show-for-xlarge-only show-for-xxlarge-only">
              <div class="xxs3 xs3 sm3 md3 lg3 xl3 xxl3 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs3 xs3 sm3 md3 lg3 xl3 xxl3 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs3 xs3 sm3 md3 lg3 xl3 xxl3 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs3 xs3 sm3 md3 lg3 xl3 xxl3 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row hide-for-xs-only show-for-large-only show-for-xlarge-only show-for-xxlarge-only">
              <div class="sm12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">4 columns</p>
              </div>
            </div>

            <div class="row show-for-small-only show-for-xs-only">
              <div class="xxs4 xs4 sm4 md4 lg4 xl4 xxl4 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs4 xs4 sm4 md4 lg4 xl4 xxl4 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs4 xs4 sm4 md4 lg4 xl4 xxl4 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row show-for-small-only show-for-xs-only">
              <div class="sm12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">3 columns</p>
              </div>
            </div>

            <div class="row show-for-xs-only show-for-xxs-only">
              <div class="xxs6 xs6 sm6 md6 lg6 xl6 xxl6 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs6 xs6 sm6 md6 lg6 xl6 xxl6 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row show-for-xs-only show-for-xxs-only">
              <div class="sm12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">2 columns</p>
              </div>
            </div>

            <div class="row hide-for-small-only hide-for-large-only hide-for-xlarge-only hide-for-xxlarge-only">
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="xxs2 xs2 sm2 md2 lg2 xl2 xxl2 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row hide-for-small-only hide-for-large-only hide-for-xlarge-only hide-for-xxlarge-only">
              <div class="xxs12 xs12 sm12 md12 lg12 xl12 xxl12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">6 columns</p>
              </div>
            </div>


            <div class="row hide-for-xs-only hide-for-xxs-only">
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
              <div class="sm1 lg1 xl1 xxl1 columns">
                <div class="grid-preview color-penneyred-bg"></div>
              </div>
            </div>

            <div class="row hide-for-xs-only hide-for-xxs-only">
              <div class="sm12 columns">
                <p class="mrg-btm-M algn-lft std-txt std-txt-S color-penneyred">12 columns</p>
              </div>
            </div>


            {/* <h3 class="title title-L mrg-L">Horizontal Grid</h3>
            <p class="mrg-L">The horizontal grid is key to understanding horizontal positioning of elements on a screen The horizontal grid contains the columns, gutters and margins of a page. Each column has a gutter on either side of the column. The margin is the padding on the outside of columns and gutters, and provides space outside of the content area</p>
            <h5 class="title title-M mrg-btm-S">Horizontal Grid Layout</h5>
            <table border="0" width="100%" class="table-full table-borders mrg-btm-XL algn-mid std-txt std-txt-S">
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

            <h5 class="title title-M mrg-btm-S">How The Grid Layout Works in Sketch</h5>
            <p>For the sake of documentation and design purposes, the horizontal grid layout, as stated by the table above will be how the grid is constructed</p>
            <div class="mrg-btm-M"><img src="/images/design-system/grids/grid-horizontal-grid-2.jpg" alt="" /></div>

            <h5 class="title title-M mrg-btm-S">****How a Grid works in Code</h5>
            <p class="mrg-btm-M">Within frameworks columns typically have gutters on either side of the column. This will not change the way pages are designed just good to understand how Sketch simplifies the grid.</p>

            <div class="design-system-grid-preview">
              <div class="row">
                <div class="sm1 columns first"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns"><div class="design-system-preview-inner"></div></div>
                <div class="sm1 columns last"><div class="design-system-preview-inner"></div></div>
              </div>
            </div>
            <div class="design-system-grid-preview-labels mrg-L">
              <div class="design-system-grid-preview-label-gutter">Gutter</div>
              <div class="design-system-grid-preview-label-column">Column</div>
            </div>

            <h5 class="title title-M mrg-btm-S">Column Composition</h5>
            <p class="mrg-btm-M">Columns Flex with the device width, gutters remain fixed unless transitioning between breakpoints, for example from small to medium.</p>
            <div class="mrg-btm-M"><img src="/images/design-system/grids/grid-horizontal-grid-4.jpg" alt="" /></div>
            <hr /> */}
          </div>
        </div>

        {/* <div class="row" id="vertical-grid">
          <div class="sm12 columns">
            <h3 class="title title-L mrg-L">Vertical Grid</h3>
            <p class="mrg-btm-M">Our vertical baseline grid is the key to achieving vertical rhythm. Vertical rhythm is the balanced spacing of elements as the user moves down the page. It is created by three factors: font size, line height and margin or padding. The diagram below shows how vertical spacing in 10-pixel increments helps create hierarchy and harmony between text and containers. The 10px increment was determined by the base unit</p>
            <div class="mrg-btm-M"><img src="/images/design-system/grids/grid-vertical-grid.jpg" alt="" /></div>
            <hr />
          </div>
        </div> */}

        {/* <div class="row" id="documentation">
          <div class="sm12 columns">
            <h3 class="title title-L mrg-L">Documentation &amp; Articles</h3>
            <p class="mrg-btm-M">General Breakdown of Spacing in Interactive Design<br />
              <a href="https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2" target="_blank">https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62#.u17jakpj2</a><br /><br />
            </p>
            <p class="mrg-btm-M">Material Designs Approach and Documentation of Units of Measurement<br />
              <a href="https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp" target="_blank">https://material.google.com/layout/units-measurements.html#units-measurements-designing-layouts-for-dp</a><br /><br />
            </p>
            <p class="mrg-btm-M">Most Common Device Sizes</p>
            <div class="mrg-btm-M"><img src="/images/design-system/grids/grid-documentation.jpg" alt="" /></div>
          </div>
        </div> */}


        <div class="row">
          <div class="sm12 columns">
            <hr />
            <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
              <br /> Latest update: 04/05/2017</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;