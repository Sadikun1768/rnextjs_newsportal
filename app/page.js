import Banner from "@/components/ui/Banner";
import NewsCard from "@/components/ui/NewsCard";
import Image from "next/image";

export default async function Home() {

  const data = await fetch("https://dummyjson.com/posts?limit=6", {

    cache: 'no-store'

  });

  const json = await data.json()
  const posts = await json.posts

  //  console.log(posts);

  return (

    <div className="py-10">

      <Banner />

      <div className="my-10">

        <h2 className="text-2xl font-bold">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (

            <NewsCard key={post.id} article={post} />

          ))}


        </div>

      </div>

    </div>
  );
}
