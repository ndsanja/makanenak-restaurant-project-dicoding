import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../public/data/DATA.json'


document.addEventListener("DOMContentLoaded", () => {
    const restaurantListcontainer = document.getElementById('restaurant-list')
    const openButton = document.getElementById('open-button')
    const closeButton = document.getElementById('close-button')
    const mobileMenuList = document.getElementById('mobile-menu-list')
    const toTopButton = document.getElementById('to-top')

    restaurantListcontainer.insertAdjacentHTML('afterbegin', data.restaurants.map((item, index) =>
        `
        <div tabindex=${index + 5} class="restaurant-card">
    <img class="card-media" src="${item.pictureId}" alt="gambar ilustrasi ${item.name}" />
    <p class="card-city-label">${item.city}</p>
    <div class="card-body">
    <p class="rating">Rating: ${item.rating}</p>
    <h2 class="title">${item.name}</h2>
    <p class="description">${item.description}</p>
    </div>
    </div>
    `
    ).join(''))

    openButton.addEventListener('click', () => {
        mobileMenuList.classList.remove('hidden')
        openButton.classList.add('hidden')
    })

    closeButton.addEventListener('click', () => {
        mobileMenuList.classList.add('hidden')
        openButton.classList.remove('hidden')
    })


    toTopButton.setAttribute('tabindex', data.restaurants.length + 5)
})