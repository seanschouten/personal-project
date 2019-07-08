const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv/config')

const authCtrl = require('./controllers/auth')
const cityCtrl = require('./controllers/cityCtrl')
const businessCtrl = require('./controllers/businessCtrl')

const app = express()
app.use(express.json())

app.use( express.static( `${__dirname}/../build` ) );

// CODE THIS OUT ONCE APP IS BUILT 
app.use((req, res, next) => {
    const {email, password} = req.body
    if(!email && !password){
        req.body.email = 'sean@sean.com'
        req.body.password = 'password'
    }
    next()
})

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
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.post('/auth/createBusiness', businessCtrl.create)

app.get('/auth/currentUser', authCtrl.currentUser)
app.get('/api/user/businesses', businessCtrl.read)
app.get('/api/about')
app.get('/api/city', cityCtrl.getBusinessesByCity)
app.get('/api/cities', cityCtrl.getCities)

app.delete('/api/user/delete/:id', businessCtrl.delete)

app.put('/api/user/update/:id', businessCtrl.update)