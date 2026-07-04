import {useState, useEffect} from 'react'

import axios from 'axios'
import Skills from './Skills'
import { PRIMARY_COLOR, API_URL } from '../utils/constant'
const API = API_URL



export default function Feedbacks(){

    const [feedback, setFeedback] = useState([])
    const [user,setUser] = useState(null);
    const [text, setText] = useState('')

    useEffect(() => {
        axios.get(`${API}/auth/me`, {withCredentials: true})
        .then(res => setUser(res.data))
        .catch(() => setUser(null))


        axios.get(`${API}/feedbacks`, {withCredentials: true})
.then(res => setFeedback(res.data))
.catch(setFeedback([]))
    }, [])

    const handleSubmit = async() => {
        if(!text.trim()) return;
        try{
            const res = await axios.post(
                `${API}/feedbacks`,
                {text},
                {withCredentials: true}
            )
            setFeedback([res.data, ...feedback])
            setText('')

        }

        catch(err){
            alert('Войди через Google чтобы оставить комментарий!')
        }
    }


    const handleDelete = async(id) => {
        try{
            await axios.delete(`${API}/feedbacks/${id}`, {withCredentials:true})
            setFeedback(feedback.filter(f => f._id !== id))

        }
        catch(err){
             alert('Ошибка удаления')
        }
    }


    

    return(
        <div className=" p-[30px]">
            <h2 style={{ color: PRIMARY_COLOR }} className=" font-bold text-[25px]">Feedbacks</h2>

            <div className='flex flex-col gap-[20px] mb-[30px] mt-[20px]'>

                {feedback.map(f=>(
                    <blockquote key={f._id} className=''>
                        <div className='bg-gray-100 rounded-[8px] p-[16px] text-[14px] text-gray-700'>
                           {f.text}
                        </div>
                        
                        <div className='flex items-center mt-[10px] gap-[10px]'>
                          <img src={f.author?.photo} alt={f.author?.name} className="w-[40px] h-[40px] rounded-full object-cover"/>
                          <span className='text-[14px] font-[400]'>{f.author?.name},</span>
                          <span style={{ color: PRIMARY_COLOR }} className='text-[14px]'>{f.author?.email}</span>
                        </div>
                        {user && user._id === f.author?._id && (
                            <button onClick={() => handleDelete(f._id)} className='ml-auto text-red-400 text-12px hover:text-red-600'>Delete</button>

                        )}
                    </blockquote>

                ))}
            </div>

            {user ? (
                <cite className='flex flex-col gap-[10px] '>
                    <div className='flex items-center gap-[10px] mb-[8px]'>
                        <img src={user.photo} alt="" className='w-[32px] h-[32px] rounded-full' />
                        <span className='text-[12px] font-[400] '>
                            {`${user.name},`},
                        </span>
                        <a href={`${API}/auth/logout`} className='ml-auto text-[12px] text-gray-400 hover:text-gray-600'>
                            Logout
                        </a>
                    </div>
                    <textarea value={text} onChange={ (e) => setText(e.target.value)} placeholder='Write a feedback' name="" id="" cols="30" rows="10" className='border border-gray-200 rounded-[8px] p-[12px] text-[14px] resize-none h-[100px]'></textarea>
                    <button style={{ color: PRIMARY_COLOR }} onClick={handleSubmit} className='text-white rounded-[8px] py-[10px] text-[14px]'>Отправить</button>
                </cite>
            ):(
                <div className='flex flex-col items-center gap-[16px] p-[32px] border border-gray-200 rounded-[16px] bg-white'>
        <div className='text-[18px] font-[600] text-gray-800'>
            Leave a feedback
        </div>
        <div className='text-[14px] text-gray-400 text-center'>
            Sign in with your Google account to leave a comment
        </div>
        <a
            href={`${API}/auth/google`}
            className='flex items-center gap-[12px] px-[24px] py-[12px] border border-gray-200 rounded-[8px] bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer'
        >
            <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <span className='text-[15px] font-[500] text-gray-700'>
                Continue with Google
            </span>
        </a>
    </div>
)}
</div>
    )
}