import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {products.map((product) => (
        <div className="flex flex-col items-center p-3 bg-whitesmoke hover:bg-slate-100 border-4 border-inherit hover:border-indigo-300 rounded-xl">
          <img className="w-36 h-36" src={product.image} alt="product_image" />
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <h5 className="text-xxl">Price: ${product.price}</h5>
          <p
            style={{
              maxWidth: "300px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-xxl text-left"
          >
            {product.description}
          </p>
          <button
            onClick={() => handleAdd(product)}
            className="px-3 text-white font-bold bg-green-600 border border-slate-600 hover:border-green-700 rounded-3xl"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
