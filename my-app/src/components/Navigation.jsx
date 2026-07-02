import profile from '../icons/Icon about.svg'
import Experience from '../icons/Experience.svg'
import eduLogo from '../icons/Education.svg'
import skills from '../icons/Skills.svg'
import contacts from '../icons/Contacts.svg'
import Portfolio from '../icons/Portfolio.svg'
import feedbacks from '../icons/Feedbacks.svg'
import {useState} from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const navItems = [
    { id: 'about',      label: 'About me',   icon: profile },
    { id: 'education',  label: 'Education',  icon: eduLogo },
    { id: 'experience', label: 'Experience', icon: Experience },
    { id: 'skills',     label: 'Skills',     icon: skills },
    { id: 'portfolio',  label: 'Portfolio',  icon: Portfolio },
    { id: 'contacts',   label: 'Contacts',   icon: contacts },
    { id: 'feedbacks',  label: 'Feedbacks',  icon: feedbacks },
]

export default function NavBar({isOpen}){

    const navigate = useNavigate();
    const [active, setActive] = useState('about');

    

    useEffect(() => {
        navItems.forEach(item => {
            const section = document.getElementById(item.id);
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        setActive(item.id)

                    }
                },
                {
                    threshold:0.4,
                    root: document.querySelector('.overflow-y-auto')
                }
            )
            observer.observe(section)
        })
    }, [])

    const handleClick =(id) => {
        setActive(id)
        const element = document.getElementById(id)
        const container = document.querySelector('.overflow-y-auto')

        if(element && container){
            const top = element.offsetTop
            container.scrollTo({top, behavior:'smooth'})
        }
    }



    return(
        <div className="flex flex-col w-full mt-[20px] mb-[20px]" >
            <div>
            {navItems.map((item) => (
                <div className='flex flex-row gap-[20px] p-[20px] items-center cursor-pointer' key={item.id} onClick={() => handleClick(item.id)}>
                    <img className='w-[14px] h-[14px]' src={item.icon} alt="" style={{filter:active === item.id ? 'invert(59%) sepia(97%) saturate(400%) hue-rotate(110deg)' : 'invert(45%) sepia(8%) saturate(500%) hue-rotate(180deg)'}}/>
                    {isOpen && (
                            <div style={{ color: active === item.id ? '#26C17E' : '#667081' }}>
                                {item.label}
                            </div>
                        )}                
                </div>
            ))}
            </div>

            {isOpen && (
                <div onClick={() => navigate('/')} className='text-white flex justify-center mt-[20px] cursor-pointer'>
                    Go Back
                </div>
            )}

            


        
        </div>
    )
}