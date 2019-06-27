const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('Register hit', req.body)
        try {
            const db = req.app.get('db')
            const {name, password, email} = req.body
            // const {session} = req

            let users = db.auth.findUserByEmail(email)
            let user = users[0]

            if(user) {
                return res.status(409).send('Email already registered')
            } 

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.auth.addUser({name, email, hash})
            let newUser = response[0]

            delete newUser.password

            req.session.user = newUser
            res.send(req.session.user)

        } catch(error) {
            console.log('There was an error', error)
            res.status(500).send(error)
        }
    },

    login: async(req, res) => {
        try {
            const db = req.app.get('db')
            const {email, password} = req.body

            let users = await db.auth.findUserByEmail(email)
            let user = users[0]

            if(!user) {
                return res.status(401).send('Email or password incorrect')
            }

            let isAuthenticated = bcrypt.compareSync(password, user.password)

            if(!isAuthenticated) {
                return res.status(401).send('Email or password incorrect')
            }

            delete user.password
            req.session.user = user
            res.send(req.session.user)

        } catch (error) {
            console.log('There was an error', error)
            res.status(500).send(error)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200).send('Logged Out')
    },

    currentuser: (req, res) => {
        res.send(req.session.user)
    }
}