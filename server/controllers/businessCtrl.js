module.exports = {
    create: async(req, res) => {
        try {
            const db = req.app.get('db')
            const {name, city, address} = req.body

            let response = await db.createBusiness({name, city, address, user_id:req.session.user.user_id})
            let newBusiness = response[0]

            req.session.business = newBusiness
            res.send(req.session.business)

        } catch (error) {
            console.log('Error creating business', error)
            res.status(500).send(error)
        }
    },

    read: async(req, res) =>{
        try {
            const db = req.app.get('db')
            let businesses = await db.getBusinessById({owner_id:req.session.user.user_id})
            res.send(businesses)
        } catch (error) {
            console.log('Error retrieving your businesses', error)
            res.status(500).send(error)
        }
    }
}