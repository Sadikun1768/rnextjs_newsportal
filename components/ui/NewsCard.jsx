import Image from 'next/image'
import { Button } from "@/components/ui/button"
import recipes from '@/types/recipes'
// import { Link } from 'lucide-react'
import Link from 'next/link'
export default function NewsCard({recipe}) {
 

    return (
        <div className="bg-white rounded-lg shadow-md p-4 my-4">

            <div className='my-4'>
                <Image
                    className='mb-2 md:h-40 rounded hover:scale-100 transition-all duration-200 cursor-pointer'
                    src={recipe.image}
                    alt={recipe.name}
                    width={300}
                    height={200}
                />

                <div className="">
                    <h3 className="text-lg font-semibold">{recipe.name}</h3>
                    <p className="text-gray-600">
                        {recipe.ingredients.slice(0, 3).join(',')}
                    </p>

                <Link href={`/recipe/${recipe.id}`}>
                      <Button variant="default" className="mt-4 py-2 px-4 ">
                        View More
                      </Button>
                </Link>
                   
            
                </div>
            </div>

        </div>
    )
}
