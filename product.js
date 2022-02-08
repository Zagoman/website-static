const url = "https://kea-alt-del.dk/t7/api/products/1164";
// fetch API
fetch(url)
  .then((header) => header.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchase__title").textContent =
    product.productdisplayname;
  document.querySelector(".purchase__brand").textContent = product.brandname;
  document.querySelector(".purchase__tag").textContent = product.articletype;
  document.querySelector(".dd__model-name").textContent =
    product.productdisplayname;
  document.querySelector(".dd__model-color").textContent = `${
    product.colour1 != "NA" ? product.colour1 : "no colour"
  } & ${product.colour2 != "NA" ? product.colour2 : "no colour"}`;
  document.querySelector(".dd__model-id").textContent = product.id;
  document.querySelector(".desc__brand").textContent = product.brandname;
  document.querySelector(".desc__moto").textContent = product.brandbio;
  document.querySelector(
    ".product__img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
