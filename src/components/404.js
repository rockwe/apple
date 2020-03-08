import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNotFound = props => {
    return(
        <section className="section">
            <div className="container mt-5">
                <div className="page-error">
                    <div className="page-inner">
                        <h1>404</h1>
                        <div className="page-description">
                            The page you were looking for could not be found.
                        </div>
                        <div className="page-search">
                            <form>
                                <div className="form-group floating-addon floating-addon-not-append">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3">
                                <NavLink to='/'> Back to Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="simple-footer mt-5">
                    Copyright 
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;