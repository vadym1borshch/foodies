import NavLink from '@/components/NavLink/NavLink'
import Slider from '@/components/Slider/Slider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-auto relative top-[100px] gap-6">
      <div className="flex justify-center items-center w-full gap-16">
        <div>
          <Slider />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-[26px] text-gradient">
              <p>NEXTLEVEL FOOD FOR</p>
              <p>NEXTLEVEL FOODIES</p>
            </h1>
          </div>
          <div>
            <p className="text-white">
              Taste & share foo from all over the world
            </p>
          </div>
          <div className="flex gap-2">
            <NavLink href="/community" textColor>
              Join the Community
            </NavLink>
            <NavLink href="/meals" backgroundColor>
              Explore Meals
            </NavLink>
          </div>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center text-white w-full gap-4">
        <h2 className="text-[32px] font-bold">How it works</h2>
        <p className="text-[24px] text-center w-[50%]">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p className="text-[24px] text-center w-[50%]">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center text-white w-full gap-4">
        <h2 className="text-[32px] font-bold">Why NextLevel Food?</h2>
        <p className="text-[24px] text-center w-[50%]">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p className="text-[24px] text-center w-[50%]">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </main>
  )
}
