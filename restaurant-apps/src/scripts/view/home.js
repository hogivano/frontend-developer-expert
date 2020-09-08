import '../components/restaurant-list.js'
import '../data/data-source.js'
import DataSource from '../data/data-source.js'

const Home = () => {
    const listCardElement = document.querySelector("restaurant-list")

    const fallbackResult = message => {
        listCardElement.renderError(message)
    }

    const renderResult = results => {
        console.log("render result", results)
        listCardElement.restaurants = results
    }

    async function getAll() {
        try {
            const data = await DataSource.getAll()
            renderResult(data)
        } catch (message) {
            console.log('catch, get all', message)
        }
    }


    getAll()
}

export default Home