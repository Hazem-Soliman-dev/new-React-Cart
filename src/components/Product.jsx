import React from "react";

const Product = ({
  product: { name, price, items, id },
  increminent,
  decreminent,
  calckPrice,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="card bg-base-100 w-5/6 m-auto shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-evenly items-center flex-col tablet:flex-row">
            <span>Name: {name}</span>
            <span>Price: {price}</span>
            <span>Count: {items}</span>
            <span>Total: {calckPrice(price * items)}</span>
            <button className="btn btn-primary" onClick={() => increminent(id)}>
              Buy Now
            </button>
            <button
              className="btn btn-error"
              onClick={() => decreminent(id, items)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
