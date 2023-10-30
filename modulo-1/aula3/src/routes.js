const express = require('express');
const validateRequestBody = require('./middlewares/validateReqBody');
const registerSchema = require('./schemas/registerSchema');
const registerEnrollment = require('./controllers/registro');

const route = express();

route.post('/registro', validateRequestBody(registerSchema), registerEnrollment);

module.exports = route;
