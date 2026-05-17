import Image from 'next/image'
import React from 'react'
import { Button } from './button'

export default function Banner() {
    return (
        <div className=''>
            <div className="bg-mist-500 grid grid-cols-1 md:grid-cols-2 px-5 py-10 gap-5">
                <div className="lg:px-8 px-4 py-10">
                    <Image
                        className=""
                        src="/images/news2.webp"
                        alt="Picture of the news"
                        width={500}
                        height={600}
                    />
                </div>
                <div className="space-y-4 flex flex-col px-4 py-8">
                    <h6 className='text-xl'>Receipe</h6>
                    <h1 className='text-3xl font-bold text-shadow-cyan-900'>Receipe Portal here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto. Adipisci cum labore rem, eaque aliquam tempora vero eligendi odio laudantium magni repudiandae voluptatem laborum iusto ipsam. Eligendi, magnam modi?</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto. Adipisci cum labore rem, eaque aliquam tempora vero eligendi odio laudantium magni repudiandae voluptatem laborum iusto ipsam. Eligendi, magnam modi?</p>
                  <Button variant="default" className="mt-5">Read More</Button>
                </div>
            </div>
        </div>
    )
}
