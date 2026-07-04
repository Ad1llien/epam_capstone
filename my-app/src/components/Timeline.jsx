import { useSelector, useDispatch } from 'react-redux'
import { fetchEducations } from '../features/education/educationSlice'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'


const arrowStyle = {
    width: 0,
    height: 0,
    marginTop: '10px',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderRight: '10px solid #EEEEEE'
}


export default function Timeline(){
    const dispatch = useDispatch();
    const {data, status, error} = useSelector((state) => state.education)
    useEffect(() => {
        dispatch(fetchEducations())
    }, [dispatch])

    return (
        <section className="gap-[40px] p-[20px]">
            <h2 className="text-[#26C17E] font-bold text-[25px]">Education</h2>
            <div className="ml-[20px] mr-[20px] overflow-y-auto h-[300px] flex flex-col gap-[20px] mt-[30px]">
                {status === 'loading' && (
                    <div className='loading-overlay flex justify-center items-center w-full h-full'>
                        <FontAwesomeIcon className='icon' icon={faSyncAlt} spin/>
                    </div>
                )}

                {status === 'failed' && (
                    <div className="error-message flex justify-center items-center w-full h-full text-center">
                        Something went wrong; please review your server connection!
                    </div>
                )}

                {status === 'succeeded' && data.map((item) => (
                    <article key={item.date + item.title} className="flex mt-[20px]">
                        <div className="ml-[30px] mr-[30px]">
                            <div className="font-[700] text-[16px]">{item.date}</div>
                            <div className="flex justify-center mt-[15px]">
                                <div className="w-[5px] h-[100px] bg-[#26C17E]"></div>
                            </div>
                        </div>
                        <div style={arrowStyle}></div>
                        <div className="w-[891px] h-auto bg-[#EEEEEE] p-[15px]">
                            <h2 className="font-bold text-[16px]">{item.title}</h2>
                            <div className="font-[400] text-[14px] leading-[150%]">{item.description}</div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}