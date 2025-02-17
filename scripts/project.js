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
    projects.insertBefore(link,projects.children[projects.children.length-1]);
}

let refreshProjectList = () => {
    let projects = document.querySelector("#projects");
    let projectNames = Object.keys(getAllProject());
    projectNames.forEach(project => {
        let link = document.createElement("a");
        link.textContent = project;
        link.style.color = JSON.parse(localStorage.getItem(project)).color;
        projects.insertBefore(link,projects.children[projects.children.length-1]);
    })
}

export {checkProject,refreshProjectList}