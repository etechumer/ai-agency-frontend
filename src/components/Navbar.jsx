import assets from '../assets/assets.js'
import { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn.jsx';
const NavBar = ({ theme, setTheme }) => {


  const [sideBar, setSideBar] = useState(false);

  function closeSideBar() {
    setSideBar(false)
  }

  return (
    <div className='flex justify-between items-center h-20 px-4 sm:px-12 lg:px-24 xl:px-40
    py-4 sticky top-0 z-20 backdrop-blur-xl font-medium  dark:bg-gray-900/70'>

      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w40'
        alt=''
      />

      <div className={`flex gap-6 text-gray-700 dark:text-white sm:text-sm ${!sideBar ? 'max-sm:w-0 overflow-hidden' : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 sm:items-center transition-all `}>

        <img src={assets.close_icon} alt='' className='w-5 absolute right-4 top-4 sm:hidden'
           onClick={closeSideBar}
        />

        <a onClick={closeSideBar} href='#' className='sm:hover:border-b'>Home</a>
        <a onClick={closeSideBar} href='#Services' className='sm:hover:border-b'>Services</a>
        <a onClick={closeSideBar} href='#our-work' className='sm:hover:border-b'>Our Work</a>
        <a onClick={closeSideBar} href='#contact-us' className='sm:hover:border-b'>Contact Us</a>

      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        {/* theme toggle button */}
        <ThemeToggleBtn  theme = {theme} setTheme = {setTheme}/>
        {/* menu button for small screens */}
        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSideBar(true)} className='w-8 sm:hidden'
        />

        <a href="contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
          Connect
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>


    </div>
  )
}

export default NavBar