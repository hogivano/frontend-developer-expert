class DataSource {
    static getAll() {
        return new Promise((resolve, reject) => {
            try {
                const result = require('./DATA.json')
                resolve(result.restaurants)
            } catch (err) {
                reject("error cannot parse data json")
            }
        })
    }
}

export default DataSource