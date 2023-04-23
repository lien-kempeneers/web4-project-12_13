const taskRouter = require('express').Router();
const taskService = require('../service/task.service');
import express, {Request, Response} from 'express';

taskRouter.get('/', async (req: Request, res: Response) => {
    try{
        const task = await taskService.getAllTasks();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.get('/:id', async (req: Request, res: Response) => {
    try{
        const task = await taskService.getTaskById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.post('/', async  (req: Request, res: Response) => {
    const taskInput = req.body;
    try{
        const task = await taskService.addTask(taskInput);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.put('/:id', async  (req: Request, res: Response) => {
    const taskInput = req.body;
    try{
        const task = await taskService.updateTask(req.params.id, taskInput);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const task = await taskService.deleteTask(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { taskRouter };