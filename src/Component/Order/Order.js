import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct=product=>{
        const rest=cart.filter((pd)=>pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
      <div className="shop-container">
        <div className="review-item-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))}
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
              <button onClick={() => navigate("/inventory")}>
                Proceed Checkout{" "}
              </button>
            </Cart>
        </div>
      </div>
    );
};

export default Order;