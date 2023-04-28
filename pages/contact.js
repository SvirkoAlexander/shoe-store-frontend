import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const contact = () => {
	return (
		<div className="text-center max-w-[800px] mx-auto my-[20px] ">
			<div className="text-[18px] md:text-[24px] mb-5 font-semibold leading-tight">
				Контакты нашего магазина представлены ниже👇🏻
			</div>
			<div className="text-md md:text-xl">
				<ul className="">
					<li className="mb-4">Адрес: улица Примера, дом 123, город Лорем Ипсум, страна Долор Сит Амет.</li>
					<li className="mb-4">Телефон: +1 (555) 123-4567</li>
					<li className="mb-4">Электронная почта: info@mystore.com

					</li>
					<li className="mb-4 text-center max-w-[800px] mx-4 text-[12px] md:text-[15px] leading-tight">Мы открыты для ваших вопросов и предложений с понедельника по пятницу, с 9:00 до 18:00. Если у вас есть вопросы или проблемы с заказом, пожалуйста, свяжитесь с нами по телефону или отправьте нам электронное письмо. Мы постараемся ответить на ваш запрос в течение 24 часов.</li>
					<li className="mb-4 text-center max-w-[800px] mx-4 text-[12px] md:text-[15px] leading-tight">Также вы можете связаться с нами через социальные сети, перейдя по ссылкам на нашей странице в Instagram, Facebook и Twitter. Мы будем рады услышать от вас и ответить на все ваши вопросы!</li>
				</ul>
				<div className="flex gap-4 justify-center ">
          <div
            onClick={() =>
              window.open("https://vk.com/personal_trainer_minsk", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer duration-200 hover:scale-110"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://vk.com/personal_trainer_minsk"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[1.5] cursor-pointer duration-200 hover:scale-110"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer duration-200 hover:scale-110">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer duration-200 hover:scale-110">
            <FaInstagram size={20} />
          </div>
        </div>
			</div>

			<img src="/slide-2.png" className="aspect-[16/9] md:aspect-auto" />
			<div className="text-[12px] text-black cursor-pointer text-center mt-5">
				© 2023 GIFTEDVISION, Inc. All Rights Reserved
			</div>
		</div>
	)
}

export default contact