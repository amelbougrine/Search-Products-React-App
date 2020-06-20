import React from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable.js';

var PRODUCTS = {
  '1': {id: 1, category: 'Smartphone', price: '339,99$', stocked: true, name: 'Huawei Y9S'},
  '2': {id: 2, category: 'Smartphone', price: '1809,99$', stocked: true, name: 'iPhone 11'},
  '3': {id: 3, category: 'Smartphone', price: '1299,00$', stocked: false, name: 'Galaxy S10'},
  '4': {id: 4, category: 'Laptop', price: '2806,99$', stocked: true, name: 'MacBook Pro'},
  '5': {id: 5, category: 'Laptop', price: '1406,00$', stocked: false, name: 'HP EliteBook'},
  '6': {id: 6, category: 'Tablet', price: '735,99$', stocked: true, name: 'Apple iPad'}
}

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
      inStockOnly: false,
      products: PRODUCTS
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  saveProduct(product) {
    if (!product.id ) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return {products};
    });
  }
  handleDestroy(productId) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return {products};
    });
  }
  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        ></Filters>
        <ProductTable 
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDestroy={this.handleDestroy}
        ></ProductTable>
        <ProductForm
          onSave={this.saveProduct}
        ></ProductForm>
      </div>
    );
  } 
}

export default Products;