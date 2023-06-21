import { CheckCircleIcon } from '@heroicons/react/20/solid';
import TableImage from '../assets/images/presentation.png';

const features = [
	{
		name: 'High Motivation to Exit by Business Owner or founder operator',
		icon: CheckCircleIcon,
	},
	{
		name: 'High Net Margins (at least 15 percent EBITDA Margin)',
		icon: CheckCircleIcon,
	},
	{
		name: 'Strong balance sheet, more cash than debt (EBITDA $500 - $5M)',
		icon: CheckCircleIcon,
	},
	{
		name: 'Leading Market Share',
		icon: CheckCircleIcon,
	},
	{
		name: 'Low capital intensity (low marginal cost)',
		icon: CheckCircleIcon,
	},
];

export default function Strategy() {
	return (
		<div className='overflow-hidden bg-white py-10 sm:py-16' id='strategy'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:ml-auto lg:pl-4 lg:pt-4'>
						<div className='lg:max-w-lg'>
							<h2 className='text-base font-semibold leading-7 text-yellow-500'>
								Features
							</h2>
							<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								Our Strategy
							</p>
							<dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
								{features.map((feature) => (
									<div key={feature.name} className='relative pl-9'>
										<dt className='inline text-gray-900'>
											<feature.icon
												className='absolute left-1 top-1 h-5 w-5 text-yellow-500'
												aria-hidden='true'
											/>
											{feature.name}
										</dt>
									</div>
								))}
							</dl>
						</div>
					</div>
					<div className='flex items-start justify-end lg:order-first'>
						<img
							src={TableImage}
							alt='Product screenshot'
							className='w-[20rem] max-w-none rounded-xl sm:w-[45rem]'
							width='auto'
							height='auto'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
