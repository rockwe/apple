import React from 'react';
import AuthContext from '../../context/auth-context';

const header = props => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return (
                    <React.Fragment>
                       
                        <nav className="navbar navbar-expand-lg main-navbar navbar-dark bg-dark">
                            <form className="form-inline mr-auto">
                                <ul className="navbar-nav mr-3">
                                    <li><a href="/" data-toggle="sidebar" className="nav-link nav-link-lg"><i
                                        className="fas fa-bars"></i></a>
                                    </li>
                                    <li><a href="/" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i
                                        className="fas fa-search"></i></a></li>
                                </ul>
                                <div className="search-element">
                                    <input className="form-control" type="search" placeholder="Search"
                                           aria-label="Search"
                                           data-width="250"/>
                                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                    <div className="search-backdrop"></div>
                                   
                                </div>
                            </form>
                            <ul className="navbar-nav navbar-right">
                                
                                <li className="dropdown"><a href="/" data-toggle="dropdown"
                                                            className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <img alt="custom-alt" src="../assets/img/avatar/avat.png"
                                         />
                                </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        {/*<div className="dropdown-title">Logged in 5 min ago</div>*/}
                                        <a href="/cart" className="dropdown-item has-icon">
                                            <i className="far fa-user"></i> Panier
                                        </a>
                                        <a href="/" className="dropdown-item has-icon">
                                            <i className="fas fa-heart"></i> Favoris
                                        </a>
                                        <a href="/" className="dropdown-item has-icon">
                                            <i className="fas fa-cog"></i> commande
                                        </a>
                                        <a href="/" className="dropdown-item has-icon">
                                            <i className="fas fa-cog"></i> Compte
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item has-icon text-danger" onClick={context.logout}>
                                            <i className="fas fa-sign-out-alt"></i> se connecter
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </React.Fragment>
           )
        }
            }

    </AuthContext.Consumer>
);
};
export default header;