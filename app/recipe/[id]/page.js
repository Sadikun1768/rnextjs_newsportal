import Image from "next/image";

export default async function SinglePage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  return (
    <div className="max-w-xl justify-center text-center mx-auto py-10">

      <h1 className="text-3xl font-bold mb-4">Single Product Here</h1>
      <div className="border-2 border-gray-300 rounded-lg shadow-2xl p-4">
         <div className="justify-center text-center mx-auto py-6 ">
        <Image
          className='items-center mb-2 md:h-40 rounded hover:scale-100 transition-all duration-200 cursor-pointer mx-auto'
          src={recipe.image}
          alt={recipe.name}
          width={300}
          height={200}
        />
      </div>
      <div className="text-center mx-auto py-6">
        <h2 className="text-xl font-bold mb-4">{recipe.name}</h2>
        <p className="text-gray-700">{recipe.ingredients}</p>
        <p className="">{recipe.tags.join(", ")}</p>
        <p className="">{recipe.cuisine}</p>
      </div>
      </div>
     

    </div>
  )
}