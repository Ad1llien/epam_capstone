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
    const cards = [
        {image: p1,
        title: 'Some text',
        text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        link: '#'
    },
    {
        image: p2,
        title: 'Some text',
        text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        link: '#'
    }
    ]
    return(
        <div className="p-[20px]">
            <div className="text-[#26C17E] font-bold text-[25px]">Portfolio</div>
            <div className="flex gap-[5px] mb-[16px]">
                <div className="text-[#26C17E] cursor-pointer">All</div>
                <label>/ </label>
                <div className="text-[#26C17E] cursor-pointer">Code</div>
                <label>/ </label>
                <div className="text-[#26C17E] cursor-pointer">UI</div>
            </div>

            <div className="flex gap-[16px] flex-wrap">
                {cards.map((card, i) => (
                    <FlipCard key={i} {...card} />
                ))}
            </div>
        </div>
    )
}