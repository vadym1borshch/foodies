import sql from 'better-sqlite3'

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

export const getMeals = async () => {
  await new Promise(async (resolve) => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals').all() as unknown as IMealsResponse[]
}

export const getMealsSlug = async (slug: string) => {
  await new Promise(async (resolve) => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as unknown as IMealsResponse
}
