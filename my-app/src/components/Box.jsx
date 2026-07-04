
import { PRIMARY_COLOR } from "../utils/constant"


export default function Box(){
    return(
        <section className="p-[20px]">
            <h2 style={{ color: PRIMARY_COLOR }} className="font-[700] text-[25px]">About me</h2>
            <p className="font-[400] text-[14px] text-[#222935] mt-[20px]">
            Меня зовут Ақәділ Жеңісұлы, я фронтенд разработчик из Казахстана.
Специализируюсь на создании современных веб-приложений с использованием 
React, JavaScript и Node.js. Увлекаюсь чистым кодом, красивым UI и 
постоянно развиваюсь в сфере AI-интеграций.

Сейчас обучаюсь в EPAM и работаю над проектами которые объединяют 
фронтенд разработку с машинным обучением.

Открыт к новым возможностям и интересным проектам. Экспериментирую с LLM, Computer Vision.           
            </p>
        </section>
    )
}