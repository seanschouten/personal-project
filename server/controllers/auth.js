const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {name, password, email} = req.body
        const {session} = req
    }
}