import React from 'react';

const NewsletterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // You can add form submission logic here
  };

  return (
    <div className='text-center'>
      <p className='text-1xl font-medium text-gray-800'>
        Subscribe now & get 25% off
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <label htmlFor="email" className="sr-only">Email</label>
        <input 
          id="email" 
          className='w-full sm:flex-1 outline-none' 
          type="email" 
          placeholder='Enter your email...' 
          required 
        />
        <button 
          type='submit' 
          className='bg-black text-white text-xs px-10 py-4' 
          aria-label="Subscribe to newsletter"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
