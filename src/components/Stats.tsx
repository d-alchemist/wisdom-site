const stats = [
	{ id: 1, name: 'EBITDA MARGIN', value: '10%+' },
	{ id: 2, name: 'EBITDA', value: '$1 - $10M' },
	{ id: 3, name: 'REVENUE (ARR)', value: '$5 - $100M' },
	{ id: 4, name: 'POSITIVE CASH FLOW', value: '3YR+' },
];

export default function Stats() {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:max-w-none'>
					<dl className='-mt-16 grid grid-cols-1 overflow-hidden rounded-2xl shadow-md text-center sm:grid-cols-2 lg:grid-cols-4 relative z-20'>
						{stats.map((stat) => (
							<div
								key={stat.id}
								className='flex flex-col bg-white p-8 first:border-none lg:border-l border-gray-400'
							>
								<dt className='text-sm font-semibold leading-6 mt-2 text-gray-600'>
									{stat.name}
								</dt>
								<dd className='order-first text-3xl font-semibold tracking-tight text-yellow-400'>
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
