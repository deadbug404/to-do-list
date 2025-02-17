import "../styles/modals.css"
import "animate.css"
import { refreshProjectList, checkProject } from "./project";

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

function deleteModal(){
    let modal = document.querySelector("#add_project_modal");
    modal.remove();
}

let addProjectModal = function () {
    if(!document.querySelector("#add_project_modal")){
        let content = document.querySelector("#content");

        let modal = document.createElement("div");
        modal.setAttribute("id", "add_project_modal");
        let heading = document.createElement("h3");
        heading.textContent = "Project Details";
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
        acceptButton.addEventListener("click", ()=>{
            if(checkProject(name_input.value,color_input.value)){
                deleteModal();
            }
        });

        appendChildren(modal,[heading,name_div,color_div,acceptButton]);
        content.appendChild(modal);
    }else{
        let modal = document.querySelector("#add_project_modal");
        modal.remove(); 
    }
}

export {addProjectModal}