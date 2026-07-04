import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import { fetchSkills, addSkill as addSkillThunk } from "../features/skills/skillsSlice"

const MY_EMAIL = 'akadilzh2004kz@gmail.com'

export function validateSkillForm(values) {
    const errors = {}

    if (!values.name) {
        errors.name = 'Skill name is a required field'
    }

    if (values.range === '' || values.range === null || values.range === undefined) {
        errors.range = 'Skill range is a required field'
    } else if (Number.isNaN(Number(values.range))) {
        errors.range = "Skill range must be a 'number' type"
    } else if (Number(values.range) < 10) {
        errors.range = 'Skill range must be greater than or equal to 10'
    } else if (Number(values.range) > 100) {
        errors.range = 'Skill range must be less than or equal to 100'
    }

    return errors
}

export default function Skills({user}){
    const [tooltip, setToolTip] = useState({visible: false, x:0 , y:0, text:''})
    const { data: skills, status, error } = useSelector((state) => state.skills)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch])

    const formik = useFormik({
        initialValues: { name: '', range: '' },
        validate: validateSkillForm,
        validateOnMount: true,
        onSubmit: (values, { resetForm }) => {
            dispatch(addSkillThunk({ name: values.name, range: Number(values.range) }))
            resetForm()
        },
    })

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

    return(
        <section className="flex flex-col gap-[20px] p-[20px]">
            <div className="flex justify-between items-center">
               <h2 className="text-[#26C17E] font-bold text-[25px]">Skills</h2>
               {user?.email === MY_EMAIL && (
                  <button className="bg-[#222935] hover:bg-[#26C17E] text-white px-[16px] py-[8px] rounded cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Open Edit</button>
               )}
            </div>

            {isOpen && user?.email === MY_EMAIL &&  (
                <form onSubmit={formik.handleSubmit} className="border border-[#26C17E] rounded p-[20px] mt-[20px] ">
                    <div className="flex items-center gap-[20px] mt-[20px] mb-[5px]">
                        <label className="w-[80px]" htmlFor="name">Skill name: </label>
                        <input
                            id="name"
                            name="name"
                            className="w-[270px] border border-[#667081] rounded px-[10px] py-[5px] focus:outline-none focus:border-[#26C17E]"
                            type="text"
                            placeholder="Enter skill name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-[12px] mb-[10px] ml-[100px]">{formik.errors.name}</div>
                    )}
                    <div className="flex items-center gap-[20px] mb-[5px]">
                        <label className="w-[80px]" htmlFor="range">Skill range:</label>
                        <input
                            id="range"
                            name="range"
                            className="w-[270px] border border-gray-300 rounded px-[10px] py-[5px] focus:outline-none focus:border-[#26C17E]"
                            placeholder="10 - 100"
                            value={formik.values.range}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.range && formik.errors.range && (
                        <div className="text-red-500 text-[12px] mb-[10px] ml-[100px]">{formik.errors.range}</div>
                    )}

                <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="bg-[#222935] text-white px-[16px] py-[8px] hover:bg-[#26C17E] rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#222935]"
                >Add skill</button>
            </form>

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
            
        </section>
    )
}