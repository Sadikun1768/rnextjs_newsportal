import Banner from "@/components/ui/Banner";
import NewsCard from "@/components/ui/NewsCard";
import Image from "next/image";

export default async function Home() {

  const data = await fetch("https://dummyjson.com/recipes", {

    cache: 'no-store'

  });

  const json = await data.json()
  const recipes = await json.recipes

  //  console.log(recipes);

  return (

    <div className="py-10">

      <Banner />

      <div className="my-10">

        <h2 className="text-2xl font-bold">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

          {recipes.slice(0, 3).map((recipe) => (

            <NewsCard key={recipe.id} recipe={recipe} />

          ))}


        </div>

      </div>

    </div>
  );
}
