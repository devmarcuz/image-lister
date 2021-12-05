import React, { useState } from "react";
import Product from "./Product";

const ProductLister = () => {
  const [products, setProducts] = useState(["/images/img-1.jpg"]);

  const fetchPhotos = () => {
    setProducts([...products, `/images/img-${products.length + 1}.jpg`]);
  };

  return (
    <div className="product-lister">
      <div className="products">
        {products.map((product, index) => (
          <Product product={product} index={index + 1} />
        ))}
      </div>
      <button onClick={fetchPhotos}>Fetch photos</button>
    </div>
  );
};

export default ProductLister;
