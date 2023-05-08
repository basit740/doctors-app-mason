import React, { useState } from 'react';

import Button from '../small-components/Button';
import TextInput from '../small-components/TextInput';

import './SignUp.css';

const SignUp = ({ onSignUpComplete }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const paylaod = {
			firstName,
			lastName,
			zipCode,
			email,
			password,
		};

		const response = await fetch('http://localhost:4000/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(paylaod),
		});
		const jsonResponse = await response.json();

		if (jsonResponse.success) {
			alert('Account Created Successfully!');
			onSignUpComplete(true);
		} else {
			alert('Error creating account!');
		}

		onSignUpComplete(true);
	};
	return (
		<form className='sign-up' onSubmit={handleSubmit}>
			<h2>Create Account</h2>
			<p>Create your account to use this applicaiton</p>

			<div className='form-group'>
				<label>First Name</label>
				<TextInput type='text' onChange={(e) => setFirstName(e.target.value)} />
			</div>
			<div className='form-group'>
				<label>Last Name</label>
				<TextInput type='text' onChange={(e) => setLastName(e.target.value)} />
			</div>

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
			<div className='form-group'>
				<label>Zip Code</label>
				<TextInput type='text' onChange={(e) => setZipCode(e.target.value)} />
			</div>

			<div className='form-actions'>
				<Button title='Submit' onClick={handleSubmit} />
			</div>
		</form>
	);
};

export default SignUp;
