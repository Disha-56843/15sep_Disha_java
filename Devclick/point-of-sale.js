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
        price: 11.50,
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
        price: 13.50,
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

    products.forEach((product) => {

        productContainer.innerHTML += `<div class="products products-${product.id}" style="cursor: pointer">
            <h3 class="item-name">${product.name}</h3>
            <span class="description">${product.description}</span>
            <div class="bottom-part-of-product">
                <span class="dollar">$<span class="price-product">${product.price}</span></span>
                <img src="${product.image}" alt="${product.name}" class="card-img">
            </div>
        </div>`

        updateProductAvailability()
    })

    products.forEach((product) => {

        document.querySelector(`.products-${product.id}`).addEventListener('click', () => {
            addToCart(product)
            updateCart()
        })

    })

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
                    productElement.style.pointerEvents = 'none'
                    productElement.style.cursor = 'not-allowed'

                    productElement.classList.add('js-product-out-of-stock')


                } else {
                    productElement.classList.remove('js-product-out-of-stock')

                    productElement.style.pointerEvents = 'auto'
                }
            }
        })
    })
}

function sortSearch(category, searchInputValue) {
    let visibleProducts = false
    const nodata = document.querySelector('.no-data')



    products.forEach((product) => {

        const productElements = document.getElementsByClassName(`products-${product.id}`)
        const productElement = productElements.length > 0 ? productElements[0] : null

        const productName = product.name
        const productPrice = product.price.toString()
        const productCategory = product.category
        const isOutOfStock = productElement.classList.contains('js-product-out-of-stock')
        const matchesCategory = category === 'all' || productCategory === category
        const matchesSearch = productName.toLowerCase().includes(searchInputValue.toLowerCase()) || productPrice.includes(searchInputValue)

        if (matchesSearch) {
            if (category === 'all') {

                productElement.style.display = 'block'
                if (isOutOfStock) {
                    productElement.style.opacity = 0.5
                    visibleProducts = true

                    return
                }
                productElement.style.opacity = 1
                visibleProducts = true
            } else {
                if (matchesCategory && !isOutOfStock) {
                    productElement.style.display = 'block'
                    productElement.style.opacity = 1
                    visibleProducts = true

                } else {
                    productElement.style.display = 'none'
                }
            }
        } else {
            productElement.style.display = 'none'
        }
    })

    nodata.style.display = visibleProducts ? 'none' : 'block'
}

function updateCategoryUI(category) {
    const categoryList = {
        all: 'All items',
        'Men Shirt': 'Men Shirt',
        'Women Shirt': 'Women Shirt',
        'Men Jeans': 'Men Jeans',
        'Women Jeans': 'Women Jeans',
    }

    document.querySelectorAll('.list-items').forEach((element) => {
        if (element.innerHTML.trim() === categoryList[category]) {
            element.classList.add('select')
        } else {
            element.classList.remove('select')
        }
    })
    const searchInputValue = document.getElementById('search-product').value
    sortSearch(category, searchInputValue)

    localStorage.setItem('selectedCategory', category)
}


function addToCart(product) {

    const existingProduct = cart.find(existingProductInCart => existingProductInCart.id === product.id)
    const purchasedProductContainer = document.querySelector(`.orders-${product.id}`)
    
    if (existingProduct && existingProduct.quantity < product.quantity_limit) {
        existingProduct.quantity++

        
        localStorage.setItem(`cartProduct-${product.id}-quantity`, existingProduct.quantity)
        // localStorage.setItem('cart', JSON.stringify(cart))
        
        updateCart()
        updateProductAvailability()
    }
    
    else {
        
        cart.push({ ...product, quantity: 1 })
        
        // const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
        // localStorage.setItem('cart', cartString)
        localStorage.setItem(`cartProduct-${product.id}-quantity`, 1)
        // localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    // const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
    // localStorage.setItem('cart', cartString)
    renderCart()
    updateCart()
    updateProductAvailability()
}

function renderCart() {

    const cartItemContainer = document.querySelector('.order-container')

    cartItemContainer.innerHTML = ''
    cart.forEach(cartProduct => {

        cartItemContainer.innerHTML +=
            `<div class="orders orders-${cartProduct.id}">
                <img src="${cartProduct.image}" alt="${cartProduct.name}" style="height: 60px; width: 75px; border-radius: 5px;" />
                <h4 class="ordered-product-name">${cartProduct.name}</h4>
                <button class="decrement">-</button>
                <span class="quantity">${cartProduct.quantity}</span>
                <button class="increment">+</button>
                <span class="ordered-product-price">$${(cartProduct.price * cartProduct.quantity).toFixed(2)}</span>
                <button class="remove-product">x</button>
            </div>`

    })

    addToCartEventHandlers()

}

function addToCartEventHandlers() {

    cart.forEach(cartProduct => {

        const purchasedProductContainer = document.querySelector(`.orders-${cartProduct.id}`)

        purchasedProductContainer.querySelector('.decrement').addEventListener('click', function () {

            if (cartProduct.quantity > 1) {
                cartProduct.quantity--

                const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
                // localStorage.setItem('cart', cartString)
                localStorage.setItem(`cartProduct-${cartProduct.id}-quantity`, cartProduct.quantity)
                // localStorage.setItem('cart', JSON.stringify(cart))
                // console.log(JSON.stringify(cart))


                
            } else {
                if (cartProduct.quantity === 1) {
                    if (confirm('Do you want to remove this item from the cart?')) {
                        cart.splice(cart.findIndex(cartItem => cartItem.id === cartProduct.id), 1)

                        purchasedProductContainer.remove()
                        // localStorage.setItem('cart', JSON.stringify(cart))
                        localStorage.removeItem(`cartProduct-${cartProduct.id}-quantity`)
                        
                        const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
                        localStorage.setItem('cart', cartString)
                        return
                    }
                    
                    return
                }
                purchasedProductContainer.remove()
            }
            renderCart()
                updateCart()
                updateProductAvailability()
        })

        purchasedProductContainer.querySelector('.increment').addEventListener('click', function () {
            const quantityLimit = cartProduct.quantity_limit

            if (cartProduct.quantity < quantityLimit) {
                cartProduct.quantity++

            } else {
                alert('Cannot add more of this product to the cart. Quantity limit reached.')
            }
            // const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
            // localStorage.setItem('cart', cartString)
            localStorage.setItem(`cartProduct-${cartProduct.id}-quantity`)
            // localStorage.setItem('cart', JSON.stringify(cart))
            renderCart()
            updateCart()
            updateProductAvailability()
        })

            })

        purchasedProductContainer.querySelector('.remove-product').addEventListener('click', function () {
            cart.splice(cart.findIndex(cartItem => cartItem.id === cartProduct.id), 1)
            localStorage.removeItem(`cartProduct-${cartProduct.id}-quantity`)
            purchasedProductContainer.remove()
            // localStorage.setItem('cart', JSON.stringify(cart))
            // const cartString = cart.map(product => `${product.id}:${product.quantity}`).join(';')
            // localStorage.setItem('cart', cartString)
            renderCart()
            updateCart()
            updateProductAvailability()

        })
    

}

function loadCart() {

    const localstorageProductKeys = Object.keys(localStorage)
    cart = []

    localstorageProductKeys.forEach(localstorageProductKey => {
        if (localstorageProductKey.startsWith('cartProduct-')) {
            const id = key.split('-')[1]
            const quantity = localStorage.getItem(`cartProduct-${id}-quantity`)


            const product = products.find(product => product.id.toString() === id)
            if (product) {

                const existingProduct = cart.find(cartItem => cartItem.id.toString() === id)
                if (existingProduct) {

                    existingProduct.quantity = quantity
                } else {

                    cart.push({ ...product, quantity })
                }
            }
        }
    })

    // const cartData = localStorage.getItem('cart')
    // cart = cartData ? JSON.parse(cartData) : []


    // const cartString = localStorage.getItem('cart')
    // cart = []

    // if (cartString) {
       
    //     const cartItems = cartString.split(';')
    //     cartItems.forEach(item => {
    //         const [id, quantity] = item.split(':')
    //         const product = products.find(product => product.id.toString() === id)
    //         if (product) {
    //             cart.push({ ...product, quantity: parseInt(quantity) })
    //         }
    //     })
    // }


    renderCart()
    updateCart()
    updateProductAvailability()
}

document.addEventListener('DOMContentLoaded', () => {

    loadCart()

})


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

document.getElementById('clear-all-button').addEventListener('click', function () {
    const cartItemList = document.querySelector('.order-container')
    if (cartItemList.children.length > 0) {
        if (confirm('Are you sure you want to clear cart')) {


            while (cartItemList.firstChild) {
                cartItemList.removeChild(cartItemList.firstChild)
                localStorage.clear()

            }
        }

    }
    else {
        alert('No item to clear')
    }
    cart = []
    updateCart()
})

showProducts()

function sortProductsByNameAndPrice(sortCriteria) {
    const productContainer = document.querySelector('.products-container')
    const productElements = Array.from(productContainer.querySelectorAll('.products'))
    const sortIconContainer = document.querySelector('.js-sort-icon')

    sortIconContainer.innerHTML = ''

    if (sortCriteria === 'select') {

        updateProducts()

    } else if (sortCriteria === 'Sort by: name') {

        sortIconContainer.innerHTML = '<button class="fa-solid fa-arrows-up-down"></button>'
        const aToZSortIcon = sortIconContainer.querySelector('.fa-arrows-up-down')

        aToZSortIcon.addEventListener('click', () => {
            
            productElements.sort((productElement1, productElement2) => {
                const productName1 = productElement1.querySelector('.item-name').innerText.toLowerCase()
                const productName2 = productElement2.querySelector('.item-name').innerText.toLowerCase()
                return productName1.localeCompare(productName2)
            })
            
                productElements.forEach(productElement => {
                    if (!productElement.classList.contains('js-product-out-of-stock')) {
                        productContainer.appendChild(productElement)
                    }
                })

            sortIconContainer.innerHTML = '<button class="fa-solid fa-arrow-up"></button>'

            const zToASortIcon = sortIconContainer.querySelector('.fa-arrow-up')

            zToASortIcon.addEventListener('click', () => {
                productElements.sort((productElement1, productElement2) => {
                    const productName1 = productElement1.querySelector('.item-name').innerText.toLowerCase()
                    const productName2 = productElement2.querySelector('.item-name').innerText.toLowerCase()
                    return productName2.localeCompare(productName1)
                })

                productElements.forEach(productElement => {
                    if (!productElement.classList.contains('js-product-out-of-stock')) {
                        productContainer.appendChild(productElement)
                    }
                })

                sortIconContainer.innerHTML = '<button class="fa-solid fa-arrow-down"></button>'

                const sortBackNormal = sortIconContainer.querySelector('.fa-arrow-down')

                sortBackNormal.addEventListener('click', () => {

                    updateProducts()

                    sortBackNormal.classList.remove('fa-solid', 'fa-arrow-down')
                    sortIconContainer.removeChild(sortBackNormal)

                    sortProductsByNameAndPrice(sortCriteria)

                })

            })
        })



    } else if (sortCriteria === 'Sort by: price') {

        sortIconContainer.innerHTML = '<button class="fa-solid fa-arrows-up-down"></button>'
        const lowToHighpriceShortIcon = sortIconContainer.querySelector('.fa-arrows-up-down')

        lowToHighpriceShortIcon.addEventListener('click', () => {

            productElements.sort((productElement1, productElement2) => {
                const productPrice1 = parseFloat(productElement1.querySelector('.price-product').innerText)
                const productPrice2 = parseFloat(productElement2.querySelector('.price-product').innerText)
                return productPrice1 - productPrice2
            })

            productElements.forEach(productElement => {
                if (!productElement.classList.contains('js-product-out-of-stock')) {
                    productContainer.appendChild(productElement)
                }
            })

            sortIconContainer.innerHTML = '<button class="fa-solid fa-arrow-up"></button>'

            const highToLowPriceShortIcon = sortIconContainer.querySelector('.fa-arrow-up')

            highToLowPriceShortIcon.addEventListener('click', () => {
                productElements.sort((productElement1, productElement2) => {
                    const productPrice1 = parseFloat(productElement1.querySelector('.price-product').innerText)
                    const productPrice2 = parseFloat(productElement2.querySelector('.price-product').innerText)
                    return productPrice2 - productPrice1
                })

                productElements.forEach(productElement => {
                    if (!productElement.classList.contains('js-product-out-of-stock')) {
                        productContainer.appendChild(productElement)
                    }
                })

                sortIconContainer.innerHTML = '<button class="fa-solid fa-arrow-down"></button>'

                const sortBackNormal = sortIconContainer.querySelector('.fa-arrow-down')

                sortBackNormal.addEventListener('click', () => {

                    updateProducts()

                    sortBackNormal.classList.remove('fa-solid', 'fa-arrow-down')
                    sortIconContainer.removeChild(sortBackNormal)

                    sortProductsByNameAndPrice(sortCriteria)

                })
            })
        })

    }


}

document.querySelector('.sort-product').addEventListener('change', (event) => {
    const selectedSortCriteria = event.target.value
    sortProductsByNameAndPrice(selectedSortCriteria)
})

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'k' || event.key === 'K')) {
        event.preventDefault()

        document.getElementById('search-product').focus()

    }
})

const retrieveSavedSearchInputValue =
    localStorage.getItem('searchProduct') || ''
const retrieveSavedCategory = localStorage.getItem('selectedCategory') || 'all'



document.getElementById('search-product').value = retrieveSavedSearchInputValue

document.getElementById('search-product').addEventListener('input', (event) => {
    const searchInputValue = event.target.value
    const selectedCategory = localStorage.getItem('selectedCategory') || 'all'
    sortSearch(selectedCategory, searchInputValue)
    localStorage.setItem('searchProduct', searchInputValue)
})

sortSearch(retrieveSavedCategory, retrieveSavedSearchInputValue)
updateCategoryUI(retrieveSavedCategory)
