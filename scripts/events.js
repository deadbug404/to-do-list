import { Todo, show_content } from "./todos";
import { showContentModal } from "./modals";
import { checkProject, refreshProjectList } from "./project";

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

let delete_project = function(key,e){
    localStorage.removeItem(key);
    refreshProjectList();
    
    let cards = document.querySelectorAll(".card");
    cards.forEach(card=>{
        card.remove();
    });
}

let closeModal = function(modal) {
    modal.remove();
}

let selectProject = function(e){
    if(!(e.target.id == "nav") && !(e.target.id == "projects")){
        for(const child of e.target.parentElement.children){
            if(child.style.border == "1px solid white"){
                child.style.border = "";
            }
        }
    
        e.target.style.border = "1px solid white";
    }
}

export {add_task, complete_task , delete_task , delete_project, add_project, closeModal, selectProject}