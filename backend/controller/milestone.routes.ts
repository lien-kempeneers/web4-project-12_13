const milestoneRouter = require('express').Router();
const milestoneService = require('../service/milestone.service');
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
        const milestone = await milestoneService.getMilestone(req.params.id);
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
        const milestone = await milestoneService.updateMilestone(req.params.id, milestoneInput);
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

milestoneRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const milestone = await milestoneService.deleteMilestone(req.params.id);
        res.status(200).json(milestone);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { milestoneRouter };