import React from "react";

const Buttons = ({
  newProducts,
  addFromBtn,
  removeAllProducts,
  toggleTheme,
}) => {
  return (
    <div className="flex flex-col gap-3 my-7">
      <div className="flex justify-evenly gap-2">
        {newProducts.map((product, index) => (
          <button key={index} className="btn btn-success" onClick={() => addFromBtn(product)}>{product.name}</button>
        ))}
      </div>
      <div className="flex justify-evenly mt-3">
        <button className="btn btn-error" onClick={removeAllProducts}>
          Delete All
        </button>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Light/Dark
        </button>
      </div>
    </div>
  );
};

export default Buttons;
