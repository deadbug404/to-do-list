import "../styles/main.css";
import "animate.css";
import { refreshProjectList,checkProject } from "../scripts/project";
import { selectProject } from "../scripts/events";

let project_div = document.querySelector("#projects");
project_div.addEventListener("click", (e)=>{selectProject(e)}); 

window.onresize = function(){
    location.reload();
}

checkProject("default","white");
refreshProjectList();



