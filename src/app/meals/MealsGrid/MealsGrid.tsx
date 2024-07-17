'use client'
import React from 'react'
import { IMealsResponse } from '@/app/meals/page'
import Image from 'next/image'
import NavLink from '@/components/NavLink/NavLink'
import { sliderImages } from '@/assets/images'

interface MealsGrid {
  meals: IMealsResponse[]
}

const MealsGrid: React.FC<MealsGrid> = ({ meals }) => {
  const mealsArr = meals.map((el, i) => {
    return { ...el, image: sliderImages[i].img }
  })

  if (!mealsArr) return null
  return (
    <>
      {mealsArr.map((item, i) => (
        <div className="flex flex-col w-[350px] bg-[#1e1109] rounded-md shadow">
          <header>
            <Image className="rounded-md" src={item.image} alt={item.title} />
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
    </>
  )
}

export default MealsGrid
