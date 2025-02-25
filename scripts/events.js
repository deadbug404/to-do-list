import { Todo, show_content } from "./todos";
import { showContentModal } from "./modals";
import { checkProject } from "./project";

let add_task = function(key,description){
    let task = new Todo(key);
    task.save(description);

    let modal = document.querySelector("#add_todo_modal");
    modal.remove();
    show_content(key);
}

let complete_task = function(key,description){
    let task = new Todo(key);
    task.complete(description);
    show_content(key);
}

let delete_task = function(key,description){
    let task = new Todo(key);
    task.delete(description);
    show_content(key);
}

let add_project = function(name,color){
    if(checkProject(name,color)){
        let content = document.querySelector("#content");
        
        let modal = document.querySelector("#add_project_modal");
        modal.remove();

        content.textContent = "";
        showContentModal(name,content);
    }
}

export {add_task, complete_task , delete_task ,add_project}