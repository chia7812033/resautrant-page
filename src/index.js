import nav from "./navbar";
import home from "./home"
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {

    let content = document.getElementById("content");

    let navbar = nav();
    content.appendChild(navbar);

    let home_block = home();
    content.appendChild(home_block);

})
