/**
* @swagger
*   components:
*    schemas:
*      Task:
*          type: object
*          properties:
*            id:
*              type: integer
*              format: int64
*            title:
*              type: string
*              description: The title of the task
*            description:
*              type: string
*              description: The description of the task
*            deadline:
*              type: date
*              description: The deadline of the task
*            userId:
*              type: integer
*              format: int64
*              description: The id of the user the task belongs to
*
* paths:
*  /task/:
*    get:
*      description: List all tasks that are in the database
*      summary: List all tasks
*      responses:
*        '200':
*          description: Succesfully received a list of all the tasks
*      servers:
*        - url: http://localhost:3000
*    put:
*      description: Update a task that's in the database
*      summary: Update a task
*      responses:
*        '200':
*          description: Succesfully updated a task
*      servers:
*        - url: http://localhost:3000
*    post:
*      description: Add a task to the database 
*      summary: Add a task
*      responses:
*        '200':
*          description: Succesfully added a task
*      servers:
*        - url: http://localhost:3000
*    delete:
*      summary: Delete a task
*      description: Delete a specific task from the database
*      responses:
*        '200':
*          description: Succesfully deleted a task
* /task/{id}:
*    get:
*      description: Get a specific task from the database
*      summary: Get a task
*      responses:
*        200:
*          description: Succesfully retrieved a task
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Task'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*/

import taskService from '../service/task.service';
import express, {Request, Response} from 'express';

const taskRouter = require('express').Router();

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
        const task = await taskService.getTask({id:req.params.id});
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.post('/', async  (req: Request, res: Response) => {
    const taskInput = req.body;
    try{
        const task = await taskService.createTask(taskInput);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.put('/:id', async  (req: Request, res: Response) => {
    const taskInput = req.body;
    try{
        const task = await taskService.updateTask(taskInput);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const task = await taskService.deleteTask({String:req.params.id});
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { taskRouter };