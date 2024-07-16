import NavLink from '@/components/NavLink/NavLink'
import Slider from '@/components/Slider/Slider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-8">
      <div className="flex justify-center items-center w-full gap-4">
        <div>
          <Slider/>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-[26px] text-gradient">
              <p>NEXTLEVEL FOOD FOR</p>
              <p>NEXTLEVEL FOODIES</p>
            </h1>
          </div>
          <div>
            <p className="text-white">Taste & share foo from all over the world</p>
          </div>
          <div className="flex gap-2">
            <NavLink href="/community" textColor>
              Join the Community
            </NavLink>
            <NavLink href="/meals" activeLinkBackgroundColor>
              Explore Meals
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}
