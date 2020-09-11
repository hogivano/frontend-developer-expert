class Appbar extends HTMLElement {
    closeMenu() {
        document.querySelector("#navbar-menu").style.opacity = "0"
        document.querySelector("#navbar-menu").style.visibility = "hidden"
    }

    showMenu() {
        document.querySelector("#navbar-menu").style.opacity = "1"
        document.querySelector("#navbar-menu").style.visibility = "visible"
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
            <style>
                nav {
                    background-color: white;
                }
                .navbar {
                    display: flex;
                    height: 64px;
                    align-items: center;
                }
                .navbar-brand {
                    font-size: 20px;
                }

                .navbar .navbar-menu {
                    margin-left: auto;
                }

                .navbar .navbar-menu ul{
                    display:flex;
                    list-style-type: none;
                }

                .navbar .navbar-menu a {
                    color: #f0735d;
                    height: 100%;
                    padding: 15px 10px;
                    text-decoration: none;
                }

                .navbar .navbar-menu a:hover {
                    color: black;
                }

                .navbar .navbar-toggle {
                    display:none;
                }
                .navbar .navbar-toggle button{
                    background-color: transparent;
                    border: none;
                    height: 44px;
                    width: 44px;
                }
                .navbar .navbar-toggle button img {
                    margin: auto;
                }

                .navbar .navbar-menu .close-menu {
                    display: none;
                }


                @media only screen and (max-width: 768px) {
                    .navbar-menu {
                        padding: 0;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        position: fixed;
                        overflow: hidden;
                        top: 0;
                        left: 0;
                        margin: 0;
                        background-color: white;
                        color: white;
                        z-index: 9;
                        visibility: hidden;
                        opacity: 0;
                        transition: visibility 0.1s, opacity 0.1s linear;
                    }

                    .navbar .navbar-menu .close-menu {
                        top: 5px;
                        right: 25px;
                        display: block;
                        position: absolute;
                        z-index: 99;
                        color: black;
                    }

                    .navbar .navbar-menu .close-menu button {
                        width: 54px;
                        height: 54px;
                        background-color: transparent;
                        border: none;
                        font-size: 44px;
                    }
    

                    .navbar-menu ul {
                        display: block !important;
                        margin: auto;
                    }
                    .navbar-menu ul li{
                        text-align: center;
                        padding: 15px;
                    }

                    .navbar-menu ul li a {
                        font-size: 30px;
                    }

                    .navbar .navbar-toggle {
                        display: block;
                        margin-left: auto;
                    }
                }
            </style>
            <nav>
                <div class="container">
                    <div class="navbar">
                        <div class="navbar-brand">
                            <b>Hunger App</b>
                        </div>
                        <div class="navbar-toggle">
                            <button id="btn-show-menu">
                                <img src="./images/icon/menu.svg" height="30" width="30" />
                            </button>
                        </div>
                        <div class="navbar-menu" id="navbar-menu">
                            <div class="close-menu">
                                <button id="btn-close-menu">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <ul>
                                <li>
                                    <a id="home" href="/" alt="home">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a id="favorite" href="#" alt="bookmark">
                                        Favorite
                                    </a>
                                </li>
                                <li>
                                    <a id="about-me" href="https://hogivano.web.id" target="_blank" alt="abput me">
                                        Tentang Kami
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>        
        `

        const btnClose = document.querySelector('#btn-close-menu')
        const btnShow = document.querySelector('#btn-show-menu')
        btnClose.addEventListener('click', this.closeMenu)
        btnShow.addEventListener('click', this.showMenu)
    }
}

customElements.define('app-bar', Appbar)