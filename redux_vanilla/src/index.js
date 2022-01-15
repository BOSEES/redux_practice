import { createStore } from "redux";

const form = document.querySelector(".todo");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) =>{
  return {
    type: ADD_TODO,
    text,
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  }
}

const reducer = (state = [], action) => {
  console.log(typeof action.id)
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

const paintTodos = () => {
  const Todos = store.getState();
  ul.innerHTML = "";
  Todos.forEach((todo) => {
    const { text, id } = todo;
    const li = document.createElement("li");
    li.id = id;
    li.textContent = text;
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos)

const dispatchAddTodo = (text) => {
  if (input.value !== "") {
    input.value = "";
    store.dispatch(addTodo(text));
  }
}

const dispatchDeleteTodo = (id) => {
  store.dispatch(deleteTodo(id));
}

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  dispatchAddTodo(todo);
}

const onClick = (e) => {
  const id = parseInt(e.target.id);
  dispatchDeleteTodo(id);
}

ul.addEventListener("click", onClick);
form.addEventListener("submit", onSubmit);