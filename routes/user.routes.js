//Imports
import express from 'express';
import * as userController from '../controllers/user.controller.js';
import * as authMidle from '../middlewares/auth.middleware.js'
import * as util from '../middlewares/customs.middleware.js'
//Router
export const userRouter = express.Router();

//Routes

//GET
userRouter.get('/users/get-users', userController.getAllUsers);
userRouter.get('/users/get-user/:unique', userController.getUserById);

//POST

//Login & Register//
userRouter.post('/register', util.validateBody(["email", "password","firstName"]), userController.registerUser);
userRouter.post('/login', util.validateBody(["email", "password"]), userController.loginUser);


//PUT
userRouter.put('/users/update-user/:unique',authMidle.authenticateToken,util.validateBody(["email", "password","firstName"]), userController.editUser);

//DELETE
userRouter.delete('/users/delete-user/:unique',authMidle.authenticateToken, userController.deleteUser)


