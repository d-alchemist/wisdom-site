// import nodemailer from "nodemailer"

export default function ContactForm() {

  // const sendMail = () => {
  //   const transporter = nodemailer.createTransport({
  //     port: 587,
  //     host: "smtp.sendgrid.net",
  //     auth: {
  //       user: "quadri@wisdomatomindustries.com",
  //       pass: "WAItest1234",
  //     },
  //   });
  
  //   const mailData = {
  //     from: "quadri@wisdomatomindustries.com",
  //     to: "despeakableme@gmail.com",
  //     subject: "Contact Us Form: Wisdom Atom",
  //     html: `
  //       <div>
  //         <h3>Hello from Oze Shop</h3>
  //         <p>A user with the following details contacted you:</p>
  //         <p>Full Name:</p>
  //         <p>Email:</p>
  //         <p>Phone Number:</p>
  //         <p>Message:</p>
  //       </div>
  //     `,
  //   };

  //   transporter.sendMail(mailData, (error) => {
  //     if (error) {
  //       console.log(error)
  //       return;
  //     }
  //     console.log("Success")
  //   });
  
  // }

	return (
		<div className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8' id='contact'>
			<div className='mx-auto max-w-xl lg:max-w-4xl'>
				<h2 className='text-4xl font-bold tracking-tight text-yellow-500'>
          Contact Us
				</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>
          Get Expert Advice on Your Business
				</p>
				<div className='mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row'>
					<form action='#' method='POST' className='lg:flex-auto'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										autoComplete='given-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										autoComplete='family-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='budget'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Email Address
								</label>
								<div className='mt-2.5'>
									<input
										id='budget'
										name='budget'
										type='text'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='website'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Website
								</label>
								<div className='mt-2.5'>
									<input
										type='url'
										name='website'
										id='website'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className='mt-10'>
							<button
                // onClick={sendMail}
								type='submit'
								className='block w-full rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600'
							>
								Let&apos;s talk
							</button>
						</div>
						<p className='mt-4 text-sm leading-6 text-gray-500'>
							By submitting this form, I agree to the{' '}
							<a href='#' className='font-semibold text-indigo-600'>
								privacy&nbsp;policy
							</a>
							.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
