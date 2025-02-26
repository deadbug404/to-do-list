import { show_content } from "./todos";
import { addProjectModal } from "./modals";


class Project{
    
    constructor(name,color){
        this._name = name;
        this._color = color;
    }

    saveProject(){
        let format = {
            color:this._color,
            todo:[],
            complete:[]
        }
        let format_json = JSON.stringify(format);
        localStorage.setItem(this._name,format_json);
        addProjectToList(this._name,this._color);
    }

}

let checkProject = (name,color) => {
    if(!localStorage.getItem(name)){
        let project = new Project(name,color);
        project.saveProject();
        refreshProjectList();
        return true
    }
}

let getAllProject = () =>{
    const projects = Object.keys(localStorage).reduce((proj,key) => {
        proj[key] = JSON.parse(localStorage.getItem(key));
        return proj;
    },{})

    return projects;
}

let addProjectToList = (name,color) => {
    let projects = document.querySelector("#projects");
    let link = document.createElement("a");
    link.textContent = name;
    link.style.color = color;
    link.setAttribute("id",name);
    projects.insertBefore(link,projects.children[projects.children.length-1]);
}

let refreshProjectList = () => {
    let projectsList = document.querySelector("#projects");
    projectsList.textContent = "";
    let header = document.querySelector("#header");
    header.textContent = "";

    let heading = document.createElement("h1");
    heading.textContent = "Projects";

    let add_new_project_button = document.createElement("button");
    add_new_project_button.setAttribute("id","#add_new_project");
    add_new_project_button.addEventListener("click", addProjectModal);
    add_new_project_button.textContent = "+";

    header.appendChild(heading);
    if(window.innerWidth <= 800){
        header.appendChild(add_new_project_button)
    }else{
        projectsList.appendChild(add_new_project_button);
    }

    let projectNames = Object.keys(getAllProject());
    projectNames.forEach(project => {
        let link = document.createElement("a");
        link.textContent = project;
        link.style.color = JSON.parse(localStorage.getItem(project)).color;
        link.setAttribute("id",project);
        projectsList.insertBefore(link,projectsList.children[projectsList.children.length-1]);
    })

    let projects = Array.from(document.querySelectorAll("a"));
    projects.forEach(project => {
        project.addEventListener("click", (e) => {
            show_content(e.target.id);

        })
    });


}

export {checkProject,refreshProjectList}