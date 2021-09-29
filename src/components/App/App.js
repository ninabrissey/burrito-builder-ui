import React, { useState, useEffect } from 'react';
import { fetchOrders, postOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import './App.css';

const App = () => {
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const res = await fetchOrders();
    const ordersData = await res.json();
    setOrders(ordersData.orders);
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
    try {
      getOrders();
    } catch (error) {
      console.log(error.message);
    }
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
