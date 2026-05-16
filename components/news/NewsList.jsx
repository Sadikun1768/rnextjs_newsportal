"use client"

import { useState, useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import getRecipes from "@/lib/fetchNews";

export default function NewsList() {
  
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRecipes(category, search);
            setRecipes(response.recipes);
        
        }
      
        fetchData();
    },[category, search]);
  
// console.log(data.recipes);
    
  return (
    <div>

        <h3>News List</h3>

     {recipes.map((recipe) => (

       <NewsCard key={recipe.id} recipe={recipe} />

      ))}



    </div>
  )
}
