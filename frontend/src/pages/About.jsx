import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 text-gray-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora corporis, quas eum suscipit mollitia fuga reprehenderit architecto asperiores odio, alias, itaque consectetur cupiditate illo natus commodi sed id voluptates.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, nulla quae non est dignissimos itaque, accusantium ipsum facere necessitatibus eligendi! Provident aut laudantium omnis, possimus repellendus iure distinctio eaque.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tempora corporis, quas eum suscipit mollitia fuga reprehenderit architecto asperiores odio, alias, itaque consectetur cupiditate illo natus commodi sed id voluptates.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
