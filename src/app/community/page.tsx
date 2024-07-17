'use client'
import React, { Fragment } from 'react'
import { communityImages } from '@/assets/images'
import Image from 'next/image'

interface ICommunityProps {
  // define your props here
}

const Community: React.FC<ICommunityProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="text-center text-white">
        <h1 className="text-[32px] font-bold">
          One shared passion: <span className="text-gradient">Food</span>
        </h1>
        <p className="text-[18px] font-bold">Join our community and share your favorite recipes!</p>
      </div>
      <main className="flex flex-col items-center gap-8 text-white">
        {communityImages.map((img) => (
          <Fragment key={img.id}>
            <h1 className="text-[24px] font-bold">{img.description}</h1>
            <Image src={img.img} alt={img.alt} width={200} />
          </Fragment>
        ))}
      </main>
    </div>
  )
}

export default Community
