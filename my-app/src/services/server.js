import { createServer } from 'miragejs'

const educations = [
    {
        date: '2022',
        title: 'Graduated Kazakh Turkish Lyceum High school',
        description: 'I studied at KTL (Kazakhstan Teknopark Lyceum) for 5 years, one of the best schools in Kazakhstan. The program featured advanced studies in physics, mathematics, and English, with all subjects taught entirely in English. This intensive academic environment helped me develop strong analytical thinking and a solid foundation in STEM disciplines.'
    },
    {
        date: '2025',
        title: 'Starting EPAM Frontend + AI 1 year course.',
        description: 'I completed a Frontend Development program at EPAM, where I gained hands-on experience building modern web applications with React, JavaScript, and Node.js. During my studies, I won a grant from Tech Orda — a prestigious Kazakhstani government initiative supporting talented young developers — which funded my continued education and professional growth in software engineering.'
    },
    {
        date: '2026',
        title: 'Graduating SDU University Information Systems major',
        description: 'I spent 4 years at SDU University studying Web Development with a focus on Artificial Intelligence. Throughout my degree, I gained deep knowledge in software engineering, machine learning fundamentals, and modern web technologies. The program combined theoretical foundations with practical projects, allowing me to build real-world applications that merge frontend development with AI capabilities — which became my core passion and area of expertise.'
    },
    {
        date: '2026',
        title: 'Completing EPAM course',
        description: 'I am currently completing a one-year Frontend Development course at EPAM, one of the leading global IT companies. As part of the program, I built a capstone project — a full-stack web application featuring Google OAuth authentication, a feedback system with MongoDB.'
    },
    {
        date: '2026',
        title: 'Admitting to NWPU University, China. Masters degree.',
        description: 'After graduating from SDU University, I was accepted into NPU (Northwestern Polytechnical University) in China on a full government grant to pursue a Master`s degree in Computer Science. My research focuses on Computer Vision, Large Language Models, and Multimedia Processing — cutting-edge fields that I am actively exploring and applying in my projects.'
    },
]

let skills = [
    { id: '1', name: 'HTML', range: 100 },
    { id: '2', name: 'Javascript', range: 80 },
    { id: '3', name: 'Css', range: 100 },
    { id: '4', name: 'React', range: 80 },
    { id: '5', name: 'Node.js', range: 60 },
]

export function makeServer({ environment = 'development' } = {}) {
    return createServer({
        environment,

        routes() {
            this.namespace = 'api'

            this.get('/educations', () => educations, { timing: 3000 })

            this.get('/skills', () => skills, { timing: 3000 })

            this.post('/skills', (_schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                const newSkill = { id: String(skills.length + 1), ...attrs }
                skills = [...skills, newSkill]
                return newSkill
            })
        },
    })
}
