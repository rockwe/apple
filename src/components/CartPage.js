import React, {Component} from 'react';
import CartContainer from '../containers/CartContainer'

class CartPage extends Component {



    

    componentDidMount() {
        document.title = 'panier';
    
    }

    render() {
       
        return (
            <React.Fragment>
                <div className="section-header">
                    <h1>Panier</h1>
                </div>
               
                        <div className="alert alert-warning">
                        <CartContainer />
                        </div>
                
             
            </React.Fragment>
        );
    }
}

export default CartPage;