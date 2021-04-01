import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => ({ type: ADD, text });
const deleteToDo = (id) => ({ type: DELETE, id: parseInt(id) });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
