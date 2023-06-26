import { useCallback, useRef, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactForm() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [formData, setFormData] = useState({ to_name: '', from_name: '', message: '' });

	const form = useRef<any>();

	const sendEmail = () => {
    toast.dismiss();
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAIL_PUBLIC_KEY,
			)
			.then(
				() => {
          setFormData({ to_name: '', from_name: '', message: '' })
					toast.success('Message sent successfully');
				},
				() => {
					toast.error(
						'We could not send your email at the moment. Kindly contact us with the email above.',
					);
				},
			);
	};

	const onFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleReCaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			console.log('Execute recaptcha not yet available');
			return;
		}

		const token = await executeRecaptcha('dynamicAction');
    console.log(formData)
		if (token) {
			if (!formData.to_name || !formData.from_name || !formData.message) {
				toast.error('Kindly fill all the required fields');
				return;
			}
			sendEmail();
		}
	}, [executeRecaptcha, onFormInput]);

	return (
		<div className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8' id='contact'>
			<div className='mx-auto max-w-xl lg:max-w-4xl'>
				<h2 className='text-4xl font-bold tracking-tight text-yellow-500'>Contact Us</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>
					Get Expert Advice on Your Business
				</p>
				<span className='mt-4 font-light text-lg'>
					Email Us:{' '}
					<a
						href='mailto:quadri@wisdomatomindustries.com'
						className='text-blue-500 underline hover:no-underline'
					>
						quadri@wisdomatomindustries.com
					</a>
				</span>
				<div className='mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row'>
					<form ref={form} className='lg:flex-auto'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='full_name'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Full Name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='to_name'
										onChange={(e) => onFormInput(e)}
										placeholder='eg. John Hopkins'
										id='full_name'
										required
										minLength={3}
										autoComplete='given-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Email Address
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										name='from_name'
										id='email'
										onChange={(e) => onFormInput(e)}
										placeholder='eg. johnhopkins@gmail.com'
										autoComplete='family-name'
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
										placeholder='Enter your message here...'
										name='message'
										required
										onChange={(e) => onFormInput(e)}
										rows={4}
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
        <div className='mt-10'>
          <button
            onClick={handleReCaptchaVerify}
            className='block w-full rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600'
          >
            Let&apos;s talk
          </button>
        </div>
			</div>
		</div>
	);
}
