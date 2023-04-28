import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api'
import { getDiscounterPricePercentage } from '@/utils/helper'
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ product, products }) => {
	const [selectedSize, setSelectedSize] = useState()
	const [showError, setShowError] = useState(false)
	const p = product?.data?.[0]?.attributes
	const dispatch = useDispatch()
	const notify = () => {
		toast('🦄 Кроссовки в корзине!', {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			});
	};


	return (
		<div className='w-full md:py-20'>
			<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			/>
			<Wrapper>
				<div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
					{/* left column start */}
					<div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 '>
						<ProductDetailsCarousel images={p.image.data} />
					</div>
					{/* left column end */}

					{/* right column start */}
					<div className='flex-[1] py-3'>
						{/* PRODUCT TITLE */}
						<div className='text-[30px] font-semibold mb-2 leading-light'>
							{p.name}
						</div>
						{/* PRODUCT SUBTITLE */}
						<div className='text-lg font-semibold mb-5'>
							{p.subtitle}
						</div>
						{/* PRODUCT PRICE */}
						<div className="flex items-center text-black/[0.5]">
							<p className="mr-2 text-lg font-semibold">{p.price}$</p>

							{p.original_price && (
								<>
									<p className="text-base font-medium line-through">
										{p.original_price}$
									</p>
									<p className=" ml-auto text-base font-medium text-red-500">
										{getDiscounterPricePercentage(p.original_price, p.price)}%
										Скидка
									</p>
								</>
							)}
						</div>
						<div className='text-md font-medium text-black/[0.4] mb-10'>
							С учетом налогов
						</div>
						{/* PRODUCT SIZE RANGE START */}
						<div className='mb-10'>
							{/* HEADING START */}
							<div className='flex justify-between mb-2'>
								<div className='text-md font-semibold'>
									Выберите размер
								</div>
								<div className='text-md font-medium text-text-black/[0.5] cursor-pointer'>
									Другие варианты
								</div>
							</div>
							{/* HEADING END */}

							{/* SIZE START */}
							<div id='sizeGrid' className='grid grid-cols-3 gap-2'>
								{p.size.data.map((item, i) => (
									<div key={i} className={`border rounded-md text-center py-3 font-medium ${item.enabled ? 'hover:border-black cursor-pointer ease-in delay-10 duration-200' : 'cursor-not-allowed bg-black/[0.1] opacity-50'} ${selectedSize === item.size ? 'border-red-700' : ''}`} onClick={() => {
										setSelectedSize(item.size)
										setShowError(false)
									}}>
										{item.size}
									</div>
								))}

							</div>
							{/* SIZE END */}

							{/* SHOW ERROR START */}
							{showError && (<div className='text-red-600 mt-1'>
								Размер не выбран!
							</div>)}
							{/* SHOW ERROR END */}
						</div>
						{/* PRODUCT SIZE RANGE END */}

						{/* ADD TO CART BUTTON START */}
						<button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center shadow-lg shadow-black-300/50 justify-center gap-2' onClick={() => {
							if (!selectedSize) {
								setShowError(true)
								document.getElementById('sizeGrid').scrollIntoView({
									block: 'center',
									behavior: 'smooth'
								})
							} else {
								dispatch(addToCart({
									...product?.data?.[0],
									selectedSize,
									oneQuantityPrice: p.price
								}))
								notify()
								
							}

						}}>
							Добавить в корзину
							<BsCartPlus size={20} />
						</button>
						{/* ADD TO CART BUTTON END */}

						{/* LIKE BUTTON START */}
						<button className='w-full py-4 border  shadow-lg shadow-black-300/50 border-black rounded-full text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 flex items-center justify-center gap-2'>
							<AiOutlineHeart size={20} />
							Добавить в избранное
						</button>
						{/* LIKE BUTTON END */}

						<div>
							<div className='text-lg font-bold mb-5'>
								Описание товара
							</div>
							<div className='markdown text-md mb-5 font-second '>
								<ReactMarkdown>
									{p.discription}
								</ReactMarkdown>
							</div>
						</div>
					</div>
					{/* right column end */}
				</div>

				<RelatedProducts products={products} />
			</Wrapper>
		</div>
	)
}

export default ProductDetails

export async function getStaticPaths() {
	const products = await fetchDataFromApi("/api/products?populate=*");
	const paths = products?.data?.map((p) => ({
		params: {
			slug: p.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const product = await fetchDataFromApi(
		`/api/products?populate=*&filters[slug][$eq]=${slug}`
	);
	const products = await fetchDataFromApi(
		`/api/products?populate=*&[filters][slug][$ne]=${slug}`
	);

	return {
		props: {
			product,
			products,
		},
	};
}