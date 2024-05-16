import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const classForItems = "font-medium text-gray-600 hover:text-gray-400 text-neutral-400 dark:hover:text-neutral-500";

  return (
    <div>
        <header className="bg-neutral-800 w-full text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap justify-between items-center" aria-label="Global">
                <div className="flex-none text-xl font-semibold text-white">
                  <Link to={'/'}>AI Assistant</Link>
                </div>
                <div className="md:hidden">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  </button>
                </div>
                <div className={`${
                    isOpen ? 'visible' : 'hidden'
                  } md:hidden flex flex-col w-full text-center mt-4 gap-4`}>
                  <Link to={'/'} className={classForItems}>Home</Link>
                  <Link to={'/tasks'} className={classForItems}>Tasks</Link>
                  <Link to={'/calendar'} className={classForItems}>Calendar</Link>
                  <Link to={'/assistant'} className={classForItems}>Assistant</Link>
                  <Link to={'/notifications'} className={classForItems}>Notifications <span className='bg-white rounded-full px-1'>2</span></Link>
                  <Link to={'/profile'} className={classForItems}>Profile</Link>
                  <Link to={'/help'} className={classForItems}>Help</Link>
                </div>
                <div className={`md:flex hidden md:w-auto md:flex-row md:items-center md:gap-5 md:mt-0 mt-4`}>
                  <Link to={'/'} className={classForItems}>Home</Link>
                  <Link to={'/tasks'} className={classForItems}>Tasks</Link>
                  <Link to={'/calendar'} className={classForItems}>Calendar</Link>
                  <Link to={'/assistant'} className={classForItems}>Assistant</Link>
                  <Link to={'/notifications'} className={classForItems}>
                    Notifications <span className='bg-white rounded-full px-1'>2</span>
                  </Link>
                  <Link to={'/profile'} className={classForItems}>Profile</Link>
                  <Link to={'/help'} className={classForItems}>Help</Link>
                </div>
            </nav>
        </header>
    </div>
  );
}

export default Navbar;
