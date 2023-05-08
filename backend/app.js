const express = require('express');
const cors = require('cors');

const app = express();

const connectDB = require('./db');
const User = require('./models/User');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cors());
connectDB();

app.listen(4000, () => {
	console.log('Server started on port 4000');
});

// create account
app.post('/api/auth/signup', async (req, res) => {
	try {
		const createdUser = await User.create(req.body);
		if (createdUser) {
			res.status(201).json({
				success: true,
				message: 'User created successfully',
				user: createdUser,
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

//localhost:4000/api/auth/signin

// login account
http: app.post('/api/auth/signin', async (req, res) => {
	try {
		// console.log('am i here?');
		// res.send(Ok);
		// return;
		const users = await User.find({ email: req.body.email });

		console.log(users.length);

		if (!users.length > 0) {
			return res.status(404).json({
				success: false,
				message: 'Invalid credentials!',
			});
		}

		const foundUser = users[0];

		if (foundUser && foundUser.password === req.body.password) {
			return res.status(200).json({
				success: true,
				message: 'LOgged in successfully',
				user: foundUser,
			});
		} else {
			return res.status(400).json({
				success: false,
				message: 'Invalid Creditentials',
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e.message,
		});
	}
});
