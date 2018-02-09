import React, { Component } from 'react';

import cig1 from '../assets/images/1.png'
import cig2 from '../assets/images/2.png'
import cig3 from '../assets/images/3.png'
import cig4 from '../assets/images/4.png'

import axios from 'axios';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div key={this.props.product.id} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center mb-4">
                        <img src={this.props.product.imageURL} alt="image" className="rounded-circle" width="100" height="100"/>
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

    handleClick(event, product){
        const url = `http://localhost:4000/products/${product.id}`;
        product.cart_quantity++;
        let products = axios.put(url, product).then(response => {
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
        let products = axios.get(url).then(response => {
            this.setState({ products: response.data }) ;
            let count = 0;
            count = response.data.reduce((total, b) => {
                return total+b.cart_quantity;
            },0);
            this.setState({ cart_count: count }) ;
        });
    }

    updateCartQuantity(product){
        let cart_count = 0;
        this.state.products.map((elem) => {
            if(elem.id == product.id){
                elem.cart_quantity = product.cart_quantity;
            }
        });

        cart_count = this.state.products.reduce((a, b) => { 
            return a*1+b.cart_quantity*1;
        }, 0);
        this.setState({ cart_count: cart_count, products:this.state.products }) ;
    }

    change(event){
        var option = event.target.value;
        console.log(option);
        let arr;
        if(option == 'price_asc'){
            arr = this.state.products.sort((a, b) => {
                console.log(a.price, b.price)
                return a.price > b.price;
            });
        }else if(option == 'price_desc'){
            arr = this.state.products.sort((a, b)=>{
                return b.price > a.price;
            });
        }
        console.log(arr);
        
        //this.setState({value: event.target.value});
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
                                            <option value="rating">Rating</option>
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
                    <button href="#" className="btn btn-primary btn-circle btn-xl" data-toggle="dropdown" role="button" aria-expanded="false"> <span className="fa fa-shopping-cart"></span></button>
                    <span  className="cart-items-count"><span className="notification-counter">{this.state.cart_count}</span></span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Home; 