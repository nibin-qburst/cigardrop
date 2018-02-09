import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleApiWrapper from './GoogleApiWrapper';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class Checkout extends Component {

  constructor(){
    super();
    this.state={
        products:[],
        open: false
    }
    const url = `http://localhost:4000/products/`;
    let products = axios.get(url).then(response => {
      this.setState({ products: response.data }) ;
    });
  }
  
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    var rowComponents = this.generateRows();
      return(
      <div className="checkout">
        <div className="row mb-4">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Check Out</h5>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table className="table table-striped">
                    <thead>
                      <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>View on Map</th>
                      </tr>
                  </thead>
                      <tbody>
                          {rowComponents}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <Link to={`/confirmation`} title="Confirmation" className="btn btn-outline-success btn-sm">Confirm</Link>
              </div>
            </div>
          </div>
        </div>
        <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={open} onClose={this.onCloseModal}>
          <h5>Map Location</h5>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-4">
                    <GoogleApiWrapper></GoogleApiWrapper>
                    </div>
                    </div>
          </div>
          </Modal>
      </div>
      
      )
  }

  /**
   * @name generateRows()
   * @desc Used to generate the rows for the checkout table
   */

  generateRows() {
      var data = this.state.products;
      return data.map((item) => {
          // handle the column data within each row
          if(item.cart_quantity > 0)
          return (<tr>
                    <td>
                      <div className="flag">
                      <img src={item.imageURL} alt="image" className="rounded-circle" width="100" height="100"/>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-center">
                      {item.cart_quantity}
                    </td>
                    <td className="text-right">
                      {item.cart_quantity*item.price}
                    </td>
                    <td>
                        <a onClick={this.onOpenModal} href="#"><i className="fa fa-compass"></i></a>
                    </td>
                  </tr>);
      });
  }
}

export default Checkout; 