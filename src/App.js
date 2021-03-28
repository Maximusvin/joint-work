import Layout from './components/Layout/Layout';
import Todo from './components/Todo';
import './App.css';
import React from 'react';

const todos = [
  { id: 1, text: 'Можливість добавлення таски', completed: false },
  { id: 2, text: 'Можливість видалення таски', completed: false },
  { id: 3, text: 'Можливість редагування таски', completed: false },
  { id: 4, text: 'Можливість фільтрації таски', completed: false },
];

function App() {
  return (
    <Layout>
      <Todo todos={todos} />
    </Layout>
  );
}

export default App;
