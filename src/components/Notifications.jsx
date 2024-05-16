import React from 'react'
import { Link } from 'react-router-dom'

function Notifications() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className='text-4xl text-center py-10 font-semibold'>Notifications</h1>

      {/* create a vertical flex box of cards that contain icons for joining meetings, etc. */}
      <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-5 w-96'>
          <h2 className='text-2xl font-semibold'>Meeting Reminder</h2>
          <p className='text-gray-500'>You have a meeting with David at 11 AM</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
          <Link to={'/calendar'}>
              Join Meeting
            </Link>
          </button>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-5 w-96'>
          <h2 className='text-2xl font-semibold'>Task Reminder</h2>
          <p className='text-gray-500'>You have a task due at 3 PM</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
            <Link to={'/tasks'}>
            View Task
            </Link>
          </button>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-5 w-96'>
          <h2 className='text-2xl font-semibold'>Daily Standup</h2>
          <p className='text-gray-500'>Join the daily standup meeting at 5 PM</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
            <Link to={'/calendar'}>
              Join Meeting
            </Link>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Notifications