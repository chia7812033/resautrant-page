let menu = () => {
  let menu = document.createElement('div');

  let food1 = document.createElement('div');
  food1.id = "food";
  let food1_img = document.createElement('img');
  food1_img.id = "food1-img";
  let food1_name = document.createElement('p');
  food1_name.textContent = "Name: Cake";
  let food1_price = document.createElement('p');
  food1_price.textContent = "Price: $4.99";
  food1.appendChild(food1_img);
  food1.appendChild(food1_name);
  food1.appendChild(food1_price);

  menu.appendChild(food1);

  let food2 = document.createElement('div');
  food2.id = "food";
  let food2_img = document.createElement('img');
  food2_img.id = "food2-img";
  let food2_name = document.createElement('p');
  food2_name.textContent = "Name: Hot dog";
  let food2_price = document.createElement('p');
  food2_price.textContent = "Price: $1.99";
  food2.appendChild(food2_img);
  food2.appendChild(food2_name);
  food2.appendChild(food2_price);

  menu.appendChild(food2);

  return menu;
}

export default menu;
