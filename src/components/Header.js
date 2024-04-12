import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
    console.log("Signing out...");
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex items-center p-2 relative">
          <img
            className="w-12 h-12 cursor-pointer"
            src={user.photoURL}
            alt="user"
            onClick={toggleDropdown}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`w-4 h-4 ml-1 transition-transform transform ${
              isDropdownOpen ? "-rotate-180" : ""
            }`}
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 14z"
              clipRule="evenodd"
            />
          </svg>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 bg-gray-800 text-white rounded-md shadow-lg mt-2">
              <ul>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-700 text-sm"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
