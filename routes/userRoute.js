const express = require('express');
const { addUser, getUserById, deleteUser, getUsers } = require('../controller/userController');
const router = express.Router();


// *********************************post route****************************************

router.post('/add', addUser)
router.get('/get', getUsers)
router.post('/get-by-id', getUserById)
router.post('/delete', deleteUser)

module.exports = router;