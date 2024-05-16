import React from 'react'

function Help() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        {/* create a FAQ dropdown */}
        <div className='py-10 mx-2'>
            <h1 className="text-4xl font-semibold text-center pb-10">Help</h1>
        <ul className="max-w-2xl mx-auto divide-y shadow shadow-blue-600 rounded-xl">
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>How do I add a new task or appointment?</span>
                    </summary>

                    <article className="px-4 pb-4">
                        <ul>
                            <li>- Click on the "New Task" button on the home page.</li>
                            <li>- Fill in the necessary details and add any additional notes.</li>
                            <li>- Click "Save" to add the task or appointment to your calendar.</li>
                        </ul>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>How do I view/edit my profile?</span>
                    </summary>

                    <article className="px-4 pb-4">
                        <ul>
                            <li>- Click on the "Profile" tab in the navigation bar.</li>
                            <li>- You can view and edit your profile details, such as name, email, and profile picture.</li>
                            <li>- Click "Save" to update your profile information.</li>
                        </ul>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>How can I interact with the AI assistant ?</span>
                    </summary>

                    <article className="px-4 pb-4">
                        <ul>
                            <li>- Click on the "Assistant" tab in the navigation bar.</li>
                            <li>- Type in your query in the chat box.</li>
                            <li>- The AI assistant will respond to your query with relevant information</li>
                        </ul>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>How can I view and manage my notifications?</span>
                    </summary>

                    <article className="px-4 pb-4">
                        <ul>
                            <li>- Click on the "Notifications" tab in the navigation bar.</li>
                            <li>- Click on a notification to view more details or mark it as read.</li>
                            <li>- You can also clear all notifications by clicking the "Clear All" button.</li>
                        </ul>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>What should I do if I encounter an issue or need help?</span>
                    </summary>

                    <article className="px-4 pb-4">
                        <ul>
                            <li>- Click on the "Help" button on the home page.</li>
                            <li>- Browse the FAQs for answers to common questions.</li>
                            <li>- If you still need assistance, click on the "Contact Support" button to reach out to our team.</li>
                        </ul>
                    </article>
                </details>
            </li>

        </ul>
        </div>


    {/* contact section */}
    <div className='py-10 mx-2'>
        <h1 className="text-4xl font-semibold text-center pb-10">Contact</h1>
        <div className='max-w-2xl mx-auto'>
            <p className='text-center'>For any queries or assistance, please feel free to reach out to us at:</p>
            <p className='text-center text-blue-500 font-semibold'>
                assistant.support@gmail.com
            </p>
        </div>
    </div>


    </div>
  )
}

export default Help