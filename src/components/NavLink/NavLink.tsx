'use client'
import React, { useMemo } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface INavLinkProps {
  img?: string | StaticImageData
  children: React.ReactNode
  href: string
  backgroundColor?: boolean
  textColor?: boolean
}

const NavLink: React.FC<INavLinkProps> = ({
  img,
  children,
  href,
  backgroundColor,
  textColor,
}) => {
  const pathName = usePathname()

  const active = useMemo(() => {
    if (pathName === href) {
      if (pathName === '/') {
        return 'text-white '
      }
      return 'text-gradient opacity-100 text-shadow'
    }
    return 'text-white'
  }, [href, pathName])

  return (
    <Link
      className={`flex justify-start items-center gap-4 font-bold text-lg ${active}`}
      href={href}
    >
      {img && <Image src={img} alt={''} priority width={100} height={100} />}
      <span
        className={`${backgroundColor ? 'bg-gradient rounded p-2' : ''} ${textColor ? 'text-gradient' : 'text-white'}`}
      >
        {children}
      </span>
    </Link>
  )
}

export default NavLink
