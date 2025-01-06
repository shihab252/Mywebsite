import React from 'react'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
              <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                <a 
                  href="https://www.facebook.com/ShihabUDDINkhan372" 
                  className='text-white/80 hover:text-red-500' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a 
                  href="https://github.com/shihab252" 
                  className='text-white/80 hover:text-red-500' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/shihab-uddin-khan/" 
                  className='text-white/80 hover:text-red-500' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a 
                  href="https://www.fiverr.com/shihb_khan_u/buying?source=avatar_menu_profile" 
                  className='text-white/80 hover:text-red-500' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-fiverr text-2xl"></i>
                </a>
              </div>
              <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' placeholder='Full Name'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' placeholder='Email'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='flex space-x-4'>
                <button type='button' className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
                <h2>OR</h2>
                <a 
                  href="mailto:khanshihab252@gmail.com" 
                  className='bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700'
                >
                  Gmail Me
                </a>
              </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
