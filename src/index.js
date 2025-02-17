import "../styles/main.css";
import "animate.css";
import { addProjectModal } from "../scripts/modals";
import { refreshProjectList } from "../scripts/project";

refreshProjectList();
let add_new_project = document.querySelector("#add_new_project");
add_new_project.addEventListener("click", addProjectModal);

