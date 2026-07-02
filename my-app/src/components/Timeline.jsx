const  education = [
    {
        year: '2022',
        title: 'Graduated Kazakh Turkish Lyceum High school',
        description: 'I studied at KTL (Kazakhstan Teknopark Lyceum) for 5 years, one of the best schools in Kazakhstan. The program featured advanced studies in physics, mathematics, and English, with all subjects taught entirely in English. This intensive academic environment helped me develop strong analytical thinking and a solid foundation in STEM disciplines.'
    },
    {
        year: '2025',
        title: 'Starting EPAM Fronend + AI 1 year course.',
        description: 'I completed a Frontend Development program at EPAM, where I gained hands-on experience building modern web applications with React, JavaScript, and Node.js. During my studies, I won a grant from Tech Orda — a prestigious Kazakhstani government initiative supporting talented young developers — which funded my continued education and professional growth in software engineering.'
    },
    {
        year: '2026',
        title: 'Graduating SDU University Information Systems major',
        description: 'I spent 4 years at SDU University studying Web Development with a focus on Artificial Intelligence. Throughout my degree, I gained deep knowledge in software engineering, machine learning fundamentals, and modern web technologies. The program combined theoretical foundations with practical projects, allowing me to build real-world applications that merge frontend development with AI capabilities — which became my core passion and area of expertise.'
    },
    {
        year: '2026',
        title: 'Completing EPAM course',
        description: 'I am currently completing a one-year Frontend Development course at EPAM, one of the leading global IT companies. As part of the program, I built a capstone project — a full-stack web application featuring Google OAuth authentication, a feedback system with MongoDB.'
    },
    {
        year: '2026',
        title: 'Admitting to NWPU University, China. Masters degree.',
        description: 'After graduating from SDU University, I was accepted into NPU (Northwestern Polytechnical University) in China on a full government grant to pursue a Master`s degree in Computer Science. My research focuses on Computer Vision, Large Language Models, and Multimedia Processing — cutting-edge fields that I am actively exploring and applying in my projects.'
    },
]

const arrowStyle = {
    width: 0,
    height: 0,
    marginTop: '10px',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderRight: '10px solid #EEEEEE'
}


export default function Timeline(){
    return (
        <div className="gap-[40px] p-[20px]">
            <h2 className="text-[#26C17E] font-bold text-[25px]">Education</h2>
            <div className="ml-[20px] mr-[20px] overflow-y-auto h-[300px] flex flex-col gap-[20px] mt-[30px]">
                {education.map((item, index) => (
                    <div key={index} className="flex mt-[20px]">
                        <div className="ml-[30px] mr-[30px]">
                            <div className="font-[700] text-[16px]">{item.year}</div>
                            <div className="flex justify-center mt-[15px]">
                                <div className="w-[5px] h-[100px] bg-[#26C17E]"></div>
                            </div>
                        </div>
                        <div style={arrowStyle}></div>
                        <div className="w-[891px] h-auto bg-[#EEEEEE] p-[15px]">
                            <h2 className="font-bold text-[16px]">{item.title}</h2>
                            <div className="font-[400] text-[14px] leading-[150%]">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}