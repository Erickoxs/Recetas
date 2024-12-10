import React, { useState, useEffect} from "react";
import RecipeCard from "../components/RecipeCard";

interface Recipe {
    _id: string;
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image?: string;
}

const Favorites:  React.FC = () => {
    const [favorites, SetFavorites] = useState<Recipe[]>([]);

    useEffect(() => {

        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            SetFavorites (JSON.parse(storedFavorites));
        }
    }, []);

    const removeFromFavorites = (id: string) => {
        const updatedFavorites = favorites.filter((recipe) => recipe._id !== id);
        SetFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="favorites">
            <h1>My Favorite Recipes</h1>
            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((recipe) => (
                        <div key={recipe._id} className="favorite-item">
                            <RecipeCard recipe={recipe} />
                            <button 
                            onClick={() => removeFromFavorites(recipe._id)}
                            className="remove-btn"
                            >Remove</button>
                            </div>
                    ))}
                    </div>

            ) : (
                <p>No favorite recipes yet. Start adding some!</p>
            )}
        </div>
    );
};

export default Favorites;