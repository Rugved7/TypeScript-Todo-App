import ToDo from "./components/ToDo";
import './App.css'
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div>
      <main>React + TypeScript TODO List App</main>
      <ToDo/>
      <AddTodo/>
    </div>
  );
};

export default App;
