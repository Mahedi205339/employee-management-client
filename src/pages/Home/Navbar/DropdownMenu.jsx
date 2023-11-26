import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import placeholderLogo from '../../../assets/user.png'
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error))

  }

  const dropLinks = <>

    {
      user ? <button className='btn text-white bg-red-700 px-2 py-1 my-4 hover:text-red-700' onClick={handleLogout}>Logout</button> : <>
        <Link
          to='/login'
          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
        >
          Login
        </Link>
        <Link
          to='/register'
          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
        >
          Register
        </Link>
      </>


    }

  </>





  return (
    <div className='relative z-10 text-black'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user?.photoURL? user.photoURL:placeholderLogo}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>

            {dropLinks}

          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
