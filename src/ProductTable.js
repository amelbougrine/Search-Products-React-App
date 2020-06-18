import React from 'react';
import './ProductTable.css'
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc'
      }
    };
  }
  sortByKeyAndOrder(objectA,objectB) {
    let inDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'price') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
    }
    if (a > b) {
      return 1*inDesc;
    }
    if (a < b) {
      return -1*inDesc;
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    return productsAsArray.sort(this.sortByKeyOrder);
  }
  render() {
    let row = [];
    this.sortProducts().forEach( (product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      row.push(<ProductRow product={product} key={product.id} ></ProductRow> );
    });
    return (
      <div className="table">
        <table style={{margin: '0 auto 0 25px'}}>
          <thead>
            <tr>
              <th></th>
              <SortableColumnHeader
                currentSort={this.state.sort}
                column="Name"
              ></SortableColumnHeader>
              <SortableColumnHeader
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