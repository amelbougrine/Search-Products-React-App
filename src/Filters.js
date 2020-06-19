import React from 'react';
import './Filters.css'

class Filters extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checked" ? "checked" : "value"];
    const name = e.target.name;
    this.props.onFilter({
      [name]: value
    });
  }
  render() {
    return (
      <form className="firstForm">
        <input 
          type='text' 
          placeholder='Search...' 
          value={this.props.filtertext}
          name='filterText'
          onChange={this.handleChange}
        />
        <p>
          <input 
            type='checkbox' 
            checked={this.props.inStockOnly}
            name='inStockOnly'
            onChange={this.handleChange}
          />
          Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filters;