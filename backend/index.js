
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
require('dotenv').config({ path: path.join(__dirname, '.env') })
require('./middleware/auth')

const app = express()

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

// Render (и большинство PaaS) кладут приложение за обратный прокси —
// без этого express-session не поймёт, что запрос пришёл по HTTPS,
// и не будет ставить secure-cookie.
app.set('trust proxy', 1)

app.use(cors({
    origin: CLIENT_URL,
    credentials:true
}))


app.use(express.json())
app.use(session({
    secret:process.env.JWT_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        // В проде фронт и бэк живут на разных доменах (Render),
        // поэтому cookie должна быть secure + sameSite: 'none',
        // иначе браузер её просто не отправит в кросс-доменном запросе.
        secure: IS_PRODUCTION,
        sameSite: IS_PRODUCTION ? 'none' : 'lax'
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', require('./routes/auth'))
app.use('/feedbacks', require('./routes/feedbacks'))
app.use('/educations', require('./routes/educations'))
app.use('/skills', require('./routes/skills'))
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