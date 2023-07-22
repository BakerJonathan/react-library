import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';


function Navbar() {
    const [isVisible, setItVisible]= useState(false)
    const dropDown=()=>{setItVisible(!isVisible)}

    const {isAuthenticated,loginWithRedirect,logout}=useAuth0()
    const signInOnClick=()=>{loginWithRedirect()}
    const signOutOnClick=()=>{logout()}
    return (
        <nav className='flex justify-between flex-wrap bg-gray-800 p-4 '>
             <div className='flex  text-white mr-6 ml-7 hover:text-gray-200'>
                <Link to='/' className='font-bold text-2xl'>The Library App</Link>
            </div>

            <div className='block'>
                <button onClick={dropDown} className='flex px-3 py-2 text-white border rounded border-white hover:text-gray-300 hover:border-gray-300'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>

            { isVisible ? (
            <div className='w-full'>
                <div className='w-full h-0.5 bg-white mt-4'/>
                <div className="text-md ">
                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                            <Link to='/' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 '>Home</Link>
                    </button>

                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                            <Link to='/about' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 '>About</Link>
                    </button>

                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                            <Link to='/dashboard' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 '>Dashboard</Link>
                    </button>

                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                            <Link to='/featured' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 '>Featured</Link>
                    </button>

                    {!isAuthenticated?
                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                        <Link to='/' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 ' onClick={signInOnClick}>Sign In</Link>
                    </button>
                    :
                    <button className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl '>
                        <Link to='/' className='flex self-center  text-gray-100 hover:text-white ml-2 mr-2 ' onClick={signOutOnClick}>Sign Out</Link>
                    </button>
                    }

                    
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar