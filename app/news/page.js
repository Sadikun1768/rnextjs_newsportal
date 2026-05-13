import NewsList from '@/components/news/NewsList'
import Link from 'next/link'

function page() {
  return (
    <div className='py-6'>
      <h2 className='text-black font-bold'>Latest News</h2>

      <NewsList />
      
    </div>

  )
}

export default page
