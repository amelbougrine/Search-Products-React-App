import React from 'react';
import './ProductTable.css'
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends React.Component {
  render() {
    let productsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let row = [];
    productsArray.forEach( (product) => {
      row.push(<ProductRow product={product} key={product.id} ></ProductRow> );
    });

    return (
      <div className="table">
        <table style={{margin: '0 auto 0 25px'}}>
          <thead>
            <tr>
              <th></th>
              <ProductTableHeader column="Name"></ProductTableHeader>
              <ProductTableHeader column="Price"></ProductTableHeader>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;