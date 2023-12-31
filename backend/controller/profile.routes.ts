/**
* @swagger
*   components:
*    schemas:
*      Profile:
*          type: object
*          properties:
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
*      tags:
*       - profiles
*      responses:
*        200:
*          description: Succesfully received a list of all the profiles
*        401:
*          description: Unauthorized, please provide a valid JWT token
*    post:
*      description: Add a profile to the database 
*      summary: Create a profile
*      tags:
*       - profiles
*      requestBody:
*        required: true
*        summary: Add a profile
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Profile'
*      responses:
*        200:
*          description: Succesfully added a profile
*        401:
*          description: Unauthorized, please provide a valid JWT token
* /profile/{id}:
*    get:
*      description: Get a specific profile from the database
*      summary: Get a profile
*      tags:
*       - profiles
*      responses:
*        200:
*          description: Succesfully retrieved a profile
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/profile'
*        401:
*          description: Unauthorized, please provide a valid JWT token
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*    put:
*      description: Update a profile that's in the database
*      summary: Update a profile
*      tags:
*       - profiles
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Profile'
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
*          description: Succesfully updated a profile
*        401:
*          description: Unauthorized, please provide a valid JWT token
*    delete:
*      summary: Delete a profile
*      description: Delete a specific profile from the database
*      tags:
*       - profiles
*      parameters:
*        - name: id
*          in: path
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        200:
*          description: Succesfully deleted a profile
*        401:
*          description: Unauthorized, please provide a valid JWT token
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
        const profile = await profileService.getProfile( parseInt(req.params.id));
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
        const profile = await profileService.updateProfile(parseInt(req.params.id), ProfileInput);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

profileRouter.delete('/:id', async  (req: Request, res: Response) => {
    try{
        const profile = await profileService.deleteProfile(parseInt(req.params.id));
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({status: 'error', message: err.message});
    }
});

export { profileRouter };