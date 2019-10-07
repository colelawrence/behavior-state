**[behavior-state](README.md)**

[Globals](globals.md)

**Business Logic Component Utilities**

Tools for building simple business logic component 

[docs](./docs/globals.md)

## Example: Todo App

###### `TodoState.jsx`

```js
import { protectState, Behavior } from "behavior-state";

/**
 * @param {Todo[]} initialTodos
 */
export default function createTodoState(initialTodos = []) {
  const $todos = new Behavior(initialTodos);
  const $todoInput = new Behavior("");

  return protectState({
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
import { Observer } from "behavior-state/react";

import { createTodo } from "../helpers";
import { changeValue, preventDefaultThen } from "../react-helpers";

import createTodoState from "./TodoState";
import { TodoItem } from "./TodoItem";

/** @type {Todo[]} */
const todos = [
  createTodo("Build UI for TodoApp", true),
  createTodo("Toggling a Todo"),
  createTodo("Deleting a Todo"),
  createTodo("Adding a Todo")
];

export const TodoState = React.createContext(createTodoState(todos));

export default function AppRoot() {
  return <TodoApp></TodoApp>;
}

function TodoApp() {
  const state = useContext(TodoState);

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul className="list-group">
        <Observer
          of={state.$todos}
          next={todos =>
            todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
          }
        />
      </ul>
      <br />
      <form className="form-group" onSubmit={preventDefaultThen(state.addTodo)}>
        <label htmlFor="todo-title">New Todo Title</label>
        <div className="input-group">
          <Observer
            of={state.$todoInput}
            next={value => (
              <input
                id="todo-title"
                type="text"
                className="form-control"
                value={value}
                onChange={changeValue(state.updateNewTodoInput)}
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
import { TodoState } from "./TodoApp";
import { onEnterOrClick } from "../react-helpers";

/**
 * TodoItem appears within the TodoApp
 * @param {{ todo: Todo }} props
 */
export function TodoItem({ todo }) {
  const todos = useContext(TodoState);

  return (
    <li
      className="list-group-item"
      {...onEnterOrClick(() => {
        todos.toggleTodo(todo.id);
      })}
    >
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button
        className="btn btn-sm btn-default float-right"
        aria-label={`Delete "${todo.title}"`}
        {...onEnterOrClick(() => {
          todos.deleteTodo(todo.id);
        })}
      >
        🗑
      </button>
    </li>
  );
}
```

### State Testing (jest)

`behavior-state` comes with jest wrappers right out of the box to help with
your unit testing needs.

By wrapping a state in the `spyOnState` helper, every `Observable` is now enabled
to be tested against either the `.nextValue` (returns a Promise resolved with the `nextValue`)
and the `.latestValue` property which holds the last value emitted by the observable.

###### `TodoState.test.js`

```js
import { spyOnState } from "behavior-state/jest";
import { createTodo } from "../helpers";
import createTodoState from "./TodoState";

function createMockTodos() {
  return [createTodo("Todo 0"), createTodo("Todo 1"), createTodo("Todo 2")];
}

jest.useFakeTimers();

test("todos / update input", async () => {
  const state = spyOnState(createTodoState([]));

  state.updateNewTodoInput("abc");

  expect(state.$todoInput.latestValue).toBe("abc");
  expect(state.$todoInput.nextValue).resolves.toBe("");

  state.updateNewTodoInput("");
});

test("todos / add todo", async () => {
  const state = spyOnState(createTodoState([]));

  state.updateNewTodoInput("new todo");
  state.addTodo();

  const updatedTodos = state.$todos.latestValue;

  expect(updatedTodos).toHaveLength(1);

  const [addedTodo] = updatedTodos;

  expect(addedTodo.title).toBe("new todo");
  expect(addedTodo.done).toBe(false);

  expect(state.$todoInput.latestValue).toBe("");
});

test("todos / toggle todo", async () => {
  const state = spyOnState(
    createTodoState([{ done: false, id: 1, title: "Todo 1" }])
  );

  // sanity check existing data
  const originalTodos = state.$todos.latestValue;

  expect(originalTodos).toHaveLength(1);
  const [originalTodo] = originalTodos;
  expect(originalTodo.done).toBe(false);

  state.toggleTodo(1);

  expect(state.$todos.latestValue).toHaveLength(1);
  const [updatedTodo] = state.$todos.latestValue;
  expect(updatedTodo.done).toBe(true);
});

test("todos / delete todo", async () => {
  const TITLE = "to be deleted";
  const state = spyOnState(
    createTodoState([
      ...createMockTodos(),
      { id: 1, done: false, title: TITLE },
      ...createMockTodos()
    ])
  );

  // sanity check existing data
  const originalTodos = state.$todos.latestValue;

  const originalTodosLength = originalTodos.length;
  expect(originalTodos.find(todo => todo.title === TITLE)).toBeDefined();

  state.deleteTodo(1);

  const updated = state.$todos.latestValue;
  expect(updated).toHaveLength(originalTodosLength - 1);
  expect(updated.find(todo => todo.title === TITLE)).toBeUndefined();
});
```