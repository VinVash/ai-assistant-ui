import React from 'react'

function Assistant() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className='text-4xl text-center py-10 font-semibold'>Assistant</h1>
      <div className='w-5/6 mx-auto bg-gray-300 rounded-lg mb-4 h-96'>
        <h1>
          {/* insert a line that indicates an AI assistant */}
          <p className="text-center text-2xl font-semibold pt-10">AI Assistant</p>
          {/* insert a line that welcomes the user to the AI assistant */}
          <p className="text-center text-gray-500 mt-5">Welcome to the AI assistant</p>

          {/* insert a warning that all responses may not be accurate */}
          <p className="text-center text-red-500 mt-5">Please note that all responses may not be accurate</p>
        </h1>
      </div>
      <div className="mx-auto w-5/6">
        <textarea className="py-3 px-4 h-1/2 block w-full bg-gray-200 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " rows="1" placeholder="Enter message"
        // add an event where user presses enter to send the message
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            alert('Message sent')
            e.target.value = ''
          }
        }}
        ></textarea>
      </div>
    </div>
  )
}

export default Assistant