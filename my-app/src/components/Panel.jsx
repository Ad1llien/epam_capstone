import avatar from '../icons/avatar.png'
import PhotoBox from "./PhotoBox"
import NavBar from './Navigation'
import { use, useState } from 'react'
import me from '../icons/me.jpg'
import left from '../icons/arrow-right.svg'
import right from '../icons/arrow-left.svg'
import { useEffect } from 'react'
export default function Panel(){

    const [isOpen, setIsOpen] = useState(true);

    useEffect( () => {
        const handleResize = () => {
            if(window.innerWidth < 768){
                setIsOpen(false)
            }
            else{
                setIsOpen(true)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)

        return() => window.removeEventListener(`resize`, handleResize)
    }, [])



    return(
        <aside className={`h-screen bg-[#222935] transition-all duration-300 ${isOpen? `w-[280px]` : `w-[60px]`}`}>
            <div onClick={() => setIsOpen(!isOpen)} className='flex justify-end p-[10px] cursor-pointer'>
            <div className='text-white text-[20px]'>
                    {isOpen ? <img src={right} alt="" className='w-[30px] h-[30px]' /> : <img src={left} alt="" className='w-[30px] h-[30px]' />}
                </div>
            </div>

                {isOpen ? (
                   <div className="mt-[20px]">
                        <PhotoBox/>
                   </div>
                ): (
                    <div className="flex justify-center mt-[20px]">
                      <img
                        src={me}
                        className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white"
                      />
                    </div>
                )}
            <NavBar isOpen={isOpen}/>
        </aside>
    )
}