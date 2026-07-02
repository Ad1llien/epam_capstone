import p1 from '../icons/card_1.png'
import p2 from '../icons/card_3.png'
import { useState } from 'react';

function FlipCard({ image, title, text, link }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className="cursor-pointer relative w-[300px] h-[200px]"
            style={{ perspective: '1000px' }}
            onClick={() => setFlipped(!flipped)} 
        >
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'  
                }}
            >
                <div
                    className="absolute w-full h-full rounded-[8px] overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>

                <div
                    className="absolute w-full h-full rounded-[8px] bg-white p-[16px] flex flex-col justify-between border border-gray-200"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="font-[700] text-[16px] text-[#26C17E]">{title}</div>
                    <div className="text-[14px] text-gray-600">{text}</div>
                    
                       <a href={link}
                        className="font-[400] text-[#26C17E] text-[14px] underline"
                        onClick={e => e.stopPropagation()}
                    >
                        View resource
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Portfolio(){
    const [active, setActive] = useState('all')

    const cards = [
        {image: p1,
        title: 'YouChef',
        text: 'Diploma project related to recipe thematics. AI calories calculation, Meal Finder, pricing, Recipes. ',
        link: 'https://youchef.kz',
        category: 'code'
    },
    
    {
        image: p2,
        title: 'eCommerce website repo',
        text: 'Repository related to eCommerce fullstack website',
        link: 'https://github.com/ponyoMe/ecommerce-fullstack.git',
        category: 'code'
    },
    {
        image: p1,
        title: 'Parsing',
        text: 'Website parsing to DB',
        link: 'https://github.com/Ad1llien/parsing-.git',
        category: 'code'
    },
    {
        image: p1,
        title: 'Epam CV',
        text: 'EPAM Capstone project',
        link: 'https://github.com/Ad1llien/epam_capstone.git',
        category: 'ui'
    },
    
    ]

    const filters = ['all', 'code', 'ui']
    const filtered = active === 'all'
    ? cards
    : cards.filter(card => card.category === active)

    return(
        <div className="p-[20px]">
        <h2 className="text-[#26C17E] font-bold text-[25px]">Portfolio</h2>

        <div className="flex gap-[5px] mb-[16px]">
            {filters.map((filter, i) => (
                <div key={filter} className="flex items-center gap-[5px]">
                    <div
                        onClick={() => setActive(filter)}
                        className="cursor-pointer capitalize"
                        style={{ color: active === filter ? '#26C17E' : '#667081' }}
                    >
                        {filter}
                    </div>
                    {i < filters.length - 1 && <label>/</label>}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[16px] pb-[10px] w-0 min-w-full  ">
                        {filtered.map((card, i) => (
                <FlipCard key={i} {...card} />
            ))}
        </div>
    </div>
    )
}