/**
 * @swagger
 * /profile:
 *   post:
 *      summary: Add a profile
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProfileInput'
 *      responses:
 *         200:
 *            description: The profile was successfully created
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Profile'
 * 
 */
const profileRouter = require('express').Router();
const profileService = require('../service/profile.service');
import express, {Request, Response} from 'express';

profileRouter.get('/profile', async (req: Request, res: Response) => {
    try{
        const profile = await profileService.getAll();
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.post('/profile', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.create(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { profileRouter };