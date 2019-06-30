module.exports = {
// get cities method
// make database available 
// make SQL call select distinct city from businesses (put this in SQL)

    getCities: async (req, res) => {
        try {
            let db = req.app.get('db')
            let cities = await db.getCities()
            res.send(cities)
        } catch (error) {
            console.log('Error fetching cities', error)
            res.status(500).send(error)
        }

    },
    
    getBusinessesByCity: async (req, res) => {
        try {
            let db = req.app.get('db')
            console.log(req.query)
            let city = req.query.city
            let businesses = await db.getBusinessByCity({city})
            res.send(businesses)
        } catch (error) {
            console.log('Error fetching city', error)
            res.status(500).send(error)
        }
    }
}