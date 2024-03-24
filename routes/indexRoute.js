const express = require('express');
const { isAuthenticated } = require('../config/middleware');
const { protect, postRes, home } = require('../controller/indexController');
const router = express.Router();

router.get('/', home )

// *******************************protected route*************************************

router.get('/protect', isAuthenticated, protect)


// *********************************post route****************************************

router.post('/auth/login', postRes)

module.exports = router;