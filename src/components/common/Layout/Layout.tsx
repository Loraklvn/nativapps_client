import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/NativApps.png';

type LayoutProps = {
  children: React.ReactElement;
};

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="flex justify-between h-16 max-w-7xl mx-auto">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img
                className="relative w-14 block cursor-pointer"
                src={logo}
                alt="Agricultic"
              />
              <h2 className="font-bold text-xl">NativApps</h2>
            </div>
          </Link>

          <div className="sm:ml-6 flex items-center space-x-4 sm:space-x-4">
            <Link to="/reservations" className="underline">
              Reservations
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
