import { Request, Response } from 'express';
import Recipe from '../models/Recipe';

export const getAllRecipes = async ( req: Request, res: Response): Promise<void> => {
    try {
        const recipes = await Recipe.find();
         res.status(200).json(recipes);
    } catch(error){
        const errorMessage = error instanceof Error ? error.message : ' An unknown error ocurred';
         res.status(500).json({ error: errorMessage});

    };
    
};

export const addRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
         res.status(201).json(newRecipe);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error : errorMessage})
    }
};

export const getRecipeById = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
             res.status(404).json({message: 'Recipe not found'});
        }
         res.status(200).json(recipe);
    } catch(error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error: errorMessage})
    }
};