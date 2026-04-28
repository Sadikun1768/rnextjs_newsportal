import Link from 'next/link'

function page() {
  return (
    <div className='py-10'>
        <h1 className='text-orange-700 text-xl'>Latested News Here</h1>
        <nav className='flex gap-4 my-4'>
            <Link className='text-blue-500' href='/news/sports'>Sports</Link>
             <Link className='text-blue-500' href='/news/health'>Health</Link>      
        </nav>
      <div className='flex justify-between'>
        <div className='md:w-4/5 h-90 bg-blue-400 text-white flex items-center justify-center'>
              <h1>News</h1>
        </div>
        <div className='md:w-1/5 h-90 bg-cyan-800 text-white text-center'>
                SideBar
        </div>
      </div>
    </div>
  )
}

export default page
