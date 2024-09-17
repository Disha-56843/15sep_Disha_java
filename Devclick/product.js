const products = [
  {
    id: 1,
    name: 'STONEBERG',
    description: 'Men Formal Shirt',
    price: 1.75,
    image: 'https://tinyurl.com/men-striped-formal-shirt',
    alt: 'Men_Shirt',
    category: 'Men Shirt',
    quantity_limit: 4,
  },

  {
    id: 2,
    name: 'FIBERMILL',
    description: 'Men Printed Shirt',
    price: 11.75,
    image: 'https://tinyurl.com/men-printed-casual-shirt',
    alt: 'Men_Shirt',
    category: 'Men Shirt',
    quantity_limit: 6,
  },

  {
    id: 3,
    name: 'CHEMISTRY',
    description: 'Women Casual Shirt',
    price: 12.75,
    image: 'https://tinyurl.com/women-casual-shirt',
    alt: 'Women_Shirt',
    category: 'Women Shirt',
    quantity_limit: 3,
  },

  {
    id: 4,
    name: 'TURRITOPSIS',
    description: 'Women Retro Shirts',
    price: 11.25,
    image: 'https://tinyurl.com/women-classic-retro-shirts',
    alt: 'Women_Shirt',
    category: 'Women Shirt',
    quantity_limit: 7,
  },

  {
    id: 5,
    name: 'zenesty',
    description: 'Women Casual Shirt',
    price: 13.75,
    image: 'https://tinyurl.com/women-solid-casual-shirt',
    alt: 'Women_Shirt',
    category: 'Women Shirt',
    quantity_limit: 2,
  },

  {
    id: 6,
    name: 'Spykar',
    description: 'Men Skinny Fit Jeans',
    price: 11.5,
    image:
      'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/8/k/32-udjeno1328-u-s-polo-assn-denim-co-original-imagypf6b4g5rfe6.jpeg?q=70',
    alt: 'Men_Jeans',
    category: 'Men Jeans',
    quantity_limit: 9,
  },

  {
    id: 7,
    name: 'JACK & JONES',
    description: 'Men Skinny Fit Jeans',
    price: 10.75,
    image:
      'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/s/o/32-fmjen2840-flying-machine-original-imagzrsja5zpajrz.jpeg?q=70',
    alt: 'Men_Jeans',
    category: 'Men Jeans',
    quantity_limit: 7,
  },

  {
    id: 8,
    name: 'TYFFYN',
    description: 'Women Black Jeans',
    price: 13.75,
    image:
      'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/h/p/28-wd-black-2z-nucouths-original-imahfysehpazsnns.jpeg?q=70',
    alt: 'Women_Jeans',
    category: 'Women Jeans',
    quantity_limit: 10,
  },

  {
    id: 9,
    name: 'Miss Chase',
    description: 'Women Black Jeans',
    price: 16.75,
    image:
      'https://rukminim2.flixcart.com/image/612/612/l12h1u80/jean/m/l/q/34-jeans-black2-4-zayla-original-imagcpy6jgjj43um.jpeg?q=70',
    alt: 'Women_Jeans',
    category: 'Women Jeans',
    quantity_limit: 4,
  },
]

let cart = []

function showProducts() {
  const productContainer = document.querySelector('.products-container')
  // productContainer.innerHTML = ''

  products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.className = 'products'
    productCard.style.cursor = 'pointer'
    productCard.setAttribute('data-category', product.category)

    const productName = document.createElement('h3')
    productName.className = 'item-name'
    productName.innerHTML = product.name

    const description = document.createElement('span')
    description.className = 'description'
    description.innerHTML = product.description

    const bottomPartOfProductContainer = document.createElement('div')
    bottomPartOfProductContainer.className = 'bottom-part-of-product'

    const dollar = document.createElement('span')
    dollar.className = 'dollar'
    dollar.innerHTML = '$'

    const price = document.createElement('span')
    price.className = 'price-product'
    price.innerHTML = product.price

    dollar.appendChild(price)

    const image = document.createElement('img')
    image.src = product.image
    image.alt = product.name
    image.className = 'card-img'

    bottomPartOfProductContainer.appendChild(dollar)
    bottomPartOfProductContainer.appendChild(image)

    productCard.appendChild(productName)
    productCard.appendChild(description)
    productCard.appendChild(bottomPartOfProductContainer)

    productCard.addEventListener('click', () => {
      addToCart(product)
      updateCart()
    })

    productContainer.appendChild(productCard)
  })

  updateProductAvailability()
}

function updateProductAvailability() {
  products.forEach((product) => {
    const productElements = document.querySelectorAll('.products')

    productElements.forEach((productElement) => {
      const productName = productElement.querySelector('.item-name').innerText

      if (productName === product.name) {
        let quantityInCart = 0
        const foundItem = cart.find(item => item.id === product.id)
        if (foundItem) {
          quantityInCart = foundItem.quantity
        }

        if (quantityInCart >= product.quantity_limit) {
          productElement.style.pointerEvents = 'none';
          productElement.style.cursor = 'not-allowed'

          productElement.classList.add('js-product-out-of-stock')


        } else {
          productElement.classList.remove('js-product-out-of-stock')

          productElement.style.pointerEvents = 'auto';
        }
      }
    })
  })
}

document.getElementById('clear-all-button').addEventListener('click', function () {
  const cartItemList = document.querySelector('.order-container')
  if (cartItemList.children.length > 0) {
    if (confirm('Are you sure you want to clear cart')) {


      while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild)
      }
    }

  }
  else {
    alert('No item to clear')
  }
  cart = []
  updateCart()
})

function addToCart(product) {
  const cartItemContainer = document.querySelector('.order-container')

  const existingProduct = cart.find(existingProductInCart => existingProductInCart.id === product.id)


  if (existingProduct) {

    //   console.log(existingProduct)
    if (existingProduct.quantity < product.quantity_limit) {
      existingProduct.quantity++


      const allOrderItems = cartItemContainer.querySelectorAll('.orders')
      allOrderItems.forEach(orderContainer => {
        const productName = orderContainer.querySelector('.ordered-product-name')
        if (productName && productName.innerHTML === product.name) {
          orderContainer.querySelector('.quantity').innerHTML = existingProduct.quantity
          orderContainer.querySelector('.ordered-product-price').innerHTML = `$${(
            parseFloat(product.price) * existingProduct.quantity
          ).toFixed(2)}`
        }
      })
    } else {
      alert('Cannot add more of this product to the cart. Quantity limit reached.')
    }
  } else {

    cart.push({
      id: product.id,
      quantity: 1
    })

    const orderContainer = document.createElement('div')
    orderContainer.className = 'orders'

    const orderedProductImage = document.createElement('img')
    orderedProductImage.style.height = '60px'
    orderedProductImage.style.width = '75px'
    orderedProductImage.style.borderRadius = '5px'
    orderedProductImage.src = product.image
    orderedProductImage.alt = product.name

    const orderedProductName = document.createElement('h4')
    orderedProductName.classList.add('ordered-product-name')
    orderedProductName.innerText = product.name

    const decrement = document.createElement('button')
    decrement.classList.add('decrement')
    decrement.innerHTML = '-'
    decrement.addEventListener('click', function () {
      const cartProduct = cart.find(cartItem => cartItem.id === product.id)

      if (cartProduct && cartProduct.quantity > 1) {
        cartProduct.quantity--
        orderContainer.querySelector('.quantity').innerHTML = cartProduct.quantity
        orderContainer.querySelector('.ordered-product-price').innerHTML = `$${(
          parseFloat(product.price) * cartProduct.quantity
        ).toFixed(2)}`

        updateCart()
      } else {
        cart = cart.filter(cartItem => cartItem.id !== product.id)
        if (cartItemContainer.children.length === 1) {
          if (confirm('Do you want to remove this item from the cart?')) {
            orderContainer.remove()
            updateCart()
          }
        } else {
          orderContainer.remove()
          updateCart()
        }
      }
    })

    const quantity = document.createElement('span')
    quantity.classList.add('quantity')
    quantity.innerHTML = '1'

    const increment = document.createElement('button')
    increment.classList.add('increment')
    increment.innerHTML = '+'
    increment.addEventListener('click', function () {
      const cartProduct = cart.find(cartItem => cartItem.id === product.id)
      const quantityLimit = products.find(productInArray => productInArray.id === product.id).quantity_limit

      if (cartProduct && cartProduct.quantity < quantityLimit) {
        cartProduct.quantity++
        orderContainer.querySelector('.quantity').innerHTML = cartProduct.quantity
        orderContainer.querySelector('.ordered-product-price').innerHTML = `$${(
          parseFloat(product.price) * cartProduct.quantity
        ).toFixed(2)}`

        updateCart()
      } else {
        alert('Cannot add more of this product to the cart. Quantity limit reached.')
      }
    })

    const orderedProductPrice = document.createElement('span')
    orderedProductPrice.classList.add('ordered-product-price')
    orderedProductPrice.innerHTML = `$${product.price}`

    const cancleProduct = document.createElement('button')
    cancleProduct.className = 'cancle-product'
    cancleProduct.innerHTML = 'x'
    cancleProduct.addEventListener('click', function () {

      orderContainer.remove()

      cart = []
      updateCart()

    })

    orderContainer.appendChild(orderedProductImage)
    orderContainer.appendChild(orderedProductName)
    orderContainer.appendChild(decrement)
    orderContainer.appendChild(quantity)
    orderContainer.appendChild(increment)
    orderContainer.appendChild(orderedProductPrice)
    orderContainer.appendChild(cancleProduct)

    cartItemContainer.appendChild(orderContainer)
  }

  updateCart()

  // console.log(document.querySelector('.orders').innerHTML)
}

function updateCart() {
  const cartItemContainer = document.querySelector('.order-container')
  let subtotal = 0

  Array.from(cartItemContainer.children).forEach((orderContainer) => {
    const priceText = orderContainer
      .querySelector('.ordered-product-price')
      .innerHTML.replace('$', '')
    const price = parseFloat(priceText)

    subtotal += price
  })

  const discount = (5 * subtotal) / 100
  const salesTax = (18 * subtotal) / 100
  const total = subtotal - discount + salesTax

  document.querySelector('.js-subtotal').innerText = `$${subtotal.toFixed(2)}`
  document.querySelector('.js-discount').innerHTML = `- $${discount.toFixed(
    2
  )}`
  document.querySelector('.js-sales-tax').innerHTML = `$${salesTax.toFixed(2)}`
  document.querySelector('.js-total-of-product').innerHTML = `$${total.toFixed(
    2
  )}`

  updateProducts()
}

function updateProducts() {
  document.querySelector('.products-container').innerHTML = ''
  showProducts()

  const retrieveSavedSearchInputValue =
    localStorage.getItem('searchProduct') || ''
  const retrieveSavedCategory =
    localStorage.getItem('selectedCategory') || 'all'

  sortSearch(retrieveSavedCategory, retrieveSavedSearchInputValue)
  updateCategoryUI(retrieveSavedCategory)
}

showProducts()

function sortProducts(sortCriteria) {
  const productContainer = document.querySelector('.products-container');
  const productElements = Array.from(productContainer.querySelectorAll('.products'));

  let sortedProductElements = [];

  if (sortCriteria === "Name: A to Z") {
    sortedProductElements = productElements.sort((productElement1, productElement2) => {
      const productName1 = productElement1.querySelector('.item-name').innerText.toLowerCase();
      const productName2 = productElement2.querySelector('.item-name').innerText.toLowerCase();
      return productName1.localeCompare(productName2);
    });
  } else if (sortCriteria === "Name: Z to A") {
    sortedProductElements = productElements.sort((productElement1, productElement2) => {
      const productName1 = productElement1.querySelector('.item-name').innerText.toLowerCase();
      const productName2 = productElement2.querySelector('.item-name').innerText.toLowerCase();
      return productName2.localeCompare(productName1);
    });
  } else if (sortCriteria === "Price: Low to High") {
    sortedProductElements = productElements.sort((productElement1, productElement2) => {
      const productPrice1 = parseFloat(productElement1.querySelector('.price-product').innerText);
      const productPrice2 = parseFloat(productElement2.querySelector('.price-product').innerText);
      return productPrice1 - productPrice2;
    });
  } else if (sortCriteria === "Price: High to Low") {
    sortedProductElements = productElements.sort((productElement1, productElement2) => {
      const productPrice1 = parseFloat(productElement1.querySelector('.price-product').innerText);
      const productPrice2 = parseFloat(productElement2.querySelector('.price-product').innerText);
      return productPrice2 - productPrice1;
    });
  } else {
    console.warn('Unknown sort criteria:', sortCriteria);
  }

  // Clear existing products and append sorted products
  productContainer.innerHTML = '';
  sortedProductElements.forEach(productElement => productContainer.appendChild(productElement));
}

document.querySelector('.sort-product').addEventListener('change', (event) => {
  const selectedSortCriteria = event.target.value;
  sortProducts(selectedSortCriteria);
});
