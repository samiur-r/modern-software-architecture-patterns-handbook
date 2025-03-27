// entities/todoTypes.ts

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// interactor/todoInteractor.ts

import { Todo } from "entities/todoTypes";

let todos: Todo[] = [];

export const TodoInteractor = {
  getTodos: (): Todo[] => todos,

  addTodo: (text: string): Todo => {
    const newTodo = { id: Date.now().toString(), text, completed: false };
    todos = [...todos, newTodo];
    return newTodo;
  },

  toggleTodo: (id: string): Todo[] => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    return todos;
  },
};

// presenter/useTodoPresenter.ts

import { useState, useCallback } from "react";
import { Todo } from "entities/todoTypes";
import { TodoInteractor } from "interactor/todoInteractor";

export const useTodoPresenter = () => {
  const [todos, setTodos] = useState<Todo[]>(TodoInteractor.getTodos());
  const [error, setError] = useState("");

  const handleAdd = useCallback((text: string) => {
    if (!text.trim()) {
      setError("Todo cannot be empty");
      return;
    }
    TodoInteractor.addTodo(text);
    setTodos(TodoInteractor.getTodos());
    setError("");
  }, []);

  const handleToggle = useCallback((id: string) => {
    TodoInteractor.toggleTodo(id);
    setTodos(TodoInteractor.getTodos());
  }, []);

  return {
    todos,
    error,
    handleAdd,
    handleToggle,
  };
};

// router/todoRouter.ts

export const useTodoRouter = () => {
  const navigateToStats = () => {
    alert("Navigating to Todo Stats (placeholder)");
  };

  return { navigateToStats };
};

// view/TodoView.tsx

import React, { useState } from "react";
import { useTodoPresenter } from "presenter/useTodoPresenter";
import { useTodoRouter } from "router/todoRouter";

export const TodoView: React.FC = () => {
  const { todos, error, handleAdd, handleToggle } = useTodoPresenter();
  const { navigateToStats } = useTodoRouter();
  const [input, setInput] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Functional VIPER – Todo App</h2>

      <input
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleAdd(input);
          setInput("");
        }}
      >
        Add
      </button>
      <button onClick={navigateToStats} style={{ marginLeft: 10 }}>
        View Stats
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ marginTop: 20 }}>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// TodoModule.tsx

import React from "react";
import { TodoView } from "view/TodoView";

export const TodoModule = () => {
  return <TodoView />;
};
