import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'

export default async function NewsCard() {
 
    const data = await fetch('https://news-api-fs.vercel.app/api/popular')

    const news = await data.json()
    console.log(news);



    return (
        <div className="bg-white rounded-lg shadow-md p-4 my-4">

            <div className='my-4'>
                <Image
                    className='mb-2 md:h-40 rounded hover:scale-100 transition-all duration-200 cursor-pointer'
                    src="/images/news.jpg"
                    alt="Picture of the news"
                    width={300}
                    height={200}
                />

                <div className="">
                    <h3 className="text-lg font-semibold">News Title</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
                    <Button variant="default">Read More</Button>
                </div>
            </div>
            <div className='my-4'>
                <Image
                    className='mb-2 md:h-40 rounded hover:scale-100 transition-all duration-200 cursor-pointer'
                    src="/images/news.jpg"
                    alt="Picture of the news"
                    width={300}
                    height={200}
                />

                <div className="">
                    <h3 className="text-lg font-semibold">News Title</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
                    <Button variant="default">Read More</Button>
                </div>
            </div>
            <div className='my-4'>
                <Image
                     className='mb-2 md:h-40 rounded hover:scale-100 transition-all duration-200 cursor-pointer'
                    src="/images/news.jpg"
                    alt="Picture of the news"
                    width={300}
                    height={200}
                />

                <div className="">
                    <h3 className="text-lg font-semibold">News Title</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
                    
                    <Button variant="default">Read More</Button>
                 
                </div>
            </div>
        </div>
    )
}
