import React from 'react';
import './Main.css';
import SignUpForm from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Landing from '../Landing/Landing';
const Main = ({
	onSignUpComplete,
	signUpComplete,
	onLoggedIn,
	loggedIn,
	fullName,
}) => {
	return (
		<main className='main'>
			<div className='main__contnet container'>
				{!signUpComplete && (
					<SignUpForm
						onLoggedIn={onLoggedIn}
						onSignUpComplete={onSignUpComplete}
					/>
				)}
				{signUpComplete && !loggedIn && <SignIn onLoggedIn={onLoggedIn} />}
				{loggedIn && <Landing fullName={fullName} />}
			</div>
		</main>
	);
};

export default Main;
