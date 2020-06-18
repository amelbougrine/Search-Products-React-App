import React from 'react';
import './Filters.css'

class Filters extends React.Component {
  render() {
    return (
      <form className="firstForm">
        <input type='text' placeholder='Search...' value={this.props.filtertext}/>
        <p>
          <input type='checkbox' checked={this.props.inStockOnly}/>
          Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filters;