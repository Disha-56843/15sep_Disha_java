const products = [

    {
        name: 'STONEBERG',
        description: 'Men Formal Shirt',
        price: 1.75,
        image: 'https://tinyurl.com/men-striped-formal-shirt',
        alt: 'Men_Shirt',
        category: 'Men Shirt',
        quantity_limit: 4
    },

    {
        name: 'FIBERMILL',
        description: 'Men Printed Shirt',
        price: 11.75,
        image: 'https://tinyurl.com/men-printed-casual-shirt',
        alt: 'Men_Shirt',
        category: 'Men Shirt',
        quantity_limit: 6
    },

    {
        name: 'CHEMISTRY',
        description: 'Women Casual Shirt',
        price: 12.75,
        image: 'https://tinyurl.com/women-casual-shirt',
        alt: 'Women_Shirt',
        category: 'Women Shirt',
        quantity_limit: 3
    },

    {
        name: 'TURRITOPSIS',
        description: 'Women Retro Shirts',
        price: 11.25,
        image: 'https://tinyurl.com/women-classic-retro-shirts',
        alt: 'Women_Shirt',
        category: 'Women Shirt',
        quantity_limit: 7
    },

    {
        name: 'zenesty',
        description: 'Women Casual Shirt',
        price: 13.75,
        image: 'https://tinyurl.com/women-solid-casual-shirt',
        alt: 'Women_Shirt',
        category: 'Women Shirt',
        quantity_limit: 2
    },

    {
        name: 'Spykar',
        description: 'Men Skinny Fit Jeans',
        price: 11.50,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/8/k/32-udjeno1328-u-s-polo-assn-denim-co-original-imagypf6b4g5rfe6.jpeg?q=70',
        alt: 'Men_Jeans',
        category: 'Men Jeans',
        quantity_limit: 9
    },

    {
        name: 'JACK & JONES',
        description: 'Men Skinny Fit Jeans',
        price: 10.75,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/s/o/32-fmjen2840-flying-machine-original-imagzrsja5zpajrz.jpeg?q=70',
        alt: 'Men_Jeans',
        category: 'Men Jeans',
        quantity_limit: 7
    },

    {
        name: 'TYFFYN',
        description: 'Women Black Jeans',
        price: 13.75,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/h/p/28-wd-black-2z-nucouths-original-imahfysehpazsnns.jpeg?q=70',
        alt: 'Women_Jeans',
        category: 'Women Jeans',
        quantity_limit: 10
    },

    {
        name: 'Miss Chase',
        description: 'Women Black Jeans',
        price: 16.75,
        image: 'https://rukminim2.flixcart.com/image/612/612/l12h1u80/jean/m/l/q/34-jeans-black2-4-zayla-original-imagcpy6jgjj43um.jpeg?q=70',
        alt: 'Women_Jeans',
        category: 'Women Jeans',
        quantity_limit: 4
    }
]

function showProducts() {

    const productContainer = document.querySelector('.products-container')

    products.forEach(product => {

        const productDiv = document.createElement('div')
        productDiv.className = 'products'
        productDiv.style.cursor = 'pointer'
        productDiv.setAttribute('data-category', product.category)

        const productName = document.createElement('h3')
        productName.className = 'item-name'
        productName.innerHTML = product.name

        const description = document.createElement('span')
        description.className = 'description'
        description.innerHTML = product.description

        const bottomPartOfProductContainer = document.createElement('div')
        bottomPartOfProductContainer.className = 'bottom-part-of-product'

        const doller = document.createElement('span')
        doller.className = 'doller'
        doller.innerHTML = '$'

        const price = document.createElement('span')
        price.className = 'price-product'
        price.innerHTML = product.price

        doller.appendChild(price)

        const image = document.createElement('img')
        image.src = product.image
        image.alt = product.name
        image.className = 'card-img'

        bottomPartOfProductContainer.appendChild(doller)
        bottomPartOfProductContainer.appendChild(image)

        productDiv.appendChild(productName)
        productDiv.appendChild(description)
        productDiv.appendChild(bottomPartOfProductContainer)

        productDiv.addEventListener('click', () => {
            addToCart(product)
            updateCart()
        })

        productContainer.appendChild(productDiv)

    })
}

function addToCart(product) {
    const cartItemContainer = document.querySelector('.order-container')
    const productDiv = document.querySelector('.products')

    let existingItem = null
    const children = Array.from(cartItemContainer.children)

    children.forEach(orderDiv => {
        const orderedProductName = orderDiv.querySelector('.ordered-product-name').innerText

        if (orderedProductName === product.name) {
            existingItem = orderDiv
            return
        }
    });

    if (product.quantity === undefined) {
        product.quantity = 1
    }

    if (existingItem) {
        let quantitySpan = existingItem.querySelector('.quantity')

        if (product.quantity < product.quantity_limit) {
            product.quantity++
            quantitySpan.innerHTML = product.quantity

            const price = parseFloat(product.price)
            existingItem.querySelector('.ordered-product-price').innerHTML = `$${(price * product.quantity).toFixed(2)}`
            
            // productDiv.classList.remove('js-product-out-of-stock')
            
            updateCart()
        }

        else {
            alert('Cannot add more of this product to the cart. Quantity limit reached.')
            // productDiv.classList.add('js-product-out-of-stock')
        }

    }

    else {
        const orderDiv = document.createElement('div')
        orderDiv.className = 'orders'

        const orderedProductImage = document.createElement('img')
        orderedProductImage.style.height = '60px'
        orderedProductImage.style.width = '75px'
        orderedProductImage.style.borderRadius = '5px'
        orderedProductImage.src = product.image
        orderedProductImage.alt = product.name

        const orderedProductName = document.createElement('h4')
        orderedProductName.classList.add('ordered-product-name')
        orderedProductName.innerHTML = product.name

        const orderedProductDescription = document.createElement('span')
        orderedProductDescription.classList.add('ordered-product-description')
        orderedProductDescription.style.display = 'none'
        orderedProductDescription.innerHTML = product.description

        const decrement = document.createElement('button')
        decrement.classList.add('decrement')
        decrement.innerHTML = '-'
        decrement.addEventListener('click', function () {
            if (product.quantity > 1) {
                product.quantity--
                orderDiv.querySelector('.quantity').innerHTML = product.quantity
                orderDiv.querySelector('.ordered-product-price').innerHTML = `$${(parseFloat(product.price) * product.quantity).toFixed(2)}`

                updateCart()
            } else {
                if (cartItemContainer.children.length === 1) {
                    if (confirm('Do you want to remove this item from the cart?')) {
                        orderDiv.remove()
                        updateCart()
                    }
                } else {
                    orderDiv.remove()
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
            let quantity = parseInt(orderDiv.querySelector('.quantity').innerHTML)

            const quantityLimit = products.find(p => p.name === product.name).quantity_limit
            if (product.quantity < quantityLimit) {
                product.quantity++
                orderDiv.querySelector('.quantity').innerHTML = product.quantity
                orderDiv.querySelector('.ordered-product-price').innerHTML = `$${(parseFloat(product.price) * product.quantity).toFixed(2)}`

                updateCart()
            } else {
                alert('Cannot add more of this product to the cart. Quantity limit reached.')
                
            }
        })

        const orderedProductPrice = document.createElement('span')
        orderedProductPrice.classList.add('ordered-product-price')
        orderedProductPrice.innerHTML = `$${product.price}`

        orderDiv.appendChild(orderedProductImage)
        orderDiv.appendChild(orderedProductName)
        orderDiv.appendChild(orderedProductDescription)
        orderDiv.appendChild(decrement)
        orderDiv.appendChild(quantity)
        orderDiv.appendChild(increment)
        orderDiv.appendChild(orderedProductPrice)

        cartItemContainer.appendChild(orderDiv)

    }
    updateCart()
}

function updateCart() {
    const cartItemContainer = document.querySelector('.order-container')
    let subtotal = 0;

    Array.from(cartItemContainer.children).forEach(orderDiv => {
        const priceText = orderDiv.querySelector('.ordered-product-price').innerHTML.replace('$', '')
        const price = parseFloat(priceText)
        const quantity = parseInt(orderDiv.querySelector('.quantity').innerHTML.trim())

        subtotal += price
    });

    const discount = (5 * subtotal) / 100
    const salesTax = (18 * subtotal) / 100
    const total = subtotal - discount + salesTax

    document.querySelector('.js-subtotal').innerText = `$${subtotal.toFixed(2)}`
    document.querySelector('.js-discount').innerHTML = `- $${discount.toFixed(2)}`
    document.querySelector('.js-sales-tax').innerHTML = `$${salesTax.toFixed(2)}`
    document.querySelector('.js-total-of-product').innerHTML = `$${total.toFixed(2)}`

    // updateProducts()
}


document.getElementById('clear-all-button').addEventListener('click', function () {

    const cartItemList = document.querySelector('.order-container')

    while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild)


    }
    updateCart()
})

showProducts()

function updateProducts() {
    document.querySelector('#products').innerHTML = ''
    showProducts()
    // document.querySelector('.js-update-cart').innerHTML = ''
    // addToCart()
}
