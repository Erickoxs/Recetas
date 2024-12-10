"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeController_1 = require("../controllers/recipeController");
const router = (0, express_1.Router)();
// Definir las rutas correctamente con sus respectivos controladores
router.get('/', recipeController_1.getAllRecipes);
router.post('/', recipeController_1.addRecipe);
router.get('/:id', recipeController_1.getRecipeById);
exports.default = router;
