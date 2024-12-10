import React from 'react';

interface RecipeCardProps {
    recipe: {
        title: string;
        category: string;
        ingredients: string[];
        instructions: string;
        image?: string;
    };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { title, category, ingredients, instructions, image } = recipe;
    return (
        <div className="recipe-card">
            <img src={image || 'default.jpg'} alt={title} />
            <h3>{title}</h3>
            <p><strong>Category:</strong> {category}</p>
            <h4>Ingredients:</h4>
            <ul>
                {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <p>{instructions}</p>
        </div>
    );
};

export default RecipeCard;