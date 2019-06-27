module.exports = {
    getCities: async (req, res) => {
        try {
            let db = req.app.get('db')
            let cities = await db.getCity()
            res.send(cities)
        } catch (error) {
            console.log('Error fetching cities', error)
            res.status(500).send(error)
        }
    }
}