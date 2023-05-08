import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [signUpComplete, setSignUpComplete] = useState(false);
	const [fullName, setFullName] = useState('');

	const handleLoggedIn = (value) => {
		setLoggedIn(value.success);
		setFullName(value.fullName);
	};

	const handleSignUpComplete = (value) => {
		setSignUpComplete(true);
	};
	return (
		<>
			<Header />
			<Main
				onLoggedIn={handleLoggedIn}
				loggedIn={loggedIn}
				onSignUpComplete={handleSignUpComplete}
				signUpComplete={signUpComplete}
				fullName={fullName}
			/>
			<Footer />
		</>
	);
}

export default App;
