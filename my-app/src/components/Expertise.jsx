


const experience = [
    {
        company: 'Google',
        period: '2013-2014',
        role: 'Front-end developer / php programmer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil'
    },
    {
        company: 'Twitter',
        period: '2012-2013',
        role: 'Front-end developer / php programmer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil'
    }

]

export default function Experience(){
    return(
    <div className="flex flex-col gap-[20px] p-[20px]">
        <div className="text-[#26C17E] font-bold text-[25px]">Experience</div>

        <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px] mt-[20x] flex-col">
                {experience.map((item, index) => (
                <div className="flex gap-[30px]">
                    <div key={index} className="w-auto ">
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