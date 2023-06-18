const blogPosts = [
	{
		id: 1,
		title: 'Engineering & Manufacturing',
		imageUrl:
			'https://images.unsplash.com/photo-1676018367970-c11f6ad317ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
	{
		id: 2,
		title: 'Data and Process Automation',
		imageUrl:
			'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80',
	},
	{
		id: 3,
		title: 'Home services & Construction',
		imageUrl:
			'https://images.unsplash.com/photo-1563391017873-6e6beab67fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
	{
		id: 4,
		title: 'Logistics and Supply Chain',
		imageUrl:
			'https://images.unsplash.com/photo-1635690926948-06e5d7af93bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
];

export default function FocusIndustries() {
	return (
		<div className='bg-gray-50 py-10 pb-20'>
			<div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-8 lg:px-8' id='industries'>
				<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
					<h2 className='text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl'>
						Our Focus Industries
					</h2>
					<p className='mt-2 text-lg leading-8 text-gray-600'>
						We are focused on a number of industries to continue to grow innovation and
						expand our impacts.
					</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-4 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
						>
							<img
								src={post.imageUrl}
								alt=''
								className='absolute inset-0 -z-10 h-full w-full object-cover'
							/>
							<div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
							<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
							<h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
								<span className='absolute inset-0' />
								{post.title}
							</h3>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
