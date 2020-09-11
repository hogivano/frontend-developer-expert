class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <article class="col">
            <div class="card">
                <div class="card-img">
                    <img src="${this._restaurant.pictureId}" class="w-100" alt="restaurant ${this._restaurant.name}">
                    <div class="bottom-corner">
                        <span>${this._restaurant.ecity}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3>
                        ${this._restaurant.name}
                    </h3>
                    <div class="description">
                        <p>${this._restaurant.description}</p>
                    </div>
                    <div class="rate">
                        <img src="./images/icon/star.svg" alt="rating">
                        <span>
                            ${this._restaurant.rating}
                        </span>
                    </div>
                </div>
            </div>
        </article>
        `
    }
}

customElements.define('restaurant-item', RestaurantItem)