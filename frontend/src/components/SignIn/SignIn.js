import React, { useState } from 'react';

import Button from '../small-components/Button';
import TextInput from '../small-components/TextInput';

import './SignIn.css';

const SignIn = ({ onLoggedIn }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const paylaod = {
			email,
			password,
		};

		const response = await fetch('http://localhost:4000/api/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(paylaod),
		});
		const jsonResponse = await response.json();

		if (jsonResponse.success) {
			alert('You are logged In');
			console.log(jsonResponse);
			onLoggedIn({
				success: true,
				fullName:
					jsonResponse.user.firstName + ' ' + jsonResponse.user.lastName,
			});
		} else {
			alert(jsonResponse.message);
		}
	};
	return (
		<form className='sign-up' onSubmit={handleSubmit}>
			<h2>Login</h2>
			<p>Login with the credentials you created on this website.</p>
			<div className='form-group'>
				<label>Email</label>
				<TextInput type='email' onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className='form-group'>
				<label>Password</label>
				<TextInput
					type='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className='form-actions'>
				<Button title='Submit' onClick={handleSubmit} />
			</div>
		</form>
	);
};

export default SignIn;
