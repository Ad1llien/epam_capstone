import avatar from '../icons/avatar.png'
import { Router } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function PhotoBox({size='100px', fontSize='16px'}){
    const navigate = useNavigate();
    return(
        <div className="flex items-center flex-col gap-3">
            <img style={{width:size, height:size}} className="border border-2 border-white  rounded-full object-cover" src={avatar} alt="" />
            <div style={{fontSize:fontSize}} className="text-[16px] font-bold flex text-center text-white">Akadil Zhengissuly</div>
        </div> 

    )
}