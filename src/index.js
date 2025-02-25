import "../styles/main.css";
import "animate.css";
import { addProjectModal } from "../scripts/modals";
import { refreshProjectList,checkProject } from "../scripts/project";
import { show_content } from "../scripts/todos";

checkProject("default","white");
refreshProjectList();



