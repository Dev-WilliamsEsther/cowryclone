import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { RiWhatsappFill } from 'react-icons/ri'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'
// flex flex-col gap-2
const Footer = () => {
  return (
    <div className='w-full h-140  flex flex-col gap-4'>
      <div className='w-full h-22 flex items-center'>
        <div className='w-60 h-20  flex justify-around items-center ml-6'>
        <TiSocialTwitter color='#697B98' size={22} />
        <TiSocialFacebook color='#697B98' size={23} />
        <RiWhatsappFill color='#697B98' size={22} />
        <IoIosSend color='#697B98' size={22} />
        <SlSocialInstagram color='#697B98' size={22} />
        <FaYoutube color='#697B98' size={22} />
        </div>
      </div>
      <div className='w-full h-36  flex items-center justify-between'>
        <div className='w-110 h-20 ml-6 flex justify-around flex-col '>
          <p>🇳🇬 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria. </p>
          <p>🇺🇸 2261 Market Street #4817 San Francisco, CA 94114</p>
        </div>
        <div className='w-50 h-15 mr-6 bg-white rounded-[6px] flex justify-around items-center border border-gray-400'>
          <img className='w-[20%]' src="src/assets/sec.png" alt="" />
          <div className='w-36 h-10'>
            <p className='text-[14px] font-bold'>Licensed by the SEC</p>
            <p className='text-[12px] text-[#697B98]'>Fund Manager</p>
          </div>
        </div>
      </div>
      <p className='ml-6 text-[13px] text-[#697B98]'>Cowrywise Financial Technology Limited (“Cowrywise”) is a Fund/Portfolio Manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria, with License #1940 and its sister company, CFTL Digital Services Limited, is a Digital Sub-Broker duly licensed by the SEC, with License #3005</p>
      <p className='ml-6 text-[13px] text-[#697B98]'>Our mutual funds are managed by our fund management partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. <a href="" className='text-blue-500' >View full list of available mutual funds on Cowrywise.</a> </p>
      <p className='ml-6 text-[13px] text-[#697B98]'>Stash is used for the purpose of receiving money transfers in place of a regular debit card. It also receives the proceeds from the sale of any mutual fund on Cowrywise.</p>
      <p className='ml-6 text-[13px] text-[#697B98]'>The content on this website does not constitute a complete description of Cowrywise’s offerings and services. By using this website, you accept our <a href="" className='text-blue-500'>Terms of Use</a> and <a href="" className='text-blue-500'>Privacy Policy.</a></p>
      <p className='ml-6 text-[13px] text-[#697B98]'>Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S.</p>
      <p className='ml-6 text-[13px] text-[#697B98]'>©2025 Cowrywise Financial Technology. All rights reserved</p>
    </div>
  )
}

export default Footer