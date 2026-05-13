

export default async function fetchNews(search, category) {

    try {
        
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${search}`, {
      cache: 'no-store'   
    });
    const json = await data.json()
    const recipes = await json.recipes

    // console.log(recipes);
    }catch(error) {
        console.log(error);
    }

  return (

    <div>
        fetchNews
     </div>
  )

}
