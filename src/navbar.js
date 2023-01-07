let nav = () => {

    let nav = document.createElement('nav');

    let home = document.createElement('button');
    home.textContent = "Home";
    nav.appendChild(home);

    let menu = document.createElement('button');
    menu.textContent = "Menu";
    nav.appendChild(menu);

    let about = document.createElement('button');
    about.textContent = "About";
    nav.appendChild(about);

    let contact = document.createElement('button');
    contact.textContent = "Contact";
    nav.appendChild(contact);

    return nav;
};

export default nav;
