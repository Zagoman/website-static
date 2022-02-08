const url = "https://kea-alt-del.dk/t7/api/products";
// fetch API
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => showProduct());
  });

const template = document.querySelector("template").content;
const showProduct = (data) => {
  const clone = template.cloneNode(true);

  //change content

  //grab parent element

  //attach content
};
