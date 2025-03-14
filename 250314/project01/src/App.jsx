import { useState, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TestComp from "./components/TestComp";

/* Mockup Data */
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Typescript",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetId) {
          return { ...it, isDone: !it.isDone };
        } else {
          return it;
        }
      })
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
