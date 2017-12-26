import React, { Component } from 'react';

class Pagination extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="paginiation-block">
            <h1 class="title title-XL mrg-L">Pagination</h1>
            <div className="pagination mrg-XXL">
              <p className="std-txt-label">Selected</p>
              <ul>
                <li class="pagination-prev hidden" aria-label="Prev"></li>
                <li className="pagination-lbl pagination-active">1</li>
                <li className="pagination-lbl">2</li>
                <li className="pagination-lbl">3</li>
                <li className="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination-next" aria-label="Next"></li>
              </ul>
            </div>
            <div className="pagination mrg-XXL">
              <p className="std-txt-label">On Hover</p>
              <ul>
                <li class="pagination-prev hidden" aria-label="Prev"></li>
                <li className="pagination-lbl pagination-active">1</li>
                <li className="pagination-lbl hover">2</li>
                <li className="pagination-lbl">3</li>
                <li className="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination-next" aria-label="Next"></li>
              </ul>
            </div>
            <div className="pagination mrg-XXL">
              <p className="std-txt-label">Other pages selected</p>
              <ul>
                <li class="pagination-prev" aria-label="Prev"></li>
                <li className="pagination-lbl">1</li>
                <li className="pagination-lbl">2</li>
                <li className="pagination-lbl pagination-active">3</li>
                <li className="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination-next" aria-label="Next"></li>
              </ul>
            </div>
            <div className="pagination mrg-XXL">
              <p className="std-txt-label">s</p>
              <ul>
                <li class="pagination-prev" aria-label="Prev"></li>
                <li className="pagination-lbl">1</li>
                <li className="pagination-lbl pagination-active">2</li>
                <li className="pagination-lbl">3</li>
                <li className="pagination-lbl">4</li>
                <li class="pagination-elipsis">...</li>
                <li class="pagination-lbl">99</li>
                <li class="pagination-next" aria-label="Next"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;