import { Request, Response } from 'express';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    {try {
        const { username, email, password } = req.body;

        const existingUser = await username.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists'});
            return;
        }
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered succesfully', user: newUser});
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error : errorMessage});
    }
}};

export const getAllUsers = async (req: Request, res: Response): Promise <void> => {
    try { 
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
        res.status(500).json({ error: errorMessage})
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404).json({ message: 'User not found'})
            return;
        }
        res.status(200).json(user);
    }catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error: errorMessage})
    }
};