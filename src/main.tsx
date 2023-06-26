import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GoogleReCaptchaProvider useRecaptchaNet scriptProps={{ async: true, defer: true, appendTo: 'body' }} reCaptchaKey={import.meta.env.VITE_CAPTCHA_KEY}>
			<Toaster />
			<App />
		</GoogleReCaptchaProvider>
	</React.StrictMode>,
);
