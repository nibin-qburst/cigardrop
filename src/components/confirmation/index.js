import React, { Component } from 'react';

class Confirmation extends Component {
    render(){
        return(
            <div className="row mb-4">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Thank you for the order</h5>
                                <p className="lead">
                                    Order Number is: 308512033
                                </p>
                                <p>You will be receiving an email confirmation shortly at alexis@xyz.com</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Confirmation; 