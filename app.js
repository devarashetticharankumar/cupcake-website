let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
// close
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

let listproductsHTML = document.querySelector(".listproducts");
let listproducts = [];

const addDataToHTML = () => {
  listproducts.innerHTML = "";
  if (listproducts.length > 0) {
    listproducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHTML = `
          <div class="imgcontainer">
            <img src="${product.image}">
          </div>
          <h2>${product.name}</h2>
          <div class="price">
            $${product.price}
          </div>
          <button class="addCart">Add To Cart</button>`;
      listproductsHTML.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  //fetch products from json file and store in array
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      listproducts = data;
      // console.log(listproducts);
      addDataToHTML();
    });
};
initApp();
