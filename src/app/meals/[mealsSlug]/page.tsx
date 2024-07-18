import React from 'react'
import { getMealsSlug } from '@/app/meals/getters/getFunctions'
import Image from 'next/image'

interface IMealsDetailProps {
 params: any
}

const MealsDetail = async ({params} :IMealsDetailProps) => {
  const meal = await getMealsSlug(params.mealsSlug)
  console.log("meal---------", meal)
  if (!meal) return null
  return (
    <div>
      <header>
        <div>
          <Image src={meal.image} alt={meal.title} width={200} height={200} />
        </div>
        <div></div>
      </header>
      <main>
        Meals detail
      </main>
    </div>
  )
}

export default MealsDetail
