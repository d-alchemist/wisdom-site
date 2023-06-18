export default function Careers() {
	return (
		<div className='pb-10' id='career'>
			<div className='relative isolate z-10 mt-16 sm:mt-20' id='career'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='mx-auto flex max-w-2xl flex-col gap-16 shadow-lg bg-gray-50 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
						<img
							className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
							src='https://images.unsplash.com/photo-1526663089957-f2aa2776f572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA'
							alt='team riding boat'
						/>
						<div className='w-full flex-auto'>
							<h2 className='text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl'>
								Work with us
							</h2>
							<p className='mt-6 text-lg leading-8 text-gray-500'>
              We inspire people to take ownership, build trust, and achieve success. Join us on a mission to transform lives and enable prosperity. We are looking to hire talents in sales, marketing, product, software and hardware engineering.
							</p>
							
							<div className='mt-10 flex'>
								<a href='#' className='font-semibold leading-6 text-yellow-500 cursor-pointer'>
									Submit your Resume <span aria-hidden='true'>&rarr;</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
