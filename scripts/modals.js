import "../styles/modals.css"
import "animate.css"
import { refreshProjectList, checkProject } from "./project";
import { add_task, add_project, complete_task, delete_task } from "./events";

function setAttributes(elem, attrs){
    for(let key in attrs){
        elem.setAttribute(key,attrs[key])
    }
}

function appendChildren(parent,children){
    children.forEach(child => {
        parent.appendChild(child);
    });
}

let closeModal = function(modal) {
    modal.remove();
}

let addProjectModal = function () {
    if(!document.querySelector("#add_project_modal")){
        let content = document.querySelector("#content");

        let modal = document.createElement("div");
        modal.setAttribute("id", "add_project_modal");
        let heading_div = document.createElement("div");
        heading_div.classList.add("heading_div");
        let heading = document.createElement("h3");
        heading.textContent = "Project Details";
        let close_button = document.createElement("button");
        close_button.textContent = "x";
        close_button.addEventListener("click", (e) => {closeModal(e.target.parentElement.parentElement)});
        close_button.classList.add("close_button");
        appendChildren(heading_div,[heading,close_button]);
        let name_div = document.createElement("div");
        let name_label = document.createElement("label");
        name_label.textContent = "Project Name";
        name_label.setAttribute("for","project_name");
        let name_input = document.createElement("input");
        setAttributes(name_input,{"id":"project_name","name":"project_name","type":"text"});
        appendChildren(name_div,[name_label,name_input]);
        let color_div = document.createElement("div");
        let color_label = document.createElement("label");
        color_label.textContent = "Project Color";
        color_label.setAttribute("for","project_color");
        let color_input = document.createElement("input");
        setAttributes(color_input,{"type":"color","id":"project_color","name":"project_color"});
        appendChildren(color_div,[color_label,color_input]);
        let acceptButton = document.createElement("button");
        acceptButton.textContent = "Create";
        acceptButton.classList.add("create_project_button");
        acceptButton.addEventListener("click", ()=>{add_project(name_input.value,color_input.value)});

        appendChildren(modal,[heading_div,name_div,color_div,acceptButton]);
        content.appendChild(modal);
    }else{
        let modal = document.querySelector("#add_project_modal");
        modal.remove(); 
    }
}

let addTodoModal = function(key){
    let content = document.querySelector("#content");

    let modal = document.createElement("div");
    modal.setAttribute("id", "add_todo_modal");
    let heading_div = document.createElement("div");
    heading_div.classList.add("heading_div");
    let heading = document.createElement("h3");
    heading.textContent = "Task";
    let close_button = document.createElement("button");
    close_button.textContent = "x";
    close_button.addEventListener("click", (e) => {closeModal(e.target.parentElement.parentElement)});
    close_button.classList.add("close_button");
    let task_div = document.createElement("div");
    task_div.classList.add("task_div");
    let task_input = document.createElement("input");
    setAttributes(task_input,{"id":"task","name":"task","type":"text"});
    let acceptButton = document.createElement("button");
    acceptButton.textContent = "Add";
    acceptButton.classList.add("accept_button");
    acceptButton.addEventListener("click",()=>{add_task(key,task_input.value)});

    appendChildren(heading_div,[heading,close_button])
    appendChildren(task_div,[task_input]);
    appendChildren(modal,[heading_div,task_div,acceptButton]);
    content.appendChild(modal);
}

let showContentModal = function(key,container){
    let todo = document.createElement("div");
    todo.classList.add("card");
    todo.setAttribute("id","todos")

    let heading = document.createElement("h2");
    heading.textContent = "To Do's";

    let add_new_todo_button = document.createElement("buton");
    add_new_todo_button.setAttribute("id","add_new_todo_button");
    add_new_todo_button.textContent = "Add task";
    add_new_todo_button.addEventListener("click",()=>{addTodoModal(key)});

    todo.appendChild(heading);


    let todos_object = JSON.parse(localStorage.getItem(key));
    let todos_values = todos_object.todo;

    todos_values.forEach(task => {
        let p = document.createElement("p");
        p.textContent = task;

        let complete_button = document.createElement("button");
        complete_button.textContent = "Done";
        complete_button.classList.add("complete_button");
        complete_button.addEventListener("click",()=>{complete_task(key,task)});

        let delete_button = document.createElement("button");
        delete_button.textContent = "Delete";       
        delete_button.classList.add("delete_button");
        delete_button.addEventListener("click",()=>{delete_task(key,task)});

        let div = document.createElement("div");
        div.classList.add("todo_task");
        appendChildren(div,[p,complete_button,delete_button]);

        todo.appendChild(div);
    })
    
    todo.appendChild(add_new_todo_button);

    let completed = document.createElement("div");
    completed.classList.add("card");
    completed.setAttribute("id","completed");

    let heading_completed = document.createElement("h2");
    heading_completed.textContent = "Completed";

    completed.appendChild(heading_completed);

    let completed_values = todos_object.complete;

    completed_values.forEach(task=>{
        let p = document.createElement("p");
        p.textContent = task;

        let div = document.createElement("div");
        div.classList.add("todo_task");
        div.appendChild(p);

        completed.appendChild(div)
    })




    container.textContent = "";
    appendChildren(container, [todo,completed]);
}

export {addProjectModal, showContentModal}

//adding task