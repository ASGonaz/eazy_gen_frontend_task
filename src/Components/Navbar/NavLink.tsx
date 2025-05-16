import React from 'react';
import { Link } from 'react-router-dom';
import { commonStyles } from '../../Helpers/StyleHelper';

interface NavLinkProps {
  to: string;
  isPrimary?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  isPrimary = false, 
  isActive = false,
  onClick,
  children 
}) => {
  const baseClasses = "px-4 py-2 transition-all duration-200";
  const primaryClasses = "text-center font-bold rounded text-white hover:opacity-70";
  const secondaryClasses = "text-gray-700 hover:text-gray-900";
  const activeClasses = isPrimary ? "opacity-90" : "font-bold text-gray-900 bg-gray-100 rounded";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${isActive ? activeClasses : ''}`}
      style={isPrimary ? commonStyles.primaryButton : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink; 