import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";
import { commonStyles } from "../../Helpers/StyleHelper";
import logo from "./logo.png";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

interface Props {}

const MenuButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
  >
    <svg
      className="h-6 w-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" style={{height:"80px"}}/>
          </Link>
        </div>

        {/* Desktop Menu */}
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.name}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white hover:opacity-70 cursor-pointer"
              style={commonStyles.primaryButton}
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <NavLink 
              to="/login" 
              isActive={location.pathname === '/login'}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              isPrimary
              isActive={location.pathname === '/register'}
            >
              Sign Up
            </NavLink>
          </div>
        )}

        {/* Mobile Menu Button */}
        <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        isLoggedIn={isLoggedIn()}
        currentPath={location.pathname}
        user={user}
        onLogout={logout}
        onLinkClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
