**Business Logic Component Utilities**

Tools for building simple business logic component 

[docs](./docs/globals.md)

## Example: Todo App

###### `TodoBloc.jsx`

```js
import { protectBloc, Behavior } from "bloc-utils";

/**
 * @param {Todo[]} initialTodos
 */
export default function createTodoBloc(initialTodos = []) {
  const $todos = new Behavior(initialTodos);
  const $todoInput = new Behavior("");

  return protectBloc({
    $todos,
    $todoInput,
    toggleTodo(id) {
      $todos.next(
        $todos.value.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !todo.done
            };
          } else {
            return todo;
          }
        })
      );
    },
    deleteTodo(id) {
      $todos.next(
        $todos.value.filter(todo => {
          if (todo.id === id) {
            return false;
          } else {
            return true;
          }
        })
      );
    },
    addTodo() {
      if ($todoInput.value) {
        $todos.next([
          ...$todos.value,
          { id: Math.random(), done: false, title: $todoInput.value }
        ]);
        $todoInput.next("");
      }
    },
    updateNewTodoInput(value) {
      $todoInput.next(value);
    }
  });
}
```

###### `TodoApp.jsx`

```jsx
import React, { useContext } from "react";
import { Observer } from "bloc-utils/react";

import { createTodo } from "../helpers";
import { changeValue, preventDefaultThen } from "../react-helpers";

import createTodoBloc from "./TodoBloc";
import { TodoItem } from "./TodoItem";

/** @type {Todo[]} */
const todos = [
  createTodo("Build UI for TodoApp", true),
  createTodo("Toggling a Todo"),
  createTodo("Deleting a Todo"),
  createTodo("Adding a Todo")
];

export const TodoBloc = React.createContext(createTodoBloc(todos));

export default function AppRoot() {
  return <TodoApp></TodoApp>;
}

function TodoApp() {
  const bloc = useContext(TodoBloc);

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul className="list-group">
        <Observer
          of={bloc.$todos}
          next={todos =>
            todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
          }
        />
      </ul>
      <br />
      <form className="form-group" onSubmit={preventDefaultThen(bloc.addTodo)}>
        <label htmlFor="todo-title">New Todo Title</label>
        <div className="input-group">
          <Observer
            of={bloc.$todoInput}
            next={value => (
              <input
                id="todo-title"
                type="text"
                className="form-control"
                value={value}
                onChange={changeValue(bloc.updateNewTodoInput)}
                placeholder="What do you want to get done?"
              />
            )}
          />
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}
```

###### `TodoItem.jsx`

```jsx
import React, { useContext } from "react";
import { TodoBloc } from "./TodoApp";
import { onEnterOrClick } from "../react-helpers";

/**
 * TodoItem appears within the TodoApp
 * @param {{ todo: Todo }} props
 */
export function TodoItem({ todo }) {
  const bloc = useContext(TodoBloc);

  return (
    <li
      className="list-group-item"
      {...onEnterOrClick(() => {
        bloc.toggleTodo(todo.id);
      })}
    >
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button
        className="btn btn-sm btn-default float-right"
        aria-label={`Delete "${todo.title}"`}
        {...onEnterOrClick(() => {
          bloc.deleteTodo(todo.id);
        })}
      >
        🗑
      </button>
    </li>
  );
}
```

### Bloc Testing (jest)

`bloc-utils` comes with jest wrappers right out of the box to help with
your unit testing needs.

By wrapping a bloc in the `spyOnBloc` helper, every `Observable` is now enabled
to be tested against either the `.nextValue` (returns a Promise resolved with the `nextValue`)
and the `.latestValue` property which holds the last value emitted by the observable.

###### `TodoBloc.test.js`

```js
import { spyOnBloc } from "bloc-utils/jest";
import { createTodo } from "../helpers";
import createTodoBloc from "./TodoBloc";

function createMockTodos() {
  return [createTodo("Todo 0"), createTodo("Todo 1"), createTodo("Todo 2")];
}

jest.useFakeTimers();

test("todos / update input", async () => {
  const bloc = spyOnBloc(createTodoBloc([]));

  bloc.updateNewTodoInput("abc");

  expect(bloc.$todoInput.latestValue).toBe("abc");
  expect(bloc.$todoInput.nextValue).resolves.toBe("");

  bloc.updateNewTodoInput("");
});

test("todos / add todo", async () => {
  const bloc = spyOnBloc(createTodoBloc([]));

  bloc.updateNewTodoInput("new todo");
  bloc.addTodo();

  const updatedTodos = bloc.$todos.latestValue;

  expect(updatedTodos).toHaveLength(1);

  const [addedTodo] = updatedTodos;

  expect(addedTodo.title).toBe("new todo");
  expect(addedTodo.done).toBe(false);

  expect(bloc.$todoInput.latestValue).toBe("");
});

test("todos / toggle todo", async () => {
  const bloc = spyOnBloc(
    createTodoBloc([{ done: false, id: 1, title: "Todo 1" }])
  );

  // sanity check existing data
  const originalTodos = bloc.$todos.latestValue;

  expect(originalTodos).toHaveLength(1);
  const [originalTodo] = originalTodos;
  expect(originalTodo.done).toBe(false);

  bloc.toggleTodo(1);

  expect(bloc.$todos.latestValue).toHaveLength(1);
  const [updatedTodo] = bloc.$todos.latestValue;
  expect(updatedTodo.done).toBe(true);
});

test("todos / delete todo", async () => {
  const TITLE = "to be deleted";
  const bloc = spyOnBloc(
    createTodoBloc([
      ...createMockTodos(),
      { id: 1, done: false, title: TITLE },
      ...createMockTodos()
    ])
  );

  // sanity check existing data
  const originalTodos = bloc.$todos.latestValue;

  const originalTodosLength = originalTodos.length;
  expect(originalTodos.find(todo => todo.title === TITLE)).toBeDefined();

  bloc.deleteTodo(1);

  const updated = bloc.$todos.latestValue;
  expect(updated).toHaveLength(originalTodosLength - 1);
  expect(updated.find(todo => todo.title === TITLE)).toBeUndefined();
});
```
