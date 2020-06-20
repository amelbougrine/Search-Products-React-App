import React from 'react';
import './ProductTable.css'
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        column: '',
        direction: ''
      }
    };
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  sortByKeyAndOrder(objectA,objectB) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    if (this.state.sort.column === 'Price') {
      var [a, b] = [objectA.price, objectB.price];
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
    } else { 
      var [a, b] = [objectA.name, objectB.name];    
    } 
    if (a > b) {
      return (1 * isDesc);
    }
    if (a < b) {
      return (-1 * isDesc);
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    return productsAsArray.sort(this.sortByKeyAndOrder);
  }
  handleDestroy(id) {
    this.props.onDestroy(id);
  }
  handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }
  render() {
    let row = [];
    this.sortProducts().forEach( (product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      row.push(<ProductRow product={product} key={product.id} onDestroy={this.handleDestroy}></ProductRow> );
    });
    return (
      <div className="table">
        <table style={{margin: '0 auto 0 25px'}}>
          <thead>
            <tr>
              <th></th>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="Name"
              ></SortableColumnHeader>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="Price"
              ></SortableColumnHeader>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;