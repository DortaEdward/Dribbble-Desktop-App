require('dotenv').config();

/**
 * @typedef EnvironmentConfiguration
 * @prop {string} PORT The port the app is running on
 */

const config = {
  ...process.env
};

module.exports = config;