import React from 'react';
import './App.css';
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'
import theme from './config/theme'
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'
import { getAllProducts } from './redux/actions'
//import store from './redux/store';


const middleware = [thunk];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware)
    
  )
);


  store.dispatch(getAllProducts())


function App() {
  return (
    <Provider store={store}>
       
       <Routes />
       
   </Provider>

  );
}

export default App;
