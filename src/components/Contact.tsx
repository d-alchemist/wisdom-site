export default function Contact() {
	return (
		<div>
			<div className='bg-white' id='contact'>
				<div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-yellow-500'>
            Contact Us
						<br />
						Get Expert Advice on Your Business
            <br />
            <span className='mt-4 font-light text-lg text-blue-500 underline hover:no-underline'>Email Us: <a href='mailto:quadri@wisdomatomindustries.com'>quadri@wisdomatomindustries.com</a></span>
					</h2>
					<div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
						<a
							href='mailto:quadri@wisdomatomindustries.com'
							className='rounded-md bg-yellow-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
