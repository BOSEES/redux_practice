import React from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

let id = 0;

const Detail = ({toDo}) => {
  id = useParams();
  console.log(toDo);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>asdasdasd</h5>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    toDo: state.find((todo) => todo.id === id)
  }
}

export default connect(mapStateToProps) (Detail);