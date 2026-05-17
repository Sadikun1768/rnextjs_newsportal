import NewsList from '@/components/recipe/NewsList'
import Link from 'next/link'

function page() {
  return (
    <div className='py-6'>
      <h2 className='text-2xl font-bold'>Latest Recipes</h2>

      <NewsList />
      
    </div>

  )
}

export default page
