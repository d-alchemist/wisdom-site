import OfficeSpace from '../assets/images/office-space.jpg';

export default function WhoWeAre() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-36 py-20'>
			<div className='' id='who-we-are'>
				<div>
					<img src={OfficeSpace} alt='office space' width={500} className='rounded-md' />
				</div>
			</div>
			<div className='my-auto gap-10'>
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
				<div className='my-4'>
					<h2 className='text-3xl font-semibold text-yellow-500 mb-2 capitalize'>
						Our mission
					</h2>
					<p className=''>
						We are committed to enabling business transition and growth by investing in
						people and harnessing product, technology, and business innovation. We work
						with retirement-ready business owners and founder operators of established
						businesses looking to transition from day-to-day operating responsibility and
						achieve liquidity.
					</p>
				</div>
			</div>
		</div>
	);
}
