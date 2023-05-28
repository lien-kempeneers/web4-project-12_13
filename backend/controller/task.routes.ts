/**
* @swagger
*   components:
*    schemas:
*      Task:
*          type: object
*          properties:
*            title:
*              type: string
*              description: The title of the task
*            description:
*              type: string
*              description: The description of the task
*            deadline:
*              type: string
*              format: date-time
*              description: The deadline of the task
*            userId:
*              type: integer
*              description: The userId of the user that created the task
*
* paths:
*  /task/:
*    get:
*      description: List all tasks that are in the database
*      summary: List all tasks
*      tags:
*       - tasks
*      responses:
*        200:
*          description: Succesfully received a list of all the tasks
*    post:
*      description: Add a task to the database 
*      summary: Create a task
*      tags:
*       - tasks
*      requestBody:
*        required: true
*        summary: Add a task
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Task'
*      responses:
*        200:
*          description: Succesfully added a task
* /task/{id}:
*    get:
*      description: Get a specific task from the database
*      summary: Get a task
*      tags:
*       - tasks
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
*    put:
*      description: Update a task that's in the database
*      summary: Update a task
*      tags:
*       - tasks
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Task'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
*          description: Succesfully updated a task
*    delete:
*      summary: Delete a task
*      tags:
*       - tasks
*      description: Delete a specific task from the database
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
*          description: Succesfully deleted a task
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
        const task = await taskService.getTask(parseInt(req.params.id));
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
        const task = await taskService.updateTask(parseInt(req.params.id),taskInput);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

taskRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const task = await taskService.deleteTask(parseInt(req.params.id));
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { taskRouter };