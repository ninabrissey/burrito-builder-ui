export const fetchOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders');
};

export const postOrder = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  });
};
