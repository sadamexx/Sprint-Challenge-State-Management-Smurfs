import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
