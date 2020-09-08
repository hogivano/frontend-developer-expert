class AppCopyright extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
            <div class="container">
                <p class="text-center text-white">
                 Copyright © 2020 - Hunger Apps
                </p>
            </div>
        `
    }
}

customElements.define('app-copyright', AppCopyright)