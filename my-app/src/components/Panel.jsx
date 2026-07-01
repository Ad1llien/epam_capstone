import avatar from '../icons/avatar.png'
import PhotoBox from "./PhotoBox"
import NavBar from './Navigation'
import { use, useState } from 'react'


export default function Panel(){
    const [isOpen, setIsOpen] = useState(true);
    return(
        <aside className={`h-screen bg-[#222935] transition-all duration-300 ${isOpen? `w-[280px]` : `w-[60px]`}`}>
            <div onClick={() => setIsOpen(!isOpen)} className='flex justify-end p-[10px] cursor-pointer'>
            <div className='text-white text-[20px]'>
                    {isOpen ? '←' : '→'}
                </div>
            </div>

                {isOpen ? (
                   <div className="mt-[20px]">
                        <PhotoBox/>
                   </div>
                ): (
                    <div className="flex justify-center mt-[20px]">
                      <img
                        src={avatar}
                        className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white"
                      />
    </div>
                )}
            <NavBar isOpen={isOpen}/>
        </aside>
    )
}