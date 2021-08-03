import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components/Header";
import {Cart} from "./pages/Cart/Cart";
import {Home} from "./pages/Home";


export const App = () => {
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </div>
  );
};

