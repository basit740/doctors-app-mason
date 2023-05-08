import React from 'react';
import './Landing.css';
const Landing = ({ fullName }) => {
	return (
		<div className='landing'>
			<div className='landing__content govuk-panel govuk-panel--confirmation'>
				<h1 className='govuk-panel__title'>
					Welcome Mr/Mrs. {fullName && fullName}
				</h1>
				<div className='govuk-panel__body'>
					Your account is created and you are not logged In.
					<br />
					<strong>We are happy to take on your board.</strong>
				</div>
			</div>
		</div>
	);
};

export default Landing;
