import { Todo, useTodos } from "../store/contextTodo";

const AddTodo = () => {
  const { todos } = useTodos();

  const filterData = todos;
  return (
    <ul>
      {filterData.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
              >Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default AddTodo;
