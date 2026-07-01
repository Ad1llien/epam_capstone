
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
require('dotenv').config()
require('./middleware/auth')

const app = express()

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))


app.use(express.json())
app.use(session({
    secret:process.env.JWT_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        secure: false,   
        sameSite: 'lax'  
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', require('./routes/auth'))
app.use('/feedbacks', require('./routes/feedbacks'))
app.get('/', (req, res) => {
    res.json({ message: 'Backend работает!' })
})


mongoose.connect(process.env.MONGO_URI, {
    family: 4
})
    .then(() => {
        console.log('MongoDB подключена!')
        app.listen(process.env.PORT || 5000, () => {
            console.log('Сервер запущен на порту 5000')
        })
    })
    .catch(err => console.log('Ошибка MongoDB:', err))