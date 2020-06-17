import React from 'react';
import './ProductForm.css';

class ProductForm extends React.Component {
  render() {
    return (
      <form className='secForm'>
        <h3>Enter a new product</h3>
        <p>
          <label>Name<br />
            <input type='text' name='name'/>
          </label>
        </p>
        <p>
          <label>Category<br />
            <input type='text' name='category'/>
          </label>
        </p>
        <p>
          <label>Price<br />
            <input type='text' name='price'/>
          </label>
        </p>
        <p>
          <label>
            <input type='checkbox' name='stocked'/>
            In Stock?
          </label>
        </p>
        <input className='button' type='submit' value='Save' />
      </form>
    );
  }
}

export default ProductForm;