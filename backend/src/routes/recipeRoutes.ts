import { Router } from 'express';
import { getAllRecipes, addRecipe, getRecipeById } from '../controllers/recipeController';

const router = Router();

// Definir las rutas correctamente con sus respectivos controladores
router.get('/', getAllRecipes);
router.post('/', addRecipe);
router.get('/:id', getRecipeById);

export default router;
