const router = require('express').Router()
const passport = require('passport')

// Кнопка "Войти через Google" — редиректит на Google
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']  // запрашиваем имя, фото и email
    })
)

// Google редиректит сюда после входа
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Успешный вход — редиректим на фронт
        res.redirect(process.env.CLIENT_URL)
    }
)

// Получить текущего юзера
router.get('/me', (req, res) => {
    if (req.user) {
        res.json(req.user)  // возвращаем данные юзера
    } else {
        res.json(null)      // не авторизован
    }
})

// Выйти
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect(process.env.CLIENT_URL)
    })
})

module.exports = router