import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const userLogOut = () => {
    localStorage.clear();
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGPIe8ux1pLnQ/company-logo_200_200/company-logo_200_200/0/1710223741373/theplanetsoft_logo?e=2147483647&v=beta&t=ufbaQ-Vv4A_T6CPrpVKhX2HeNeJyihngTptyQ2uiJhc"
              className="mr-3 h-20"
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-900">
            Contact
          </Link>

          <Link
            onClick={userLogOut}
            to="/login"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log out
          </Link>
        </nav>
      </div>
    </header>
  );
}
