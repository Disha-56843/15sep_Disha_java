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

function Products() {

    const Product_container = document.querySelector('.products-container')

    products.forEach(product => {
        
        const productDiv = document.createElement('div')
        productDiv.className = 'products'
        productDiv.style.cursor = 'pointer'

        productDiv.setAttribute('data-category', product.category)        
        
        const topPart = document.createElement('div')
        topPart.className = 'top-part-of-product'
        
        const productName = document.createElement('h3')
        productName.className = 'item-name'
        productName.innerHTML = product.name
        
        const description = document.createElement('span')
        description.className = 'description'
        description.innerHTML = product.description
        
        topPart.appendChild(productName)
        topPart.appendChild(description)
        
        const bottomPart = document.createElement('div')
        bottomPart.className = 'bottom-part-of-product'
        
        const price = document.createElement('span')
        price.className = 'price-product'
        price.innerHTML = product.price
        
        const image = document.createElement('img')
        image.src = product.image
        image.alt = product.name
        image.className = 'product-img'
        
        bottomPart.appendChild(price)
        bottomPart.appendChild(image)
        
        productDiv.appendChild(topPart)
        productDiv.appendChild(bottomPart)

        
        Product_container.appendChild(productDiv)
    })
}

Products()


