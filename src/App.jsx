import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import MainProducts from "./components/MainProducts";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);

  const [newProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);

  const [bgColor, setbgColor] = useState(true);

  const increminent = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, items: product.items + 1 } : product
      )
    );
  };

  const decreminent = (id, items) => {
    if (items > 1) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, items: product.items - 1 } : product
        )
      );
    } else {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const removeAllProducts = () => {
    setProducts([]);
  };

  const addFromBtn = ({ id, name, price }) => {
    if (products.find((product) => product.id === id)) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, items: product.items + 1 } : product
        )
      );
    } else {
      setProducts([...products, { id, name, price, items: 1 }]);
    }
  };

  const cartIndex = () => {
    return products.reduce(
      (total, product) => total + (product.items > 0 ? product.items : 0),
      0
    );
  };

  const calckPrice = (total) => {
    return total;
  };

  const calckAllPrice = () => {
    let total = products
      .map((product) => product.items * product.price)
      .reduce((total, price) => total + price, 0);
    total > 0 ? total : (total = "no data");
    return total;
  };

  const toggleTheme = () => {
    setbgColor(!bgColor);
    document.body.classList.toggle("dark");
  };

  return (
    <main className="min-h-screen w-screen bg-white dark:bg-black dark:text-white">
      <Navbar cartIndex={cartIndex()} calckAllPrice={calckAllPrice} />
      <Buttons
        newProducts={newProducts}
        addFromBtn={addFromBtn}
        removeAllProducts={removeAllProducts}
        toggleTheme={toggleTheme}
      />
      <MainProducts
        products={products}
        increminent={increminent}
        decreminent={decreminent}
        calckPrice={calckPrice}
      />
    </main>
  );
};

export default App;
