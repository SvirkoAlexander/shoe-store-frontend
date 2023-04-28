import Image from "next/image"

const about = () => {
	return (
		<div className="text-center max-w-[800px] mx-auto my-[20px] ">
			<div className="text-[24px] md:text-[29px] mb-5 font-semibold leading-tight">
				Почему стоит выбрать нас!
			</div>
			<div className="text-md md:text-xl">
				Найк (Nike) – это мировой лидер в производстве спортивной обуви и аксессуаров. Магазин кроссовок Nike предлагает широкий ассортимент моделей для любителей спорта и тех, кто просто ценит качество и комфорт.
			</div>
			<ul className='text-[15px] md:text-[14px] mb-5 font-semibold leading-tight '>
				<li className='p-6 text-left mt-4'>Кроссовки Nike известны своей инновационной технологией, которая позволяет достичь наилучшей производительности на площадке. В зависимости от ваших потребностей, магазин Nike предлагает различные типы кроссовок, такие как беговые, баскетбольные, теннисные и футбольные кроссовки. Все они разработаны с использованием передовых технологий, таких как Flyknit конструкция, React пена и воздушная амортизация Nike Air.</li>
				<li className='p-6 text-left'>Найк также предлагает широкий выбор моделей для повседневного использования, которые пользуются популярностью во всем мире благодаря своей стильности и комфорту. Некоторые из наиболее популярных моделей кроссовок Nike в этой категории включают Air Max, Air Force 1, и Cortez.</li>
			</ul>
			<img src="/slide-3.png" className="aspect-[16/9] md:aspect-auto" />
			<div className="text-[12px] text-black cursor-pointer text-center mt-5">
          © 2023 GIFTEDVISION, Inc. All Rights Reserved
        </div>
		</div>
	)
}

export default about