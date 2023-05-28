/**
* @swagger
*   components:
*    schemas:
*      User:
*          type: object
*          properties:
*            username:
*              type: string
*              description: The username of the user
*            email:
*              type: string
*              description: The email of the user
*            password:
*              type: string
*              description: The password of the user
*
* paths:
*  /user/:
*    get:
*      description: List all users that are in the database
*      summary: List all users
*      responses:
*        200:
*          description: Succesfully received a list of all the users
*    post:
*      description: Add a user to the database 
*      summary: Create a user
*      requestBody:
*        required: true
*        summary: Add a user
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      responses:
*        200:
*          description: Succesfully added a user
* /user/{id}:
*    get:
*      description: Get a specific user from the database
*      summary: Get a user
*      responses:
*        200:
*          description: Succesfully retrieved a user
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/User'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*    put:
*      description: Update a user that's in the database
*      summary: Update a user
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
*          description: Succesfully updated a user
*    delete:
*      summary: Delete a user
*      description: Delete a specific user from the database
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
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
        const user = await userService.getUser(parseInt(req.params.id));
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.get('/:email', async (req: Request, res: Response) => {
    try{
        const user = await userService.getUserByEmail(req.params.email);
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
        const user = await userService.updateUser(parseInt(req.params.id), userInput);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const user = await userService.deleteUser(parseInt(req.params.id));
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.post('/signup', async  (req: Request, res: Response) => {
    const userInput = <User>req.body;
    if(!userInput.username || !userInput.password) {
        throw new Error('username and password are required fields');
    }
    const user = await userService.createUser(userInput);
    res.status(200).json(user);
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