import React from "react";
import Product from "./Product";
import Total from "./Total";

const MainProducts = ({
  products,
  increminent,
  decreminent,
  calckPrice,
}) => {
  return (
    <div className="flex flex-col my-10 gap-4 w-4/5 mx-auto">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          increminent={increminent}
          decreminent={decreminent}
          calckPrice={calckPrice}
        />
      ))}
    </div>
  );
};

export default MainProducts;
