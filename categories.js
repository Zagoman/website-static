const url = "https://kea-alt-del.dk/t7/api/categories";
fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach((el) => showCategory(el)));
const template = document.querySelector("#categories__temp").content;

/*
<template id="categories__temp">
      
          <li><a href="product-list.html">Repellat.</a></li>
        
    </template>
*/
const showCategory = (el) => {
  const clone = template.cloneNode(true);
  clone.querySelector("li>a").textContent = `${el.category}`;
  clone.querySelector(
    "li>a"
  ).href = `./product-list.html?category=${el.category}`;

  document.querySelector("ol").append(clone);
};
