import React from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable.js';

class Products extends React.Component {
  render() {
    return (
      <div>
        <Filters ></Filters>
        <ProductTable ></ProductTable>
        <ProductForm ></ProductForm>
      </div>
    );
  } 
}

export default Products;