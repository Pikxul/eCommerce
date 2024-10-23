import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('');

  // Toggle category selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle sub-category selection
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply filters and sorting
  const applyFiltersAndSort = () => {
    let filteredProducts = [...products];

    if (showSearch && search) {
      filteredProducts = filteredProducts.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // Apply search filter if search is active
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((item) => categories.includes(item.category));
    }

    // Apply sub-category filter
    if (subCategories.length > 0) {
      filteredProducts = filteredProducts.filter((item) => subCategories.includes(item.subCategory));
    }

    // Apply sorting
    if (sortType === 'low-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filteredProducts);
  };

  // Update products when filters or sorting change
  useEffect(() => {
    applyFiltersAndSort();
  }, [categories, subCategories, sortType, products, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t">

      {/* Filter options */}
      <div className="sm:w-1/4 w-full">
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden"
        >
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            className={`h-3 ${showFilter ? 'rotate-90' : ''}`} 
            alt="Dropdown Icon" 
          />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Men" onChange={toggleCategory} /> Men
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Women" onChange={toggleCategory} /> Women
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Kids" onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* Sub-category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Topwear" onChange={toggleSubCategory} /> Topwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right side - product listing */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="" disabled hidden>Sort By</option>
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Display filtered products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
