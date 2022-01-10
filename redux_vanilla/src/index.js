import { createStore } from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer
const countModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default: 
      return;
  }
  // if (action.type === "ADD") {
  //   return state + 1;
  // } else if (action.type === "MINUS"){
  //   console.log("빼기");
  //   return state - 1;
  // } else {
  //   return state;
  // }
};

//store
const countStore = createStore(countModifier);

//subscribe
const onChange = () => {
  number.textContent = countStore.getState();
}
countStore.subscribe(onChange);

//action
add.addEventListener("click", () => {
  countStore.dispatch({type: ADD});
})

minus.addEventListener("click", () => {
  countStore.dispatch({type: MINUS});
})