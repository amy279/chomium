const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

// const toDos = [];
let toDos = [];

//submit의 기본 동작은 페이지를 새로고침하는것

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    //target 은 클릭된 HTMLElement
    //모든 HTML element에는 하나 이상의 property가 있고 그중 하나가 parentElement이고 이는 클릭된 element의 부모이다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id!== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;   
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}