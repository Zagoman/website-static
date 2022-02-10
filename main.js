(function () {
  const url = "https://kea-alt-del.dk/t7/api/subcategories";
  fetch(url)
    .then((header) => header.json())
    .then((data) => data.forEach((el) => showData(el)));

  const template = document.querySelector("#subcategories__temp").content;
  showData = (data) => {
    const clone = template.cloneNode(true);
    clone.querySelector(
      "li>a"
    ).href = `./product-list.html?subcategory=${data.subcategory}`;
    clone.querySelector("li>a").textContent = `${data.subcategory}`;
    // console.log("hello world");
    document.querySelector("aside ul").append(clone);
  };
})();
