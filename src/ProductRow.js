import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name : <span className='productRow-out-of-stock'>{this.props.product.name}</span>;
    return (
      <tr>
        <td className="del">
          <button onClick={this.destroy} title='Delete'><b>x</b></button>
        </td>
        <td className='name'>{name}</td>
        <td dir="rtl" className='price'>
          {this.props.product.price}
        </td>
      </tr>
    );
  }
}

export default ProductRow;