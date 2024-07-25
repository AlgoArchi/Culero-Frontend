import LogoImage from '@/assets/icons/vite.svg'
import LogoImageWhite from '@assets/icons/vite.svg'
import React from 'react'
type LogoProp = {
  color?: 'white'
}
export const Logo: React.FC<LogoProp> = ({ color }: LogoProp) => {
  if (color === 'white') {
    return <img src={LogoImageWhite} alt="Culero" className="w-[80px] lg:w-[100px] md:w-[120px]" />
  }
  return <img src={LogoImage} alt="Culero" className="w-[40px] md:w-[70px]" />
}
