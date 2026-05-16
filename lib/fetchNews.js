"use client"

export default async function getRecipes(category, search) {

  try {
    const response = await fetch
    
    (`https://dummyjson.com/recipes/search?q=${search}%20${category}`);

    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {

    console.log("Error fetching recipes:", error);
  }


}

















// export default async function fetchNews(category, search) {
//   try {
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=${search}&apiKey=YOUR_API_KEY`
//     );

//     const data = await response.json();

//     return data;

//   } catch (error) {
//     console.log("Error fetching news:", error);
//   }
// }