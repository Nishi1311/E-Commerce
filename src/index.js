import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{AppProvider} from "./Context/ProductContext";
import{FilterProduct} from "./Context/FilterContext";

ReactDOM.render(<AppProvider><FilterProduct><App/></FilterProduct></AppProvider>,document.getElementById("root"));