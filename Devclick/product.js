const product = [

    {
        name: 'STONEBERG',
        description: 'Men Formal Shirt',
        price: '$1.75',
        image: 'https://tinyurl.com/men-striped-formal-shirt',
        alt: 'product1',
        category: 'Men Shirt'
    },

    {
        name: 'FIBERMILL',
        description: 'Men Printed Shirt',
        price: '$11.75',
        image: 'https://tinyurl.com/men-printed-casual-shirt',
        alt: 'product2',
        category: 'Men Shirt'
    },

    {
        name: 'CHEMISTRY',
        description: 'Women Casual Shirt',
        price: '$12.75',
        image: 'https://tinyurl.com/women-casual-shirt',
        alt: 'product3',
        category: 'Women Shirt'
    },

    {
        name: 'TURRITOPSIS',
        description: 'Women Retro Shirts',
        price: '$11.25',
        image: 'https://tinyurl.com/women-classic-retro-shirts',
        alt: 'product4',
        category: 'Women Shirt'
    },

    {
        name: 'zenesty',
        description: 'Women Casual Shirt',
        price: '$13.75',
        image: 'https://tinyurl.com/women-solid-casual-shirt',
        alt: 'product5',
        category: 'Women Shirt'
    },

    {
        name: 'Spykar',
        description: 'Men Skinny Fit Jeans',
        price: '$11.50',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/8/k/32-udjeno1328-u-s-polo-assn-denim-co-original-imagypf6b4g5rfe6.jpeg?q=70',
        alt: 'product6',
        category: 'Men Jeans'
    },

    {
        name: 'JACK & JONES',
        description: 'Men Skinny Fit Jeans',
        price: '$10.75',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/s/o/32-fmjen2840-flying-machine-original-imagzrsja5zpajrz.jpeg?q=70',
        alt: 'product7',
        category: 'Men Jeans'
    },

    {
        name: 'TYFFYN',
        description: 'Women Black Jeans',
        price: '$13.75',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/h/p/28-wd-black-2z-nucouths-original-imahfysehpazsnns.jpeg?q=70',
        alt: 'product8',
        category: 'Women Jeans'
    },

    {
        name: 'Miss Chase',
        description: 'Women Black Jeans',
        price: '$16.75',
        image: 'https://rukminim2.flixcart.com/image/612/612/l12h1u80/jean/m/l/q/34-jeans-black2-4-zayla-original-imagcpy6jgjj43um.jpeg?q=70',
        alt: 'product9',
        category: 'Women Jeans'
    }
]

function showProducts() {

    const productContainer = document.querySelector('.products-container')
    caselessContainer = document.querySelector('.pay')

    product.forEach(product => {

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

        const price = document.createElement('span')
        price.className = 'price-product'
        price.innerHTML = product.price

        const image = document.createElement('img')
        image.src = product.image
        image.alt = product.name
        image.className = 'card-img'

        bottomPartOfProductContainer.appendChild(price)
        bottomPartOfProductContainer.appendChild(image)

        productDiv.appendChild(productName)
        productDiv.appendChild(description)
        productDiv.appendChild(bottomPartOfProductContainer)


        productContainer.appendChild(productDiv)

        productDiv.addEventListener('click', () => addToCart(product))

    })
}

showProducts()


function addToCart(product) {
    const cartItemList = document.getElementById('cart-item')

    const existingItem = Array.from(cartItemList.children).some(function (li) {
        return li.dataset.name === product.name;
    });


    if (existingItem) {

        let quantitySpan = document.querySelector('.quantity');
        let quantity = parseInt(quantitySpan.textContent.trim());
        quantity++;
        quantitySpan.textContent = quantity;

        let price = parseFloat(cartItemList.dataset.price);
        document.querySelector('.line-hight').textContent = '$' + (price * quantity).toFixed(2);

        updateCart();


    }
    else {
        const li = document.createElement('li')
        li.className = 'item'
        li.dataset.name = product.name
        li.dataset.price = product.price.replace('$', '')

        const img = document.createElement('img')
        img.src = product.image
        img.alt = product.name
        img.className = 'order-img'

        const name = document.createElement('h4')
        name.innerText = product.name

        const plusButton = document.createElement('button')
        plusButton.innerText = '+'
        plusButton.classList.add('button')
        plusButton.addEventListener('click', () => {
            let quantitySpan = li.querySelector('.quantity')
            let quantity = parseInt(quantitySpan.innerText)
            if (quantity < 3) {
                quantity++
                quantitySpan.innerText = quantity

                let price = parseFloat(li.dataset.price)
                li.querySelector('.line-hight').innerText = '$' + (price * quantity).toFixed(2)
            }
            else {
                alert('You can buy only up to 3 unit(s) of this product')
            }

            updateCart()
        })

        const quantity = document.createElement('span')
        quantity.className = 'quantity'
        quantity.innerText = '1'

        const minusButton = document.createElement('button')
        minusButton.innerText = '-'
        minusButton.classList.add('button')
        minusButton.addEventListener('click', () => {
            let quantitySpan = li.querySelector('.quantity')
            let quantity = parseInt(quantitySpan.innerText.trim())
            if (quantity > 1) {
                quantity--
                quantitySpan.innerText = quantity

                let price = parseFloat(li.dataset.price)
                console.log(price)
                li.querySelector('.line-hight').innerText = '$' + (price * quantity).toFixed(2)
            }
            li.remove()

            if (cartItemList.children.length === 0 ) {
                if (window.confirm('Are you sure you want to remove this item?') === true) {

                    li.remove()

                }
            }

            updateCart()
        })

        const price = document.createElement('h3')
        price.className = 'line-hight'
        price.innerText = product.price

        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(minusButton)
        li.appendChild(quantity)
        li.appendChild(plusButton)
        li.appendChild(price)

        cartItemList.appendChild(li)
    }

    updateCart()

}

function updateCart() {
    const cartItemList = document.getElementById('cart-item')
    let subtotal = 0

    Array.from(cartItemList.children).forEach(li => {
        const price = parseFloat(li.dataset.price)
        const quantity = parseInt(li.querySelector('.quantity').innerText.trim())
        subtotal += price * quantity
    })

    const discount = (5 * subtotal) / 100
    const salesTax = (18 * subtotal) / 100
    const total = subtotal - discount + salesTax

    document.querySelector('.js-subtotal').innerText = '$' + subtotal.toFixed(2)
    document.querySelector('.total .flex:nth-child(2) h3').innerText = '- $' + discount.toFixed(2)
    document.querySelector('.total .flex:nth-child(3) h3').innerText = '$' + salesTax.toFixed(2)
    document.querySelector('.js-total-of-product').innerText = '$' + total.toFixed(2)

}

document.getElementById('clear-all-button').addEventListener('click', function () {

    const cartItemList = document.getElementById('cart-item')

    while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild)
        updateCart()

    }
})

