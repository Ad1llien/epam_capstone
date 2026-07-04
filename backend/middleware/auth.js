const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

// Сериализация — сохраняем ID юзера в сессию
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// Десериализация — достаём юзера из БД по ID из сессии
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)
        done(null, user)
    } catch (err) {
        done(err, null)
    }
})

// Стратегия Google
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Ищем юзера в БД
        let user = await User.findOne({ googleId: profile.id })

        if (user) {
            // Юзер уже есть — возвращаем его
            return done(null, user)
        }

        // Юзера нет — создаём нового
        user = await User.create({
            googleId: profile.id,
            name:     profile.displayName,
            email:    profile.emails[0].value,
            photo:    profile.photos[0].value
        })

        return done(null, user)

    } catch (err) {
        return done(err, null)
    }
}))