import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";
import LoginPage from "../pages/LoginPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import CartPage from "../pages/CartPage";
import MyContext from "../context/Context";
import PaymentPage from "../pages/PaymentPage";
//css???

//asynch

const App = () => {
  const [products, setProducts] = useState([{}]);
  const [count, setCount] = useState(1);

  return (
    <Router>
      <MyContext.Provider value={{ count, setCount }}>
        <Switch>
          <Route exact path="/">
            <HomePage products={products} setProducts={setProducts} />
          </Route>

          <Route exact path="/products">
            <ProductListingPage products={products} setProducts={setProducts} />
            {/* <ProductListingPage /> */}
          </Route>

          <Route exact path="/registration">
            <RegistrationPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/b/:category">
            <ProductCategoryPage />
          </Route>

          <Route exact path="/product/details/:id">
            <ProductDescriptionPage />
          </Route>

          <Route exact path="/cart">
            <CartPage />
          </Route>

          <Route exact path="/payment">
            <PaymentPage />
          </Route>
        </Switch>
      </MyContext.Provider>
    </Router>
  );
};

export default App;
