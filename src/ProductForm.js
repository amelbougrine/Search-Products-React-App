import React from 'react';
import './ProductForm.css';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleCange = this.handleCange.bind(this);
  }
  handleSave(e) {
    this.props.onSave(this.state.product);
    e.target.reset();
    this.setState({
      product: Object.assign()
    }); 
    e.preventDefault();
  }
  handleCange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState((prevState) => {
      prevState.product[name] = value;
      return {product : prevState.product};
    });
  }
  render() {
    return (
      <form className='secForm'>
        <h3>Enter a new product</h3>
        <p>
          <label>Name<br />
            <input onChange={this.handleCange} value={this.state.product.name} type='text' name='name'/>
          </label>
        </p>
        <p>
          <label>Category<br />
            <input onChange={this.handleCange} value={this.state.product.category} type='text' name='category'/>
          </label>
        </p>
        <p>
          <label>Price<br />
            <input onChange={this.handleCange} value={this.state.product.price}type='text' name='price'/>
          </label>
        </p>
        <p>
          <label>
            <input onChange={this.handleCange} value={this.state.product.stocked} type='checkbox' name='stocked'/>
            In Stock?
          </label>
        </p>
        <input onClick={this.handleSave} className='button' type='submit' value='Save' />
      </form>
    );
  }
}

export default ProductForm;