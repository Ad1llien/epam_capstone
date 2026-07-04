const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    range: { type: Number, required: true, min: 0, max: 100 },
})

module.exports = mongoose.model('Skill', SkillSchema)
