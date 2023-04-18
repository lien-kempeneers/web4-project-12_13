const userRouter = require('express').Router();
const userService = require('../service/user.service');
import express, {Request, Response} from 'express';

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
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.post('/', async  (req: Request, res: Response) => {
    const userInput = req.body;
    try{
        const user = await userService.addUser(userInput);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.put('/:id', async  (req: Request, res: Response) => {
    const userInput = req.body;
    try{
        const user = await userService.updateUser(req.params.id, userInput);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

userRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const user = await userService.deleteUser(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { userRouter };