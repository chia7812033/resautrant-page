import nav from "./navbar";
import home from "./home"
import footer from "./footer";
import contact from "./contact";
import menu from "./menu";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {

    let content = document.getElementById("content");

    let navbar = nav();
    content.appendChild(navbar);

    let main_block = home();
    main_block.className = "main"
    content.appendChild(main_block);

    let b_footer = footer();
    content.appendChild(b_footer);

    let contact_btn = document.getElementById("contact");
    contact_btn.addEventListener('click', () => {
        let contact_block = contact();
        contact_block.className = "main";
        let main = document.querySelector(".main");
        main.replaceWith(contact_block);
        console.log("Contact");
    })

    let home_btn = document.getElementById("home");
    home_btn.addEventListener('click', () => {
        let home_block = home();
        home_block.className = "main";
        let main = document.querySelector(".main");
        main.replaceWith(home_block);
        console.log("Home");
    })

    let menu_btn = document.getElementById("menu");
    menu_btn.addEventListener('click', () => {
        let menu_block = menu();
        menu_block.className = "main";
        let main = document.querySelector(".main");
        main.replaceWith(menu_block);
        console.log("Menu");
    })


})
