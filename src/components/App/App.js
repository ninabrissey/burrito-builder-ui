import React, { useState, useEffect } from 'react';
import { fetchOrders, postOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import './App.css';

const App = () => {
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    try {
      const res = await fetchOrders();
      const ordersData = await res.json();
      setOrders(ordersData.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrder = async (newOrder) => {
    try {
      const res = await postOrder(newOrder);
      const postedOrder = await res.json();
      setOrders([...orders, postedOrder]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder} />
      </header>
      <Orders orders={orders} />
    </main>
  );
};

export default App;
