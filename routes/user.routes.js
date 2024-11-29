//Imports
import express from 'express';
import * as userController from '../controllers/user.controller.js';

//Router
export const userRouter = express.Router();

//Routes

//Login & Register//

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);

//Data//

//GET
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);

//POST
userRouter.post('/', userController.addUser);

//PUT
userRouter.put('/:id', userController.editUser);

//DELETE
userRouter.delete('/:id', userController.deleteUser)


