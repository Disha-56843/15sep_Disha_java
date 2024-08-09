// document.addEventListener('DOMContentLoaded', () => {
//     let searchInputValue = localStorage.getItem('search-input-value') || ''

//     document.querySelector('#search-product').value = searchInputValue

//     searchProduct(searchInputValue)
// })

// document.querySelector('#search-product').addEventListener('input', (event) => {
//     const inputValue = event.target.value

//     localStorage.setItem('search-input-value', inputValue)

//     searchProduct(inputValue)
// })

function sortSearch(category, searchInputValue) {

    let visibleProducts = false
    document.querySelectorAll('.card').forEach(product => {

        // const products = document.querySelectorAll('.card')
        const productname = product.querySelector('.item-name').innerText
        const productprice = product.querySelector('.js-item-price').innerText

        const matchesCategory = category === 'all' || product.getAttribute('data-category') === category;
        const matchesSearch = productname.includes(searchInputValue) || productprice.includes(searchInputValue);

        const nodata = document.querySelector('.no-data')
        nodata.style.display = 'none'



        if (matchesCategory && matchesSearch) {

            product.style.display = 'block'
            visibleProducts = true

            return
        }
        product.style.display = 'none'

        if (!visibleProducts) {
            nodata.style.display = 'block'
        } else {
            nodata.style.display = 'none'
        }
    })
}

document.getElementById('search-product').addEventListener('input', () => {

    sortSearch()

})

// function searchProduct(searchInputValue) {
//     const products = Array.from(document.querySelector('#products').children)

//     let hasVisibleProduct = false

//     products.forEach(product => {
//         const itemName = product.querySelector('.item-name').textContent.toLowerCase()
//         const itemPrice = product.querySelector('.js-item-price').textContent.slice(1)

//         const isVisible = itemName.includes(searchInputValue.toLowerCase()) || itemPrice.includes(searchInputValue)
//         product.style.display = isVisible ? 'block' : 'none'

//         if (isVisible) {
//             hasVisibleProduct = true
//         }
//     })

//     const nodata = document.querySelector('.no-data')

//     if (!hasVisibleProduct) {
//         nodata.style.display = 'block'
//     } else {
//         nodata.style.display = 'none'
//     }
// }


function sortProducts(category) {

    const cards = Array.from(document.querySelector('#products').children)

    const list = {
        'all': 'All',
        'Men Shirt': 'Men Shirt',
        'Women Shirt': 'Women Shirt',
        'Men Jeans': 'Men Jeans',
        'Women Jeans': 'Women Jeans'
    }

    cards.forEach(card => {

        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })

    document.querySelectorAll('.list-item').forEach((el) => {
        if (el.innerHTML === list[category]) {
            el.classList.add('select')
        }
        else {
            el.classList.remove('select')
        }
    })

    localStorage.setItem('selected-Category', category)
}
const retrieveSavedCategory = localStorage.getItem('selected-Category') || 'all'
sortProducts(retrieveSavedCategory)



