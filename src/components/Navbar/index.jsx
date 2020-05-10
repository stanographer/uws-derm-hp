import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';

const Navbar = ({ title, menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const MenuItems = () => {
    return (
      <Fragment>
        {menu.map(group => (
          <li className="hoverable hover:bg-lightPink font-workSans"
            onTouchMove={toggleMenu}
            onClick={() => toggleMenu()}
            // onMouseLeave={e => setMenuOpen(false)}
          >
            <Link
              to="#"
              className="relative block p-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-lightPink"
            >
              {group.title}
            </Link>
            <div className={menuOpen ? `p-6 mega-menu onHover mb-16 sm:mb-0 bg-lightPink border-darkerGray border-b` : `p-6 mega-menu mb-16 sm:mb-0 bg-lightPink border-darkerGray border-b`}>
              <div className="container mx-auto w-full flex flex-wrap justify-start mx-2">
                <div className="w-full text-white mb-8">
                  <h2 className="font-bold text-black text-3xl">
                    {group.subtitle || group.title}
                  </h2>
                  <p className="text-gray-700">{group.description}</p>
                </div>
                <Fragment>
                  {group.subGroups.map(subGroup => (
                    <ul className="w-full sm:w-1/2 lg:w-1/3 lg:pr-6 border-gray-600 pb-6 pt-6 lg:pt-3">
                      <div className="flex items-left">
                        <h3 className="font-bold text-xl text-gray-900 text-bold mb-2">
                          <Link to={subGroup.link}>{subGroup.title}</Link>
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {subGroup.description}
                      </p>
                    </ul>
                  ), this)}
                </Fragment>
              </div>
            </div>
          </li>
        ))}
      </Fragment>
    );
  };

  return (
    <nav className="relative bg-white border-b border-darkerGray text-gray-900">
      <div className="mx-auto flex justify-center bg-gray-800">
        <div className="relative block p-2 text-xl text-white font-workSans font-light">
          <h1 className="tracking-wider">{title}</h1>
        </div>
      </div>
      <ul className="flex justify-center">
        <MenuItems />
      </ul>
    </nav>
  );
};

export default Navbar;
