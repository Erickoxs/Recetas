import { useState, useEffect } from 'react';
import axios from 'axios';


interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}


const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchRecipes();
  }, []);


  return { recipes, loading };
};


export default useFetchRecipes;
