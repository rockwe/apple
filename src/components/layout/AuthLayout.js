import React, {Component} from 'react';
import AuthContext from '../../context/auth-context';

class AuthLayout extends Component {

    static contextType = AuthContext;

   
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default AuthLayout;