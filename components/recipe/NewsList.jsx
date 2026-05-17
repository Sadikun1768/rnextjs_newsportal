"use client"

import { useState, useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import getRecipes from "@/lib/fetchNews";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

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

  }, [category, search]);

  // console.log(data.recipes);

  return (
    <div className="container mx-auto py-10">
      {/* Search Bar and Category Filter */}

      <div className="flex flex-col justify-between md:flex-row items-center mb-6 px-4">
        
        {/* Search Bar */}
        <SearchBar onSearch={setSearch} />

        {/* Category Filter */}
        <CategoryFilter onCategoryChange={setCategory} />
      </div>

      {/* Recipe Card here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-4">

        {recipes.map((recipe) => (

          <NewsCard key={recipe.id} recipe={recipe} />

        ))}

      </div>
    </div>
  )
}
