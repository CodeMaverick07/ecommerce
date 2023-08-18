import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="flex justify-center my-3">
      <div className="h-80 w-72 border-2 border-gray-300 shadow-xl">
        <Link to={`/product/${product.id}`}>
          <img className="p-4 rounded-lg" src={product.image} alt="" />
        </Link>

        <div className="pl-4 ">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg text-gray-500 font-mono underline hover:text-black">
              {product.name.slice(0, 24)}..
            </h3>
          </Link>
          <div className="flex text-xs">
            <Rating rating={product.rating} noReview={product.numReviews} />
          </div>
          <h1 className="text-xl text-gray-700 font-bold font-mono">
            {product.price}rs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
