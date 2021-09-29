import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredients.length && name) {
      addOrder({ id: Date.now(), name: name, ingredients: ingredients });
      clearInputs();
    }
  };

  const clearInputs = () => {
    setName('');
    setIngredients([]);
  };

  const addIngredients = (e) => {
    e.preventDefault();
    if (!ingredients.includes(e.target.name)) {
      setIngredients([...ingredients, e.target.name]);
    }
  };

  const possibleIngredients = [
    'beans',
    'steak',
    'carnitas',
    'sofritas',
    'lettuce',
    'queso fresco',
    'pico de gallo',
    'hot sauce',
    'guacamole',
    'jalapenos',
    'cilantro',
    'sour cream',
  ];

  const ingredientButtons = possibleIngredients.map((ingredient) => (
    <button
      key={ingredient}
      name={ingredient}
      onClick={(e) => addIngredients(e)}
    >
      {ingredient}
    </button>
  ));

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {ingredientButtons}
      <p>Name: {name || 'add name to order'}</p>
      <p>Order: {ingredients.join(', ') || 'Nothing selected - add items'}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
};

export default OrderForm;
