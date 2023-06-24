import { handleClickScroll } from "../utils/helpers";

export default function BringToBiz() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-36 py-20'>
			<div className=''>
				<div>
					<img
						src='https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
						alt='office space'
						width={700}
						className='rounded-md'
					/>
				</div>
			</div>
			<div className='my-auto gap-10'>
				<div>
					<h2 className='text-3xl text-yellow-500 mb-2 font-semibold capitalize'>
						What We Bring To Your Business
					</h2>
					<p>
						We combine our diverse industries' experience and expertise to reduce cost and
						drive growth in the businesses that we acquire by leveraging product,
						business, and technology innovation. 
					</p>
					<p className='mt-10 font-semibold'>
						Connect with Us to Get Expert Advice on How you can Sell Your Business
					</p>
					<div className='mt-10 flex gap-x-6'>
						<p
							onClick={() => handleClickScroll('contact')}
							className='rounded-md bg-yellow-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Connect with an Expert
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
