//Imports
import express from 'express';
import * as userController from '../controllers/user.controller.js';
import * as authMidle from '../middlewares/auth.middleware.js'
//Router
export const userRouter = express.Router();

//Routes

//GET
userRouter.get('/users/get-users', userController.getAllUsers);
userRouter.get('/users/get-user/:id', userController.getUserById);

//POST

//Login & Register//
userRouter.post('/register', authMidle.validateBody(["email", "password","firstName"]), userController.registerUser);
userRouter.post('/login', authMidle.validateBody(["email", "password"]), userController.loginUser);


//PUT
userRouter.put('users/update-user/:id',authMidle.validateBody(["email", "password","firstName"]), userController.editUser);

//DELETE
userRouter.delete('users/delete-user/:id', userController.deleteUser)


