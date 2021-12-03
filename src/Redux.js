import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//3. make dispatch param
const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

//5. dispatch chage state
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(el => el.id !== parseInt(action.id));
    default:
      return state;
  }
};

//readstate
const store = createStore(reducer);

//4. dispatch button
const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

//after state change manipulate HTML element
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    //create li and add text and func
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;

    //create button and add text and func
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    //append
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

//6. listening state change
store.subscribe(paintToDos);

//2. get val from input and pass to add dispatch
const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

//1. form get e from button
form.addEventListener("submit", onSubmit);