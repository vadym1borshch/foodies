'use client'
import React from 'react'
import Image from 'next/image'
import NavLink from '@/components/NavLink/NavLink'
import { sliderImages } from '@/assets/images'
import { IMealsResponse } from '@/app/meals/getters/getFunctions'

interface MealsGrid {
  meals: IMealsResponse[]
}

const MealsGrid: React.FC<MealsGrid> = ({ meals }) => {
  const mealsArr = meals.map((el, i) => {
    return { ...el, image: sliderImages[i].img }
  })

  if (!mealsArr) return null
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto">
      <div className="flex flex-wrap gap-10 mx-auto w-full">
        {mealsArr.map((item, i) => (
          <div
            className={`flex flex-col min-w-[365px] max-w-[365px] bg-[#1e1109] rounded-md `}
            key={item.id}
          >
            <header>
              <Image
                className="rounded-tr-md rounded-tl-md"
                src={item.image}
                alt={item.title}
              />
            </header>
            <main className="flex flex-col gap-3 font-bold m-4">
              <h1 className="text-[24px]">{item.title}</h1>
              <p className="text-[12px]">by {item.creator}</p>
              <p className="flex min-h-[72px]">{item.summary}</p>
              <div className="flex justify-end">
                <NavLink href={`/meals/${item.slug}`} backgroundColor>
                  View Details
                </NavLink>
              </div>
            </main>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealsGrid
