import React from 'react';
import NavLink from './NavLink';
import { commonStyles } from '../../Helpers/StyleHelper';
import { UserProfile } from '../../Types/User';

interface MobileMenuProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  currentPath: string;
  user?: UserProfile | null;
  onLogout: () => void;
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isLoggedIn,
  currentPath,
  user,
  onLogout,
  onLinkClick,
}) => {
  return (
    <div 
      className={`lg:hidden mt-4 py-2 bg-white rounded shadow-lg transition-all duration-300 ease-in-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {isLoggedIn ? (
        <div className="flex flex-col space-y-3 px-4">
          <div className="text-gray-700">Welcome, {user?.name}</div>
          <a
            onClick={() => {
              onLogout();
              onLinkClick();
            }}
            className="px-4 py-2 text-center font-bold rounded text-white hover:opacity-70 cursor-pointer"
            style={commonStyles.primaryButton}
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 px-4">
          <NavLink
            to="/login"
            isActive={currentPath === '/login'}
            onClick={onLinkClick}
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            isPrimary
            isActive={currentPath === '/register'}
            onClick={onLinkClick}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 