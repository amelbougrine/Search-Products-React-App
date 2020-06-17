import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="del">
          <button onClick={this.destroy} title='Delete'><b>x</b></button>
        </td>
        <td className='name'>
          <span className={this.props.product.stocked ? "" : "productRow-out-of-stock"}>
            {this.props.product.name}
          </span>
        </td>
        <td dir="rtl" className='price'>
          {this.props.product.price}
        </td>
      </tr>
    );
  }
}

export default ProductRow;