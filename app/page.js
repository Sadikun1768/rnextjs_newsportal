import Banner from "@/components/ui/Banner";
import NewsCard from "@/components/ui/NewsCard";
import Image from "next/image";

export default async function Home() {

  const data = await fetch("https://news-api-fs.vercel.app/api/popular", {

    cache: 'no-store'

  });

  const json = await data.json()
  const articles = await json.articles

  // console.log(articles);

  return (

    <div className="py-10">

      <Banner />

      <div className="my-10">

        <h2 className="text-2xl font-bold">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => (

            <NewsCard key={article.id} article={article} />

          ))}


        </div>

      </div>

    </div>
  );
}
