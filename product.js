const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
// fetch API
fetch(url)
  .then((header) => header.json())
  .then((data) => showProduct(data));

const template = document.querySelector("template").content;
function showProduct(product) {
  const clone = template.cloneNode(true);
  clone.querySelector(".purchase__title").textContent =
    product.productdisplayname;
  clone.querySelector(".purchase__brand").textContent = product.brandname;
  clone.querySelector(".purchase__tag").textContent = product.articletype;
  if (product.discount != null) {
    clone.querySelector(".price-tag.is--prev").textContent = `Prev ${Math.ceil(
      product.price
    )},-`;
    clone.querySelector(".price-tag.is--now").textContent = `Now ${Math.ceil(
      product.price - (product.price * product.discount) / 100
    )},-`;
    clone.querySelector(".discount-tag").textContent = `${product.discount}%`;
  } else {
    clone.querySelector(".price-tag.is--prev").remove();
    clone.querySelector(".discount-tag").remove();
    clone.querySelector(
      ".price-tag.is--now"
    ).textContent = `${product.price},-`;
  }

  clone.querySelector(".dd__model-name").textContent =
    product.productdisplayname;
  clone.querySelector(".dd__model-color").textContent = `${
    product.colour1 != "NA" ? product.colour1 : "no colour"
  } & ${product.colour2 != "NA" ? product.colour2 : "no colour"}`;
  clone.querySelector(".dd__model-id").textContent = product.id;
  clone.querySelector(".desc__brand").textContent = product.brandname;
  clone.querySelector(".desc__moto").textContent = product.brandbio;
  clone.querySelector(
    ".product__img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector("main").append(clone);
}
