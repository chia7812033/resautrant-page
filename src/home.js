let home = () => {
    let home = document.createElement('div');
    home.id = "home"

    let title = document.createElement('h1');
    title.textContent = "Welcome to Dan's burger!";
    home.appendChild(title);

    let burger_img = document.createElement('img');
    burger_img.id = "burger-img";
    home.appendChild(burger_img);

    let dis = document.createElement('p');
    dis.id = "dis"
    dis.textContent = "We are the classic American diner and proud of everything that means. Since 1953, we've served quality food and healthy portions at a fair price. No matter where we are, our light is always on, inviting guests around the world into a place where everyone is welcome.";
    home.appendChild(dis);

    return home;
}

export default home;
