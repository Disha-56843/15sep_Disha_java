function sortSearch(category, searchInputValue) {
    let visibleProducts = false
    const nodata = document.querySelector('.no-data')

    document.querySelectorAll('.products').forEach(product => {
        const productName = product.querySelector('.item-name').innerHTML
        const productPrice = product.querySelector('.price-product').innerHTML
        const productCategory = product.getAttribute('data-category')

        const matchesCategory = category === 'all' || productCategory === category
        const matchesSearch = productName.includes(searchInputValue) || productPrice.includes(searchInputValue)

        if (matchesCategory && matchesSearch) {
            product.style.display = 'block'
            visibleProducts = true
        } else {
            product.style.display = 'none'
        }
    })

    nodata.style.display = visibleProducts ? 'none' : 'block'
}

// sortSearch()

function updateCategoryUI(category) {
    const categoryList = {
        'all': 'All items',
        'Men Shirt': 'Men Shirt',
        'Women Shirt': 'Women Shirt',
        'Men Jeans': 'Men Jeans',
        'Women Jeans': 'Women Jeans'
    }

    document.querySelectorAll('.list-item').forEach(el => {
        if (el.innerHTML === categoryList[category]) {
            el.classList.add('select')
        } else {
            el.classList.remove('select')
        }
    })
    const searchInputValue = document.getElementById('search-product').value
    sortSearch(category, searchInputValue)

    localStorage.setItem('selectedCategory', category)
}

const retrieveSavedSearchInputValue = localStorage.getItem('searchProduct') || ''
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
