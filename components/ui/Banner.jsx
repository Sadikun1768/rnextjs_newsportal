import Image from 'next/image'
import React from 'react'
import { Button } from './button'

export default function Banner() {
    return (
        <div className=''>
            <div className="bg-mist-500 grid grid-cols-1 md:grid-cols-2 px-5 py-10 gap-5">
                <div className="">
                    <Image
                        className=""
                        src="/images/news2.webp"
                        alt="Picture of the news"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="">
                    <h6 className='text-blue-700 shadow-blue-900 text-center text-sm'>Tecnology</h6>
                    <h1 className='text-2xl font-bold text-center text-shadow-cyan-900'>News Portal Tecnology here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto. Adipisci cum labore rem, eaque aliquam tempora vero eligendi odio laudantium magni repudiandae voluptatem laborum iusto ipsam. Eligendi, magnam modi?</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto. Adipisci cum labore rem, eaque aliquam tempora vero eligendi odio laudantium magni repudiandae voluptatem laborum iusto ipsam. Eligendi, magnam modi?</p>
                  <Button className="bg-blue-700 text-white mt-5">Read More</Button>
                </div>
            </div>
        </div>
    )
}
