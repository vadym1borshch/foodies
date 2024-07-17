import React, { Suspense } from 'react'
import NavLink from '@/components/NavLink/NavLink'
import sql from 'better-sqlite3'
import MealsGrid from '@/app/meals/MealsGrid/MealsGrid'

interface IMealsProps {
  // define your props here
}

export interface IMealsResponse {
  creator: string
  creator_email: string
  id: number
  image: string
  instructions: string
  slug: string
  summary: string
  title: string
}

const db = sql('meals.db')

const getMeals = async () => {
  await new Promise(async (resolve) => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals').all() as unknown as IMealsResponse[]
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
        <div className="flex gap-10 flex-wrap justify-start">
          <Suspense fallback={<p>Loading...</p>}>
            <Meals />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default MealsPage
