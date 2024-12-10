"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipeById = exports.addRecipe = exports.getAllRecipes = void 0;
const Recipe_1 = __importDefault(require("../models/Recipe"));
const getAllRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipe_1.default.find();
        res.status(200).json(recipes);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : ' An unknown error ocurred';
        res.status(500).json({ error: errorMessage });
    }
    ;
});
exports.getAllRecipes = getAllRecipes;
const addRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRecipe = new Recipe_1.default(req.body);
        yield newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.addRecipe = addRecipe;
const getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield Recipe_1.default.findById(req.params.id);
        if (!recipe) {
            res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getRecipeById = getRecipeById;
