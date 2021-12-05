import React from "react";

const Product = ({ product, index }) => {
  return (
    <div className="product">
      <h2>Photo #{index}</h2>
      <img src={product} alt="" />
    </div>
  );
};

export default Product;
