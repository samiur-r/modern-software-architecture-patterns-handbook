// cart-app/webpack.config.js

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: { port: 3001 },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/Cart", // expose Cart component
      },
    }),
  ],
};

// cart-app/src/Cart.jsx

const Cart = () => <div>🛒 Cart (from Micro-Frontend)</div>;
export default Cart;

// host-app/webpack.config.js

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: { port: 3000 },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        cart: "cart@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};

// host-app/src/App.jsx

import React from "react";
const Cart = React.lazy(() => import("cart/Cart"));

function App() {
  return (
    <div>
      <h1>🧩 Host App</h1>
      <React.Suspense fallback="Loading Cart...">
        <Cart />
      </React.Suspense>
    </div>
  );
}

export default App;
