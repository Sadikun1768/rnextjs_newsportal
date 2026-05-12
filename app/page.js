import Banner from "@/components/ui/Banner";
import NewsCard from "@/components/ui/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-10">
 
      <Banner />

      <div className="my-10">
        <h2 className="text-2xl font-bold">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <NewsCard />

        </div>

      </div>

    </div>
  );
}
