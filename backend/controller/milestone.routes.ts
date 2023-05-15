/**
* @swagger
* paths:
*  /milestone/:
*    get:
*      description: List all milestones that are in the database
*      summary: List all milestones
*      responses:
*        '200':
*          description: Succesfully received a list of all the milestones
*      servers:
*        - url: http://localhost:3000
*    put:
*      description: Update a milestone that's in the database
*      summary: Update a milesone
*      responses:
*        '200':
*          description: Succesfully updated a milestone
*      servers:
*        - url: http://localhost:3000
*    post:
*      description: Add a milestone to the database 
*      summary: Add a milestone
*      responses:
*        '200':
*          description: Succesfully added a milestone
*      servers:
*        - url: http://localhost:3000
*    delete:
*      summary: Delete a milestone
*      description: Delete a specific milestone from the database
*      responses:
*        '200':
*          description: Succesfully deleted a milestone
*/

const milestoneRouter = require('express').Router();
import milestoneService from '../service/milestone.service';
import express, {Request, Response} from 'express';

milestoneRouter.get('/', async (req: Request, res: Response) => {
    try{
        const milestone = await milestoneService.getAllMilestones();
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

milestoneRouter.get('/:id', async (req: Request, res: Response) => {
    try{
        const milestone = await milestoneService.getMilestone({id:req.params.id});
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

milestoneRouter.post('/', async  (req: Request, res: Response) => {
    const milestoneInput = req.body;
    try{
        const milestone = await milestoneService.createMilestone(milestoneInput);
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

milestoneRouter.put('/:id', async  (req: Request, res: Response) => {
    const milestoneInput = req.body;
    try{
        const milestone = await milestoneService.updateMilestone(milestoneInput);
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

milestoneRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const milestone = await milestoneService.deleteMilestone({String:req.params.id});
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { milestoneRouter };