import React, { Suspense } from 'react'

import MealsGrid from '@/app/meals/MealsGrid/MealsGrid'
import SimplyLoader from '@/components/Loaders/SimplyLoader'
import { getMeals } from '@/app/meals/getters/getFunctions'
import NavLink from '@/components/NavLink/NavLink'

interface IMealsProps {
  // define your props here
}




const Meals = async () => {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

const MealsPage: React.FC<IMealsProps> = ({}) => {
  return (
    <div className="text-white flex flex-col mx-20 gap-6">
      <header className="flex flex-col gap-3 font-bold">
        <h1 className="text-[48px]">
          Delicious meals, created <span className="text-gradient">by you</span>
        </h1>
        <p className="text-[24px]">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="flex "></div>
      </header>
      <main className="flex flex-col items-start gap-10 ">
        <NavLink href="/meals/share" backgroundColor>
          Share Your Favorite recipe
        </NavLink>
        <div className="flex flex-col items-center justify-center w-full">
          <Suspense fallback={<SimplyLoader>Loading...</SimplyLoader>}>
            <Meals />
          </Suspense>
        </div>
      </main>
    </div>

  )
}

export default MealsPage
