import data from './DATA.json';
class DataSource {
    static getAll() {
        return new Promise((resolve, reject) => {
            try {
                resolve(data.restaurants)
            } catch (err) {
                reject("error cannot parse data json")
            }
        })
    }
}

export default DataSource