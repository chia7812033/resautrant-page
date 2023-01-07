let contact = () => {

  let contact = document.createElement('div');
  contact.id = "contact";

  let person1 = document.createElement('div');
  person1.id = "person";
  let person1_img = document.createElement('img');
  person1_img.id = "person1-img";
  let person1_name = document.createElement('p');
  person1_name.textContent = "Name: Bob Cake";
  let person1_contact = document.createElement('p');
  person1_contact.textContent = "Phone: 1234-5678";
  person1.appendChild(person1_img);
  person1.appendChild(person1_name);
  person1.appendChild(person1_contact);

  contact.appendChild(person1);

  let person2 = document.createElement('div');
  person2.id = "person";
  let person2_img = document.createElement('img');
  person2_img.id = "person2-img";
  let person2_name = document.createElement('p');
  person2_name.textContent = "Name: Tony Applson";
  let person2_contact = document.createElement('p');
  person2_contact.textContent = "Phone: 5678-1234";
  person2.appendChild(person2_img);
  person2.appendChild(person2_name);
  person2.appendChild(person2_contact);

  contact.appendChild(person2);

  return contact;
};

export default contact;
