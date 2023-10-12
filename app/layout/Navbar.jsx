"use client"
import React , {useState , useEffect} from 'react'
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const Navbar = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <div onClick={ ()=> setTheme(theme === "dark" ? "light" : "dark")} className='bg-red'>
        {theme === "dark" ? <FiSun  className='w-[20px] h-[20px]'/> : <BiMoon className='w-[20px] h-[20px]' />}
      </div>
    </div>
  )
}

export default Navbar