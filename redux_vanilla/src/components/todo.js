import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../action/index.js";
import { Link } from "react-router-dom";

const ToDo = ({text, id, onBtnClick}) => {
  return (
    <li id={id}>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}> DEL </button>
      </Link>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);