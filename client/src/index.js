import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = document.getElementById('root');
const node =(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
       <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(node, root)
reportWebVitals();



