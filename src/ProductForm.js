import React from 'react';
import './ProductForm.css';

const RESET_VALUE = {id:'', category:'', price:'', checked: false, name:''};

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: Object.assign({}, RESET_VALUE),
      error: {}
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState((prevState) => {
      prevState.product[name] = value;
      return {product: prevState.product};
    });
  }
  handleSave(e) {
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUE),
      error: {}
    });
    e.preventDefault();
  }
  render() {
    return (
      <form className='secForm'>
        <h3>Enter a new product</h3>
        <p>
          <label>Name<br />
            <input 
              onChange={this.handleChange} 
              value={this.state.product.name} 
              type='text' 
              name='name'/>
          </label>
        </p>
        <p>
          <label>Category<br />
            <input 
              onChange={this.handleChange} 
              value={this.state.product.category} 
              type='text' 
              name='category'/>
          </label>
        </p>
        <p>
          <label>Price<br />
            <input 
              onChange={this.handleChange} 
              value={this.state.product.price}
              type='text' 
              name='price'/>
          </label>
        </p>
        <p>
          <label>
            <input 
              onChange={this.handleChange} 
              checked={this.state.product.stocked} 
              type='checkbox' 
              name='stocked'/>
            In Stock?
          </label>
        </p>
        <input 
          onClick={this.handleSave} 
          className='button' 
          type='submit' 
          value='Save' />
      </form>
    );
  }
}

export default ProductForm;