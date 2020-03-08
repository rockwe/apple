import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DashboardPage from './../components/accueil'

import AppLayout from './../components/layout/AppLayout';
import carPage from './../components/CartPage'

import PageNotFound from './../components/404';

//const _ = require('lodash');


const routing = (...props) => {

    const AppRoute = ({ component: Component, layout: Layout }) => (
        <Route 
               render={ (props) => (
                   <Layout>
                       <Component {...props} />
                   </Layout>
               )} />
      )
    
        return (
            <BrowserRouter>
            
                    <Switch>
                        <Redirect from="/" to='/dashboard' exact/>
                        <AppRoute  exact path='/dashboard' layout={AppLayout} component={DashboardPage}/>
                        <AppRoute  path="/cart" layout={AppLayout} component={carPage} exact/>
                        <AppRoute path="/404"  layout={AppLayout} component={PageNotFound}/>
                        <Redirect to='/404'/>
                    </Switch>
      
        
            </BrowserRouter>
        );
      
      
      }
      
      export default routing;
      