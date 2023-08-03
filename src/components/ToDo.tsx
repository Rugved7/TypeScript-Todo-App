import { FormEvent, useState } from "react";

const ToDo = () => {
  // make a state for before and after adding element in todo
  const [todo, setTodo] = useState(""); // initially it is empty

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     handleAddtoTodo(todo) // context API wala Scene
  };

  return (
    /* Here we'll create a form to store our todos  */
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
      {/* Now we have to store this data somewhere , so we need to manage context using context API */}
    </form>
  );
};

export default ToDo;
