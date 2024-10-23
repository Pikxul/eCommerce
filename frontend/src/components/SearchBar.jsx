import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Show the search bar only on 'collection' pages
  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-100 py-4 flex flex-col items-center'>
      <div className='relative w-full max-w-lg mx-auto'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="w-full py-3 px-5 pl-10 pr-14 rounded-full border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-base transition duration-300 ease-in-out outline-none"
        />
        {/* Search Icon */}
        <Link to='/collection'>
          <img
            src={assets.search_icon}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            alt="search icon"
          />
        </Link>
        {/* Close Icon */}
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
          alt="close search"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
