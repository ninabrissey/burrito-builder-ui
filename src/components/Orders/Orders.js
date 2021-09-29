import React from 'react';
import './Orders.css';

const Orders = ({ orders }) => {
  const orderList = () => {
    return orders.map((order) => {
      return (
        <div className="order" key={order.id}>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return <section>{orders ? orderList() : <p>You have no orders</p>}</section>;
};

export default Orders;
