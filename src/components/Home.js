import React, { Component } from 'react';

import axios from 'axios';

class Product extends Component {

    render() {
        return ( 
            <div key={this.props.product.id} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center mb-4">
                        <img src={this.props.product.imageURL} alt="" className="rounded-circle" width="100" height="100"/>
                    </div>
                    <h6 className="card-subtitle mb-4">{this.props.product.name}</h6>
                    <p className="text-muted">
                        Price: <i className="fa fa-dollar mr-1" aria-hidden="true"></i> {this.props.product.price}
                    </p>
                    <div className="text-center mb-4">
                        <a href="#" onClick={(event) => this.handleClick(event, this.props.product)} className="btn btn-outline-success btn-sm">Add to Cart</a>
                    </div>
                  </div>
                </div>
            </div>

    );
    }

    /**
     * @name handleClick()
     * @param event
     * @param product
     * @desc The quantity count in the json is incremented by 1 once you click on the 'add to cart' button 
     */    

    handleClick(event, product){
        const url = `http://localhost:4000/products/${product.id}`;
        product.cart_quantity++;
        axios.put(url, product).then(response => {
            this.props.addToCartClicked(product);
        });
        event.preventDefault();
    }
    
  }

class Home extends Component {
    constructor(){
        super();
        this.state={
            products:[],
            cart_count:0,
            sort:''
        }
        this.updateCartQuantity = this.updateCartQuantity.bind(this);
        const url = `http://localhost:4000/products/`;
        axios.get(url).then(response => {
            this.setState({ products: response.data }) ;
            let count = 0;
            count = response.data.reduce((total, b) => {
                return total+b.cart_quantity;
            },0);
            this.setState({ cart_count: count }) ;
        });
    }

    /**
     * @name updateCartQuantity()
     * @param product
     * @desc The floating cart button count is updated once the add to cart button in the prduct is clicked
     */

    updateCartQuantity(product){
        let cart_count = 0;
        this.state.products.map((elem) => {
            if(elem.id === product.id){
                elem.cart_quantity = product.cart_quantity;
            }
        });

        cart_count = this.state.products.reduce((a, b) => { 
            return a*1+b.cart_quantity*1;
        }, 0);
        this.setState({ cart_count: cart_count, products:this.state.products }) ;
    }

    /**
     * @name change()
     * @desc Once the filter selectbox is changed product list is sorted according to the value
     */

    change(event){
        var option = event.target.value;
        let arr;
        if(option === 'price_asc'){
            arr = this.state.products.sort((a, b) => {
                return parseFloat(a.price) - parseFloat(b.price);
            });
        }else if(option === 'price_desc'){
            arr = this.state.products.sort((a, b)=>{
                return parseFloat(b.price) - parseFloat(a.price);
            });
        }
        this.setState({products: arr});
    }
    
    render(){
        return(
            <div>
            <h3 className="page-heading mb-4">Products</h3>
            <div className="row">
                <div className="col-sm-12">
                <div className="navbar navbar-inverse mb-3">
                    <div className="container">
                        <div className="navbar-collapse" id="navbar-filter">
                            <form className="navbar-form" role="search">
                                <div className="row">
                                <div className="col-sm-12">
                                <div className="col-sm-3 pull-right">
                                    <div className="form-group">
                                        <select onChange={this.change.bind(this)} name="filter_type" id="filter_type" className="form-control" value={this.state.sort}>
                                            <option value="">Sort Items By:</option>
                                            <option value="price_asc">Price: Low to High</option>
                                            <option value="price_desc">Price: High to Low</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                {this.state.products.map((item, index) => (
                    <Product addToCartClicked={this.updateCartQuantity} key={index} product={item} />
                ))}
            </div>
            <div className="cart-box" id="Normal">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <button href="#" className="btn btn-primary btn-circle btn-xl"> <span className="fa fa-shopping-cart"></span></button>
                    <span  className="cart-items-count"><span className="notification-counter">{this.state.cart_count}</span></span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Home; 