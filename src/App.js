import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const showCartHandler = () => {
    setIsClicked(true);
  };
  const hideCartHandler = () => {
    setIsClicked(false);
  };

  return (
    <CartProvider>
      {isClicked && <Cart onHidde={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
