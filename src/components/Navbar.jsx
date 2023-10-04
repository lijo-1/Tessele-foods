import { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { RiMenuFill } from 'react-icons/ri'
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Add an event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <div className=" px-5 z-40 fixed top-0 w-full">

        <nav
          className={`grid grid-cols-12 max-w-[1060px] mx-auto font-Mont items-center rounded-3xl mt-3 px-5 py-0.5 ${scrolling || navbarOpen ? 'bg-sea-green shadow-md' : ''}`}
        >
          {/* Large Screen Menu */}
          <ul className={`${scrolling ? 'text-white' : 'text-sea-green'} font-medium text-sm hidden md:flex md:col-start-1 md:col-end-5 md:text-sm lg:text-base`}>
            <li className="p-3">
              <a href="#Products" className='pb-1 hover:border-b-2 border-emerald'>Products</a>
            </li>
            <li className="p-3">
              <a href="#AboutUs" className='pb-1 hover:border-b-2 border-emerald'>About Us</a>
            </li>
            <li className="p-3">
              <a href="#Footer" className='pb-1 hover:border-b-2 border-emerald'>Contact Us</a>
            </li>
          </ul>
          <h1 className={`col-start-1 col-end-6 font-bold text-lg md:inline-block md:col-start-6 md:col-end-10 md:text-xl lg:ml-8 lg:text-2xl ${scrolling || navbarOpen ? 'text-white' : 'text-sea-green'} `}>
            Tessele Foods
          </h1>

          <div className='col-start-11 col-end-13 flex items-center md:ml-6 md:col-start-12 md:col-end-13 lg:ml-14 lg:col-start-12 lg:col-end-13'>
            <RiShoppingCartFill className={`w-5 h-10 mr-4 cursor-pointer  ${scrolling || navbarOpen ? 'fill-white' : ' fill-sea-green'}`} />
            {navbarOpen ? (
              <RiCloseLine
                className='w-6 h-10 cursor-pointer fill-white lg:w-8'
                onClick={toggleNav}
              />
            ) : (
              <RiMenuFill
                className={`w-5 h-10 cursor-pointer ${scrolling ? 'fill-white' : ' fill-sea-green'} md:hidden lg:hidden`}
                onClick={toggleNav}
              />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex justify-center items-center w-screen h-screen z-10 fixed bg-sea-green text-white text-2xl  ${navbarOpen ? 'block' : 'hidden'}`}
      >
        <ul className="">
          <li className="font-semibold">
            <a href="#Products" className='hover:border-b border-emerald'>Products</a>
          </li>
          <li className="font-semibold">
            <a href="#AboutUs" className='hover:border-b border-emerald'>About Us</a>
          </li>
          <li className="font-semibold">
            <a href="#Footer" className='hover:border-b border-emerald'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
