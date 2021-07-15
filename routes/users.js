import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {getUser,getUsers,createUser,deleteUser,updateUser} from '../controllers/users.js';
const router = express.Router();

//all routes in here starts with /users

//#1- Get request to show up all the users
router.get('/', getUsers);

//#2- Post request to create a new user
router.post('/', createUser);

//#3 - Get request to get user with a particular id
router.get('/:id', getUser);

//#4 - Delete request to delete user with a particular id
router.delete('/:id', deleteUser);

//#4 - Patch request to update user with a particular id
router.patch('/:id', updateUser);

export default router;