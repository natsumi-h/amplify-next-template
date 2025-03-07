import { getTodos } from "../action";

export default async function Test() {
  const todos = await getTodos();

  return (
    <main>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </main>
  );
}
