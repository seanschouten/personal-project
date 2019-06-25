const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv/config')

const authCtrl = require('./controllers/auth')

const app = express()
app.use(express.json())

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    app.listen(SERVER_PORT, () => console.log('Serving on port', SERVER_PORT))
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.post('/auth/register', authCtrl.register)

app.post('/auth/logout', authCtrl.logout)
