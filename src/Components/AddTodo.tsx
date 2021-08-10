import { AddTodoProps } from "../types"


export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo"
      className="h-7 w-7 p-6 flex justify-center items-center bg-red-900 hover:bg-red-500 text-xl text-white font-extrabold  rounded">
     +
    </button>



  </form>
)