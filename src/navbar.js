let nav = () => {

    let nav = document.createElement('nav');

    let home = document.createElement('button');
    home.id = "home"
    home.textContent = "Home";
    nav.appendChild(home);

    let menu = document.createElement('button');
    menu.id = "menu"
    menu.textContent = "Menu";
    nav.appendChild(menu);

    let contact = document.createElement('button');
    contact.id = "contact"
    contact.textContent = "Contact";
    nav.appendChild(contact);

    return nav;
};

export default nav;
