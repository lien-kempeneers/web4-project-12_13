/**
* @swagger
* paths:
*  /profile/:
*    get:
*      description: List all profiles that are in the database
*      summary: List all profiles
*      responses:
*        '200':
*          description: Succesfully received a list of all the profiles
*      servers:
*        - url: http://localhost:3000
*    put:
*      description: Update a profile that's in the database
*      summary: Update a profile
*      responses:
*        '200':
*          description: Succesfully updated a profile
*      servers:
*        - url: http://localhost:3000
*    post:
*      description: Add a profile to the database 
*      summary: Add a profile
*      responses:
*        '200':
*          description: Succesfully added a profile
*      servers:
*        - url: http://localhost:3000
*    delete:
*      summary: Delete a profile
*      description: Delete a specific profile from the database
*      responses:
*        '200':
*          description: Succesfully deleted a profile
*/
const profileRouter = require('express').Router();
const profileService = require('../service/profile.service');
import express, {Request, Response} from 'express';

profileRouter.get('/', async (req: Request, res: Response) => {
    try{
        const profile = await profileService.getAllProfiles();
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.post('/', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.addProfile(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.put('/', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.upsertProfile(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.delete('/', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.deleteProfile(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { profileRouter };