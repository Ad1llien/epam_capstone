
import background from '../icons/main.svg'
import PhotoBox from '../components/PhotoBox'
import { useNavigate } from 'react-router-dom'
export default function HomePage() {
    const navigate = useNavigate();
    return(
        <div className="relative w-full h-screen ">
            <img src={background} alt="" className='w-full h-full object-cover'/>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <div className='w-[300px]'>
                   <PhotoBox size='170px' fontSize='45px'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                   <span className='text-white font-[600] text-[25px]'>Programmer. Creative. Innovator</span>
                   <span className='text-white text-[14px] w-[500px] text-center flex items-center justify-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque </span>
                   <button onClick={() => navigate('/resume')} className='text-white  px-[10px] py-[8px] bg-[#222935] rounded-[5px]'>Know More</button>
                </div>
            
            </div>
        </div>
    )
}