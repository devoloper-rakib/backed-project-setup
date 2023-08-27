/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { LOCALDATA_BASE } = require('../src/Config/Config');

const ConnectDB = async () => {
	try {
		await mongoose.connect(LOCALDATA_BASE);
		console.log('MongoDB connected successfully ..! [MONGODB=> project-x]');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

module.exports = ConnectDB;
