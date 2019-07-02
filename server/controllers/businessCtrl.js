module.exports = {
    create: async(req, res) => {
        try {
            let db = req.app.get('db')
            let {name, city, address} = req.body
        } catch (error) {
            console.log('Error creating business', error)
            res.status(500).send(error)
        }
    }
}