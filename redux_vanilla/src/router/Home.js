import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../action/index.js";
import ToDo from "../components/todo.js";

const Home = ({toDos, dispatchAddToDo}) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatchAddToDo(text);
  }

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{toDos.map((todo) => {
        return <ToDo key={todo.id} {...todo} />
      })}</ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    toDos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToDo: (text) => dispatch(addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);