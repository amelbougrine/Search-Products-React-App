import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <span className={this.props.product.stocked ? "" : "productRow-out-of-stock"}>
            {this.props.product.name}
          </span>
        </td>
        <td>
          {this.props.product.price}
        </td>
        <td>
          <button onClick={this.destroy} className='red'>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;