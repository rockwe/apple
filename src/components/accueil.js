import React, {Component} from 'react';

import ProductsContainer from '../containers/ProductsContainer'
import CartContainer from '../containers/CartContainer'
class DashboardPage extends Component {



    
    

    componentDidMount() {
        document.title = 'Apple';
    
    }

    render() {
       
        return (
            <React.Fragment>
                <div className="section-header">
                    <h1>iPhone 11 Pro</h1>
                </div>
                 <div className="row">

                 <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card ">
                        <img className="card-img-top" src="../assets/img/avatar/iphone.png"  alt="" />
                        </div>
                        <div className="card-body">
                <h4 className="card-title">apple X</h4>
                <h6 className="card-subtitle mb-2 text-muted">prix:1234</h6>
            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                        <div className="card-body">
                <h4 className="card-title">Acheter un</h4>
                <h4 className="card-title">iPhone 11 Pro</h4>
                <h6 className="card-subtitle mb-2 text-muted">581234</h6>
                     </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Avez-vous un iPhone à faire reprendre ?</h4>
                                </div>
                                <div className="card-body">
                               <p>fgdgdfgdfgd</p>
                               <ProductsContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-wrap">
                                
                                <div className="card-body">
                                <CartContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             
            </React.Fragment>
        );
    }
}

export default DashboardPage;