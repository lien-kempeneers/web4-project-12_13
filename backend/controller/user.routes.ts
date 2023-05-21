/**
* @swagger
* paths:
*  /user/:
*    get:
*      description: List all users that are in the database
*      summary: List all users
*      responses:
*        '200':
*          description: Succesfully received a list of all the users
*      servers:
*        - url: http://localhost:3000/
*    put:
*      description: Update a user that's in the database
*      summary: Update a user
*      responses:
*        '200':
*          description: Succesfully updated a user
*      servers:
*        - url: http://localhost:3000/
*    post:
*      description: Add a user to the database 
*      summary: Add a user
*      responses:
*        '200':
*          description: Succesfully added a user
*      servers:
*        - url: http://localhost:3000/
*    delete:
*      summary: Delete a user
*      description: Delete a specific user from the database
*      responses:
*        '200':
*          description: Succesfully deleted a user
*/

import { User } from '@prisma/client';
import userService from '../service/user.service';
import express, {Request, Response} from 'express';

const userRouter = require('express').Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try{
        const user = await userService.getAllUsers();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
    try{
        const user = await userService.getUser({id:req.params.id});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.post('/', async  (req: Request, res: Response) => {
    const userInput = req.body;
    try{
        const user = await userService.createUser(userInput);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.put('/:id', async  (req: Request, res: Response) => {
    const userInput = req.body;
    try{
        const user = await userService.updateUser( userInput);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const user = await userService.deleteUser({String:req.params.id});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.post('/login', async  (req: Request, res: Response) => {
    try{
        const userInput: User = req.body;
        const token = await userService.authenticate(userInput);
        res.status(200).json({message: 'authentication successful', token});
    } catch (error) {
        res.status(401).json({status: 'unauthorized', message: error.message});
    }
});

export { userRouter };