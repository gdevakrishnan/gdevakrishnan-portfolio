const express = require('express');
const { sendEmail } = require('../controller/appController');
const routers = express.Router();

routers.post("/send-email", sendEmail);

module.exports = ("appRouters", routers);