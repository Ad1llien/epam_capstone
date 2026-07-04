const router = require('express').Router()
const Skill = require('../models/Skill')

const DEFAULT_SKILLS = [
    { name: 'HTML', range: 100 },
    { name: 'Javascript', range: 80 },
    { name: 'Css', range: 100 },
    { name: 'React', range: 80 },
    { name: 'Node.js', range: 60 },
]

router.get('/', async (req, res) => {
    try {
        let skills = await Skill.find()
        if (skills.length === 0) {
            skills = await Skill.insertMany(DEFAULT_SKILLS)
        }
        res.json(skills)
    } catch (err) {
        res.status(500).json({ message: 'Ошибка сервера' })
    }
})

router.post('/', async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Войди через Google чтобы добавить скилл' })
    }

    const { name, range } = req.body
    if (!name || typeof range !== 'number' || range < 0 || range > 100) {
        return res.status(400).json({ message: 'Некорректные данные скилла' })
    }

    try {
        const skill = await Skill.create({ name, range })
        res.json(skill)
    } catch (err) {
        res.status(500).json({ message: 'Ошибка сервера' })
    }
})

module.exports = router
