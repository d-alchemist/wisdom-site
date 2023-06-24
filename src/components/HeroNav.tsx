import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { handleClickScroll } from '../utils/helpers';
import WisdomLogo from '../assets/images/wisdom-logo.png';
import HeroVideo from '../assets/videos/hero.mp4';

export const navigation = [
	{ name: 'Home', href: 'home' },
	{ name: 'About', href: 'who-we-are' },
	{ name: 'Strategy', href: 'strategy' },
	{ name: 'Industries', href: 'industries' },
	{ name: 'Career', href: 'career' },
	{ name: 'Contact', href: 'contact' },
];

export default function HeroNav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='bg-gray-900' id='home'>
			<header className='absolute inset-x-0 top-0 z-50'>
				<nav
					className='flex items-center justify-between p-6 lg:px-8'
					aria-label='Global'
				>
					<div className='flex lg:flex-1'>
						<a href='#' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Wisdom Atom</span>
							<img className='h-10 w-auto' src={WisdomLogo} alt='Wisdom Atom Logo' />
						</a>
					</div>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='hidden lg:flex lg:gap-x-12'>
						{navigation.map((item) => (
							<p
								key={item.name}
								onClick={() => handleClickScroll(item.href)}
								className='text-sm font-semibold leading-6 text-white cursor-pointer'
							>
								{item.name}
							</p>
						))}
					</div>
				</nav>
				<Dialog
					as='div'
					className='lg:hidden'
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className='fixed inset-0 z-50' />
					<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
						<div className='flex items-center justify-between'>
							<a href='#' className='-m-1.5 p-1.5'>
								<span className='sr-only'>Your Company</span>
								<img
									className='h-8 w-auto'
									src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
									alt=''
								/>
							</a>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-400'
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon className='h-6 w-6' aria-hidden='true' />
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/25'>
								<div className='space-y-2 py-6'>
									{navigation.map((item) => (
										<p
											key={item.name}
											onClick={() => handleClickScroll(item.href)}
											className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800'
										>
											{item.name}
										</p>
									))}
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className='relative isolate overflow-hidden pt-14'>
				<video autoPlay muted loop className='absolute -z-20 w-full top-0 hidden md:block'>
					<source src={HeroVideo} type="video/mp4" />
					<img
					src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
					alt='background image'
					className='absolute inset-0 -z-10 h-full w-full object-cover'
				/>
				</video>
				<div className='bg-black opacity-60 h-full w-full absolute -z-10 top-0 hidden md:block'></div>
				<img
					src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
					alt='background image'
					className='absolute inset-0 -z-10 h-full w-full object-cover md:hidden'
				/>
				<div
					className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
					aria-hidden='true'
				>
					<div
						className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-40'>
					<div className='text-center text-black'>
						<h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
							We Sustain Business Longevity and Legacy by Investing in People
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							We are the Trusted Partner as you Transition or Grow your Business
						</p>
						<div className='border rounded-2xl border-slate-400 px-4 mt-10 inline-block'>
              <div className='hidden sm:flex sm:justify-center'>
                <div className='relative rounded-full p-3 text-xl leading-6 text-gray-300 whitespace-nowrap'>
                  <p className='mb-3 text-3xl font-bold'>What We Are Looking For:</p>
									<p>Family Owned or Privately Held Business with Strong History of Profitability</p>
                </div>
              </div>
            </div>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<p
								onClick={() => handleClickScroll("who-we-are")}
								className='rounded-md bg-yellow-500 px-5 py-3.5 text-sm font-semibold cursor-pointer text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Learn More
							</p>
						</div>
            
					</div>
				</div>
				<div
					className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
					aria-hidden='true'
				>
					<div
						className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
