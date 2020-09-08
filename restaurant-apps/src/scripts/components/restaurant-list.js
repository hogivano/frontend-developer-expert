import './restaurant-item.js'

class RestaurantList extends HTMLElement {
    constructor() {
        super()
        this._restaurants = []
    }

    set restaurants(restaurants) {
        this._restaurants = restaurants
        this.render()
    }

    renderError(message) {
        this.innerHTML = 'Error boss'
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = ``
        this._restaurants.forEach(restaurant => {
            const restaurantItemElement = document.createElement("restaurant-item")
            console.log(restaurant.pictureId)
            restaurantItemElement.restaurant = restaurant
            this.appendChild(restaurantItemElement)
        })

        document.querySelector('restaurant-list').classList.add('grid-wrapper')
    }
}

customElements.define('restaurant-list', RestaurantList)