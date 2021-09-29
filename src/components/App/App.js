import { useState, useEffect } from 'react';
import { fetchOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import './App.css';

const App = () => {
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const res = await fetchOrders();
    const ordersData = await res.json();
    setOrders(ordersData);
  };
  useEffect(() => {
    try {
      getOrders();
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>
      {/* <Orders /> */}
    </main>
  );
};

export default App;
