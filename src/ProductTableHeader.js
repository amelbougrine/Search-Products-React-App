import React from 'react';
import './ProductTableHeader.css'

class ProductTableHeader extends React.Component {
  render() {
    return(
      <th className="heading">
        {this.props.column}<br/>
        <button>&#x25B2;</button>
        <button>&#x25BC;</button>
      </th>
    );
  }
}

export default ProductTableHeader;