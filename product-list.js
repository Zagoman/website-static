const urlParams = new URLSearchParams(window.location.search);
let start = 0;

const param = urlParams.get("category")
  ? urlParams.get("category")
  : urlParams.get("subcategory")
  ? urlParams.get("subcategory")
  : "";

const url = `https://kea-alt-del.dk/t7/api/products?limit=30${
  urlParams.get("category")
    ? `&category=${param}`
    : urlParams.get("subcategory")
    ? `&subcategory=${param}`
    : ""
}&start=${start}`;
// fetch API
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => showProduct(el));
  });
/* 
<template class="smallProductTemplate">
        <article class="product">
          <img
            src="./media/1163.webp"
            alt="Product image"
            class="product__img"
          />
          <h3 class="product__name">
            Sahara Team India Fanwear Round Neck Jersey
          </h3>
          <p class="product__type">Tshirts | Nike</p>
          <p class="product__price is--prev">Prev. DKK 1595,-</p>
          <p class="product__price">Now DKK 1560,-</p>
          <a href="./product.html">Read more</a>
          <div class="discount-tag">39%</div>
        </article>
      </template>
*/
const template = document.querySelector("template").content;
document.querySelector(".heading__main").textContent = param ? param : "All";
const showProduct = (elem) => {
  console.log(elem);
  const clone = template.cloneNode(true);

  //change content

  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${elem.id}.webp`;
  clone.querySelector("h3").textContent = elem.productdisplayname;
  clone.querySelector(
    ".product__type"
  ).textContent = `${elem.articletype} | ${elem.brandname}`;
  if (elem.discount != null) {
    clone.querySelector(".product__price.is--prev").classList.add = `is--prev`;
    clone.querySelector(
      ".product__price.is--prev"
    ).textContent = `Prev ${Math.ceil(elem.price)},-`;
    clone.querySelector(
      ".product__price.is--now"
    ).textContent = `Now ${Math.ceil(
      elem.price - (elem.price * elem.discount) / 100
    )},-`;
    clone.querySelector(".discount-tag").textContent = `${elem.discount}%`;
  } else {
    clone.querySelector(".product__price.is--prev").remove();
    clone.querySelector(".discount-tag").remove();
    clone.querySelector(
      ".product__price.is--now"
    ).textContent = `${elem.price},-`;
  }
  clone.querySelector("a").setAttribute("href", `./product.html?id=${elem.id}`);

  //grab parent element
  document.querySelector("main").append(clone);
  //attach content
};
