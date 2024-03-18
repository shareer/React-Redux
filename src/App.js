import './App.css';
import Todos from './app/components/Todos';
import AddTodo from './app/components/AddTodo';

function App() {
  return (
    <div className="App">
      <div className="mt-10 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <AddTodo />
        <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
