import React from 'react'

const Footer1 = () => {
  return (
    <div className='w-full h-250 flex items-center justify-around flex-col'>
      <div className='w-[95%] h-80 bg-[#0066F5] rounded-2xl flex items-center justify-around'>
        <h3 className='text-4xl font-medium text-[white]'>Join over 1 million <br /> customers on Cowrywise <br />today</h3>
        <div className='w-[40%] h-15 bg-[#ffffff3e] rounded-[6px] flex justify-between items-center p-2'>
          <input type="mail" placeholder='Your email...' className='text-[#ffffff97] focus:outline-none focus:ring-0' />
          <button className='w-40 h-12 bg-white rounded-[6px] text-[#082552] text-[16px] font-medium hover:bg-[#082552] hover:text-white transition duration-300'>Sign up For Free</button>
        </div>
      </div>
      <div className='w-[95%] h-[50%]  flex justify-between'>
        <div className='w-50 h-70 flex flex-col gap-8'>
          <h3 className='text-2xl font-medium text-[#082552]'>Company</h3>
          <ul className='flex flex-col justify-around gap-2 text-[#6B7D98] '>
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Ambassadors</li>
            <li>Complaints Management</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className='w-50 h-90 flex flex-col gap-8'>
          <h3 className='text-2xl font-medium text-[#082552]'>Product</h3>
          <ul className='flex flex-col justify-around gap-2 text-[#6B7D98] '>
            <li>Saving Plans</li>
            <li>Investment Plans</li>
            <li>Mutual Funds</li>
            <li>Duo</li>
            <li>Embed API</li>
            <li>Sprout</li>
            <li>Circles</li>
            <li>Halal</li>
            <li>Got a suggestion?</li>
          </ul>
        </div>
        <div className='w-50 h-110 flex flex-col gap-8'>
          <h3 className='text-2xl font-medium text-[#082552]'>Resources</h3>
          <ul className='flex flex-col justify-around gap-2 text-[#6B7D98] '>
            <li>Customer Stories</li>
            <li>Media</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Estimate your Interest</li>
            <li>Plan Education</li>
            <li>Engineering</li>
            <li>Glossary</li>
            <li>Simplified Publication</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className='w-50 h-40 flex flex-col gap-8'>
          <h3 className='text-2xl font-medium text-[#082552]'>Contact</h3>
          <ul className='flex flex-col justify-around gap-2 text-[#6B7D98] '>
            <li>07000COWRYWISEs</li>
            <li>support@cowrywise.com</li>
            <li>WhatsApp ↗</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer1