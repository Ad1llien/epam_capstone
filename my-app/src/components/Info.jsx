import phoneIcon from '../icons/phone.svg'
import twitter from '../icons/twitter.svg'
import skype from '../icons/skype.svg'
import mail from '../icons/mail.svg'
import facebook from '../icons/facebook.svg'
import instagram from '../icons/instagram.svg'
import telegram from '../icons/telegram.svg'
import linkedin from '../icons/linkedin.svg'

const contacts = [
   {
       icon: phoneIcon,
       primary: '87058856886',
       href: 'tel:87058856886',
   },
   {
       icon: mail,
       primary: 'akadilzh2004kz@gmail.com',
       href: 'https://mail.google.com/mail/?view=cm&to=akadilzh2004kz@gmail.com',
   },
   {
       icon: instagram,
       primary: '@akxdil',
       secondary: 'https://www.instagram.com/akxdil',
       href: 'https://www.instagram.com/akxdil'
   },
   {
       icon: telegram,
       primary: '@akxdil',
       secondary: 'https://web.telegram.org/k/#@akxdil',
       href: 'https://web.telegram.org/k/#@akxdil'
   },
   {
       icon: linkedin,
       primary: 'Akadil Zhengissuly',
       secondary: 'https://www.linkedin.com/in/akadil-zhengissuly-08692b339/',
       href: 'https://www.linkedin.com/in/akadil-zhengissuly-08692b339/'
   },
]

export default function Info() {
   return (
       <div className="flex flex-col gap-[20px] p-[20px]">
           <h2 className="text-[#26C17E] font-bold text-[25px]">Contact</h2>
           <div className='flex flex-col gap-[20px]'>
               {contacts.map((item, index) => (
                   <a 
                       key={index}
                       href={item.href}
                       target={item.href?.startsWith('http') ? '_blank' : '_self'}
                       className='flex gap-[15px] items-center hover:opacity-70 transition-opacity'
                   >
                       <img src={item.icon} alt="" className='w-[30px] h-[30px]' />
                       <div>
                           <div className='font-[700] text-[16px]'>{item.primary}</div>
                           {item.secondary && (
                               <div className='text-[14px] text-gray-500'>{item.secondary}</div>
                           )}
                       </div>
                   </a>
               ))}
           </div>
       </div>
   )
}