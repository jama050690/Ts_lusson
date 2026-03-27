interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];

function addTodo(title: string): Promise<Todo> {
  return new Promise((resolve) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    todos.push(newTodo);
    resolve(newTodo);
  });
}

function getTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    resolve(todos);
  });
}

function updateTodo(
  id: number,
  title?: string,
  completed?: boolean,
): Promise<Todo | null> {
  return new Promise((resolve) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      resolve(null);
      return;
    }
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
    resolve(todo);
  });
}

function deleteTodo(id: number): Promise<boolean> {
  return new Promise((resolve) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
      resolve(false);
      return;
    }
    todos.splice(index, 1);
    resolve(true);
  });
}

async function main() {
  await addTodo("TypeScript o'rganish");
  await addTodo("Nest.js bilan tanishish");

  console.log(await getTodos());

  await updateTodo(1, undefined, true); // 1-id li todo’ni completed=true qilamiz
  console.log(await getTodos());

  await deleteTodo(2); // 2-id li todo’ni o'chiramiz
  console.log(await getTodos());
}

main();
