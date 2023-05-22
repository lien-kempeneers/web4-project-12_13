/**
* @swagger
*   components:
*    schemas:
*      Profile:
*          type: object
*          properties:
*            id:
*              type: integer
*              format: int64
*            name:
*              type: string
*              description: The name of the profile
*            biography:
*              type: string
*              description: The biography of the profile
*
* paths:
*  /profile/:
*    get:
*      description: List all profiles that are in the database
*      summary: List all profiles
*      security:
*        - bearerAuth: []
*      responses:
*        '200':
*          description: Succesfully received a list of all the profiles
*      servers:
*        - url: http://localhost:3000/
*    put:
*      description: Update a profile that's in the database
*      summary: Update a profile
*      security:
*        - bearerAuth: []
*      responses:
*        '200':
*          description: Succesfully updated a profile
*      servers:
*        - url: http://localhost:3000/
*    post:
*      description: Add a profile to the database 
*      summary: Add a profile
*      security:
*        - bearerAuth: []
*      responses:
*        '200':
*          description: Succesfully added a profile
*      servers:
*        - url: http://localhost:3000/
*    delete:
*      description: Delete a specific profile from the database
*      summary: Delete a profile
*      security:
*        - bearerAuth: []
*      responses:
*        '200':
*          description: Succesfully deleted a profile
* /profile/{id}:
*    get:
*      description: Get a specific profile from the database
*      summary: Get a profile
*      security:
*        - bearerAuth: []
*      responses:
*        200:
*          description: Succesfully retrieved a profile
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Profile'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*/
import profileService from '../service/profile.service';
import express, {Request, Response} from 'express';
import { Profile } from '../domain/model/profile';

const profileRouter = require('express').Router();

profileRouter.get('/', async (req: Request, res: Response) => {
    try{
        const profile = await profileService.getAllProfiles();
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.get('/:id', async (req: Request, res: Response) => {
    try{
        const profile = await profileService.getProfile( {id:req.params.id});
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.post('/', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.createProfile(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.put('/:id', async  (req: Request, res: Response) => {
    const ProfileInput = req.body;
    try{
        const profile = await profileService.upsertProfile(ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const profile = await profileService.deleteProfile({String:req.params.id});
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { profileRouter };