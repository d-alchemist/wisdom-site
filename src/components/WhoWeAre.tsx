export default function WhoWeAre() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 max-w-7xl mx-auto'>
			<div className='' id='who-we-are'>
				<div>
					<img
						src='https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
						alt='office space'
						width={750}
						className='rounded-md min-h-[430px] max-h-[500px] object-cover'
					/>
				</div>
			</div>
			<div className='flex flex-col justify-between'>
				<div>
					<h2 className='text-3xl text-yellow-500 mb-2 font-semibold capitalize'>
						Who we are
					</h2>
					<p className=''>
						We are committed to enabling business transition and growth by investing in
						people and harnessing product, technology, and business innovation. We work
						with retirement-ready business owners and founder operators of established
						businesses looking to transition from day-to-day operating responsibility and
						achieve liquidity.
					</p>
				</div>
				<div className=''>
					<h2 className='text-3xl font-semibold text-yellow-500 mb-2 capitalize'>
						Our mission
					</h2>
					<p className=''>
						Our mission is to enable prosperity, joy, and personal achievement by doing 
						good and investing in people. We focus on acquiring businesses in critical 
						sectors that impact human lives.
					</p>
				</div>
			</div>
		</div>
	);
}
