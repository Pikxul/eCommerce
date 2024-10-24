import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <Link to='/'><img src={assets.logo} className='mb-5 w-32' alt="Company Logo" /></Link>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae delectus libero corporis est neque, culpa quo necessitatibus, 
            dolores quae illo, repellat sint obcaecati harum veniam maiores dolorum natus porro. Id!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <Link to='/'><li>Home</li></Link>           
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Phone: +1234567890</li> 
            <li>Email: pixkart2001@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright section moved outside the grid */}
      <div className='mt-10'>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ pixkart.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
