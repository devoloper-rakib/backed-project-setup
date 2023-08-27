/* eslint-disable no-undef */
const dotenv = require("dotenv");
const path = require("path");

// dotenv.config({ path: path.join(__dirname, '../../.env') });

dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  LOCALDATA_BASE: process.env.LOCALDATA_BASE,
};
