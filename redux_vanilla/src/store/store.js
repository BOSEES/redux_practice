import {createStore} from "redux";
import {todoReducer} from "../reducer/index.js";

export const store = createStore(todoReducer);