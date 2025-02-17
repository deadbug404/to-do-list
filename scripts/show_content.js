import "../styles/content.css";
import Todo from "./todos";

let show_content = function(){
    let id = "sample";
    let container = document.querySelector("#content");

    let todo = document.createElement("div");
    todo.classList.add("card");

    let completed = document.createElement("div");
    completed.classList.add("card");

    container.appendChild(todo);
    container.appendChild(completed);
};

export default show_content;