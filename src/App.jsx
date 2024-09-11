import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/buttons";
import MainProducts from "./components/MainProducts";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);

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

  const addFromBtn = (name, price) => {
    const productFound = products.find((product) => product.name === name);
    if (productFound) {
      setProducts(
        products.map((product) =>
          product.id === productFound.id
            ? { ...product, items: product.items + 1 }
            : product
        )
      );
    } else {
      addNewProduct(name, price);
    }
  };

  const addNewProduct = (name, price) => {
    setProducts([
      ...products,
      { id: products.length + 1, name, price, items: 1 },
    ]);
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
    total > 0 ? total : (total = "undefined data");
    return total;
  };

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <main className="min-h-screen w-screen bg-white dark:bg-black dark:text-white">
      <Navbar cartIndex={cartIndex()} calckAllPrice={calckAllPrice} />
      <Buttons
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
