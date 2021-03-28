import Layout from './components/Layout/Layout';
import Todo from './components/Todo';

import todos from './DATA/todos.json';

import './App.css';

function App() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export default App;
