


const experience = [
    {
        company: 'Dostyq',
        period: '2025-2025',
        role: 'UI/UX Design',
        description: 'Worked as an intern in UI/UX design'
    },
    {
        company: 'Softmax',
        period: '2026-2026',
        role: 'Front-end developer / Scraping Data',
        description: 'During my internship, I worked on automated web data extraction using Puppeteer and Selenium, developing scripts to collect and process large-scale data from various web resources.'
    },
    {
        company: 'EPAM',
        period: '2025-2026',
        role: 'Front-end developer + AI',
        description: 'During my one-year internship at EPAM, I received continuous mentorship and full feedback from experienced company engineers, working on real-world projects and significantly improving my frontend development skills in a professional environment.'
    }

]

export default function Experience(){
    return(
    <div className="flex flex-col gap-[20px] p-[20px]">
        <h2 className="text-[#26C17E] font-bold text-[25px]">Experience</h2>

        <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px] mt-[20x] flex-col">
                {experience.map((item, index) => (
                <div key={index} className="flex gap-[30px]">
                    <div  className="w-auto ">
                       <div className="font-bold text-[16px]">{item.company}</div>
                       <div className="font-[400] text-[16px] w-auto whitespace-nowrap">{item.period}</div>
                    </div>
                    <div>
                       <div className="font-bold text-[16px]">{item.role}</div>
                       <div className="font-[400] text-[16px]">{item.description}</div>
                    </div>
                </div>
                ))}
                
            </div>
            
        </div> 
    </div>
    )
}