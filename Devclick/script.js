function sortSearch(category, searchInputValue) {
  let visibleProducts = false;
  const nodata = document.querySelector(".no-data");

  document.querySelectorAll(".products").forEach((product) => {
    const productName = product.querySelector(".item-name").innerHTML;
    const productPrice = product.querySelector(".price-product").innerHTML;
    const productCategory = product.getAttribute("data-category");
    const isOutOfStock = product.classList.contains("js-product-out-of-stock");

    const matchesCategory = category === "all" || productCategory === category;
    const matchesSearch = productName.includes(searchInputValue) || productPrice.includes(searchInputValue);

    if (matchesSearch) {
        if(category === 'all'){
            product.style.display = "block";
            if(isOutOfStock){
              product.style.opacity = 0.5

              return
            }
            product.style.opacity = 1
        } else {
            if (matchesCategory && !isOutOfStock) {
                product.style.display = "block";
                product.style.opacity = 1;
            } else {
                product.style.display = "none";
            }
        } 
        visibleProducts = true;
    } else {
        product.style.display = 'none'
    }
  });

  nodata.style.display = visibleProducts ? "none" : "block";
}

function updateCategoryUI(category) {
  const categoryList = {
    all: "All items",
    "Men Shirt": "Men Shirt",
    "Women Shirt": "Women Shirt",
    "Men Jeans": "Men Jeans",
    "Women Jeans": "Women Jeans",
  };

  document.querySelectorAll(".list-items").forEach((el) => {
    if (el.innerHTML.trim() === categoryList[category]) {
      el.classList.add("select");
    } else {
      el.classList.remove("select");
    }
  });
  const searchInputValue = document.getElementById("search-product").value;
  sortSearch(category, searchInputValue);

  localStorage.setItem("selectedCategory", category);
}

const retrieveSavedSearchInputValue =
  localStorage.getItem("searchProduct") || "";
const retrieveSavedCategory = localStorage.getItem("selectedCategory") || "all";



document.getElementById("search-product").value = retrieveSavedSearchInputValue;

document.getElementById("search-product").addEventListener("input", (event) => {
  const searchInputValue = event.target.value;
  const selectedCategory = localStorage.getItem("selectedCategory") || "all";
  sortSearch(selectedCategory, searchInputValue);
  localStorage.setItem("searchProduct", searchInputValue);
});

sortSearch(retrieveSavedCategory, retrieveSavedSearchInputValue);
updateCategoryUI(retrieveSavedCategory);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
    event.preventDefault();
    const searchContainer = document.getElementById("search-product");
    if (
      searchContainer.style.display === "none" ||
      searchContainer.style.display === ""
    ) {
      searchContainer.style.display = "block";
      document.getElementById("search-product").focus();
    } else {
      searchContainer.style.display = "none";
    }
  }
});
