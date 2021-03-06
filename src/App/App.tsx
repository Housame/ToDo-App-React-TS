import React, { useState } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";
import { TodoType } from "../types/types";
import Footer from "../components/Footer/Footer";

function App() {
  // Todos
  let [todos, setTodos] = useState<TodoType[]>([
    { title: "Let's add todos", done: false },
  ]);

  // Selected Filter
  let [selectedFilter, setSelectedFilter] = useState("all");
  let todosToShow: TodoType[] = [];

  if (selectedFilter === "done") {
    todosToShow = todos.filter((item) => item["done"] === true);
  } else if (selectedFilter === "incomplete") {
    todosToShow = todos.filter((item) => item["done"] === false);
  } else {
    todosToShow = todos;
  }

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Remove Todo
  const removeTodo = (todo) => {
    const newTodos = todos.filter((item) => item !== todo);
    // console.log(newTodos);
    setTodos(newTodos);
  };

  // ChangeClass
  const changeClass = (todo, value) => {
    console.log("change to", value);
    const newTodos = todos.map((item) => {
      if (item === todo) {
        return { ...item, done: value };
      } else {
        return item;
      }
    });

    setTodos(newTodos);
  };

  // Apply Filter
  const applyFilter = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Title value="Todo List" />
      </header>
      <Form addTodo={addTodo} applyFilter={applyFilter} />
      <TodoList
        todos={todosToShow}
        changeClass={changeClass}
        removeTodo={removeTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
