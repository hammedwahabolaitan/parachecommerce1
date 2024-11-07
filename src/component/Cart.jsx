import React, { useState } from "react";

const ProductList = () => {
  const [cart, setCart] = useState([]);

  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold my-4">Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="my-2">
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default ProductList;
