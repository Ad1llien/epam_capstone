import { useState } from "react"

const initialSkills = [
    {name: 'HTML', range:100},
    {name:'Javascript', range:80},
    {name:'Css', range:100},
    {name:'React', range:80},
    {name:'Node.js', range:60}
]
const MY_EMAIL = 'akadilzh2004kz@gmail.com'

export default function Skills({user}){ 
    const [tooltip, setToolTip] = useState({visible: false, x:0 , y:0, text:''})
    const [skills, setSkills] = useState(initialSkills);
    const [skillName, setSkillName] = useState('')
    const [skillRange, setSkillRange] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    function handleMouseMove(e, skill){
        setToolTip({
            visible:true,
            x: e.clientX + 10,
            y: e.clientY +10,
            text: `${skill.name}: ${skill.range}%`,
        })
    }

    function handleMouseLeave(){
        setToolTip({visible:false, x:0 ,
            y: 0,
            text: ``})
    }

    function addSkill(){
        if(!skillName || !skillRange) return
        setSkills([...skills, {name: skillName, range:Number(skillRange)}])
        setSkillName('')
        setSkillRange('')
    }
    return(
        <div className="flex flex-col gap-[20px] p-[20px]">
            <div className="flex justify-between items-center">
               <h2 className="text-[#26C17E] font-bold text-[25px]">Skills</h2>
               {user?.email === MY_EMAIL && (
                  <button className="bg-[#222935] hover:bg-[#26C17E] text-white px-[16px] py-[8px] rounded cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Edit Skills</button>
               )}
            </div>
            
            {isOpen && user?.email === MY_EMAIL &&  (
                <div className="border border-[#26C17E] rounded p-[20px] mt-[20px] ">
                    <div className="flex items-center gap-[20px] mt-[20px] mb-[15px]">
                        <label className="w-[80px]" htmlFor="">Skill name: </label>
                        <input className="w-[270px] border border-[#667081] rounded px-[10px] py-[5px]" type="text" placeholder="Enter skill name" value={skillName} onChange={(e) => setSkillName(e.target.value)} />
                    </div>
                    <div className="flex items-center gap-[20px] mb-[15px]">
                        <label className="w-[80px]">Skill range:</label>
                        <input 
                            className="w-[270px] border border-gray-300 rounded px-[10px] py-[5px]"
                            placeholder="0 - 100"
                            value={skillRange}
                            onChange={(e) => setSkillRange(e.target.value)}
                        />
                    </div>
                    

                <button onClick={addSkill} className="bg-[#222935] text-white px-[16px] py-[8px] hover:bg-[#26C17E] rounded cursor-pointe">Add skill</button>
            </div>

            )}

            <div className="mt-[20px] flex flex-col gap-[5px]">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                        <div title={`${skill.name}: ${skill.range}%`} onMouseMove={(e) => handleMouseMove(e, skill)} onMouseLeave={handleMouseLeave}
                            className="bg-[#26C17E] text-white text-[14px] px-[10px] py-[5px]" style={{width:`${skill.range}%`}}>{skill.name} 
                            
                        </div>


                    </div>
                    
                ))}
            {tooltip.visible && (
                <div className="fixed bg-black text-white text-[12px] px-[8px] py-[4px] rounded pointer-events-none z-50" style={{ left: tooltip.x, top: tooltip.y }}>{tooltip.text}</div>
            )}
            </div>
            <div className="flex justify-between mt-[10px] text-[12px] text-gray-500 border-t border-gray-300 pt-[5px]">
            <span>Beginner</span>
            <span>Profficient</span>
            <span>Expert</span>
            <span>Master</span>
            </div>
            
        </div>
    )
}