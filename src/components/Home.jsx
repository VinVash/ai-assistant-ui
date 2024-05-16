import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-gray-100'>
      {/* big heading saying AI Assistant */}
      <h1 className="text-4xl font-semibold text-center pt-10">AI Assistant</h1>
      {/* paragraph saying welcome to the AI assistant */}
      <p className="text-center text-gray-500 mt-5">Welcome to the AI assistant</p>
      
      {/* Add buttons for creating New Task, New Event, New Message, Your Profile */}
      <div className="mx-4 flex flex-row items-center gap-5 mt-10 justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to={'/tasks'}>
          New Task
        </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to={'/calendar'}>
          New Event
        </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to={'/profile'}>
            Your Profile
          </Link>
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <Link to={'/help'}>
            Help
          </Link>
        </button>
      </div>

      {/* Add a section for daily overview / Today's agenda */}
      <div className="mt-10 mx-12">
        <h2 className="text-2xl font-semibold">Today's Agenda</h2>
        <p className="mt-2 text-gray-600">Here is a quick overview of your day:</p>
        <ul className="mt-5 list-disc">
          <li>Meeting: David - 11 AM</li>
          <li>Meeting: Daisy - 3 PM</li>
          <li>Meeting: Daily Standup at 5 PM </li>
          <li>Task: Submit the project report by EOD</li>
          <li>Task: Submit the weekly timesheet</li>
        </ul>

        <h2 className="text-2xl mt-10 font-semibold">Specials</h2>
        <ul className="list-disc mt-5">
          <li>It's David's Birthday!</li>
        </ul>
      </div>

      {/* Section for Personalised recommendations and recent activities */}
      <div className="py-10 mx-12">
        <h2 className="text-2xl font-semibold">Personalised Recommendations</h2>
        <p className="mt-2 text-gray-600">Here are some recommendations based on your recent activities:</p>
        <ul className="mt-5 list-disc">
          <li>Attend the React Workshop on Saturday</li>
          <li>Complete the remaining tasks for the week</li>
          <li>Review the upcoming events for the month</li>
        </ul>
      </div>


      
    </div>
  )
}

export default Home