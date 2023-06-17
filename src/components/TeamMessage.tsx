import Quadri from '../assets/images/Quadri.png';

export default function TeamMessage() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 lg:px-36 py-20 bg-gray-50 =' id='team-message'>
			<div className='my-auto'>
				<div>
					<h2 className='text-3xl text-yellow-500 mb-2 font-semibold capitalize'>
						Team Message
					</h2>
					<p className='mb-4'>
						Wisdom Atom Industries' core values are creativity, collaboration, innovation,
						and principled leadership. We are committed to helping owners and their
						employees achieve success after years of hard work building and growing their
						businesses.
					</p>
					<p className=''>
						Our vision is to be a critical player that helps solve some of the global
						challenges today from climate challenges, and baby boomer's mass retirement,
						to de-globalization. We invite the best and most passionate minds to join us
						on this journey of making a positive impact on people, the community, and the world.
					</p>
					<div className='mt-4'>
						<p className='font-semibold text-lg'>Quadri Oguntade</p>
						<p className='font-semibold text-lg'>Founder & Managing Partner</p>
					</div>
				</div>
			</div>
			<div className='ml-auto'>
				<img src={Quadri} alt='office space' width={500} className='rounded-xl' />
			</div>
		</div>
	);
}
