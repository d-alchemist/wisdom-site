import Meeting from '../assets/images/meeting.jpg';

export default function BringToBiz() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-36 py-20'>
			<div className=''>
				<div>
					<img src={Meeting} alt='office space' width={500} className='rounded-md' />
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
					<p className='mt-10 font-semibold'>Connect with Us to Get Expert Advice on How you can Sell Your Business</p>
					<div className='mt-10 flex gap-x-6'>
						<a
							href='#'
							className='rounded-md bg-yellow-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Connect with an expert
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
