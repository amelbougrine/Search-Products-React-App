import React from 'react';
import './Filters.css'

class Filters extends React.Component {
  render() {
    return (
      <form className="firstForm">
        <input type='text' placeholder='Search...' />
        <p>
          <input type='checkbox' />
          Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filters;