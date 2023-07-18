import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit  p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full'>
            <div className='pb-8 pt-20 text-center'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    Give us your Feedback
                </p>
                <p className='py-6'>Submit the form below</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/0d82f888-44c9-4c95-b9c6-444ba074e9c7"
                 method='POST'
                 className='flex flex-col w-full md:w-1/2'>
                    <input
                     type='text'
                     name='name'
                     placeholder='Enter your name'
                     className='p-2 bg-transparent border-2 rounded-md text-black
                    focus:outline-none'
                    />
                    <input
                     type='text'
                     name='email' 
                     placeholder='Enter your email'
                     className='my-4 p-2 bg-transparent border-2 rounded-md text-black
                    focus:outline-none'
                    />
                    <textarea 
                     name='message' 
                     placeholder='Enter your message'
                     rows='10' 
                     className='p-2 bg-transparent border-2 rounded-md text-black
                    focus:outline-none'
                    >
                    </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500
                    to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
                    hover:scale-110 duration-300'> 
                        Send message
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact