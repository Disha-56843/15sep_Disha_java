const products = [

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

    const Product_container = document.querySelector('.products-container')

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

        const bottomPart = document.createElement('div')
        bottomPart.className = 'bottom-part-of-product'

        const price = document.createElement('span')
        price.className = 'price-product'
        price.innerHTML = product.price

        const image = document.createElement('img')
        image.src = product.image
        image.alt = product.name
        image.className = 'card-img'

        bottomPart.appendChild(price)
        bottomPart.appendChild(image)

        productDiv.appendChild(productName)
        productDiv.appendChild(description)
        productDiv.appendChild(bottomPart)


        Product_container.appendChild(productDiv)

        productDiv.addEventListener('click', () => addToCart(product));

    })
}

showProducts()


function addToCart(product) {
    const cartItemList = document.getElementById('cart-item');

    let existingItem = Array.from(cartItemList.children).find(function (li) {
        return li.dataset.name === product.name;
    });

    // console.log(existingItem)

    if (existingItem) {

        let quantitySpan = existingItem.querySelector('.quantity');
        let quantity = parseInt(quantitySpan.textContent.trim());
        quantity++;
        quantitySpan.textContent = quantity;

        let price = parseFloat(existingItem.dataset.price);
        existingItem.querySelector('.line-hight').textContent = '$' + (price * quantity)
    } else {

        const li = document.createElement('li');
        li.className = 'item';
        li.dataset.name = product.name;
        li.dataset.price = product.price.replace('$', '');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'order-img';

        const name = document.createElement('h4');
        name.textContent = product.name;

        const plusBtn = document.createElement('button');
        // plusBtn.className = 'btn';
        plusBtn.textContent = '+';
        plusBtn.classList.add('btn')

        const quantity = document.createElement('span');
        quantity.className = 'quantity';
        quantity.textContent = '1';
        // quantity.classList.add('line-hight');

        const minusBtn = document.createElement('button');
        // minusBtn.className = 'btn';
        minusBtn.textContent = '-';
        minusBtn.classList.add('btn')

        const price = document.createElement('h3');
        price.className = 'line-hight';
        price.textContent = product.price;

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(plusBtn);
        li.appendChild(quantity);
        li.appendChild(minusBtn);
        li.appendChild(price);

        cartItemList.appendChild(li);
    }

}


document.getElementById('clear-all-button').addEventListener('click', function () {

    const cartItemList = document.getElementById('cart-item');


    while (cartItemList.firstChild) {
        cartItemList.removeChild(cartItemList.firstChild);
    }

    // updateCartSummary();
});