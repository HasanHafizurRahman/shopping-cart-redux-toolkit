import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const cartproducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {cartproducts.map((product) => (
        <div className="flex flex-col products-center p-3 bg-whitesmoke hover:bg-slate-100 border-4 border-inherit hover:border-indigo-300 rounded-xl">
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
            onClick={() => handleRemove(product.id)}
            className="px-3 text-white font-bold bg-green-600 border border-slate-600 hover:border-green-700 rounded-3xl"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
