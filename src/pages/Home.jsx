import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="mt-3 pt-3">
      <h1 className="text-orange-800 text-3xl font-bold">
        Welcome to the Redux Toolkit Store.
      </h1>
      <div>
        <section>
          <h3 className="text-orange-500 text-2xl font-bold mb-3 pb-3">
            Products:
          </h3>
          <Products />
        </section>
      </div>
    </div>
  );
};

export default Home;
