import React from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <ProductTableHeader ></ProductTableHeader>
        <ProductRow ></ProductRow>
      </div>
    );
  }
}

export default ProductTable;