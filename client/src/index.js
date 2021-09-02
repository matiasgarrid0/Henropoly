import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store/store";

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


