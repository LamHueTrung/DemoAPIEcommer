const express = require('express');
const router = express.Router();

const CreateUserController = require('../controllers/commands/User/create');
const UpdateUserController = require('../controllers/commands/User/update');
const DeleteUserController = require('../controllers/commands/User/delete');
const GetAllUsersController = require('../controllers/queries/User/getAll');
const GetUserByIdController = require('../controllers/queries/User/getById');

// Command routes
router.post('/', CreateUserController.handle);
router.put('/:id', UpdateUserController.handle);
router.delete('/:id', DeleteUserController.handle);

// Query routes
router.get('/', GetAllUsersController.handle);
router.get('/:id', GetUserByIdController.handle);

module.exports = router;
