import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Home,
    Users,
    Clipboard,
    BarChart2,
    Box,
    Menu,
    ChevronRight,
    LayoutDashboard
} from 'lucide-react';

const Sidebar = ({ isOpen = false, onToggle, isMobile = false }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigation = [
        { name: 'Home', icon: Home, path: '/', id: 'home' },
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', id: 'dashboard' },
        { name: 'Projects', icon: Clipboard, path: '/projects', id: 'projects' },
        { name: 'Employees', icon: Users, path: '/employees', id: 'employees' },
        { name: 'Inventory', icon: Box, path: '/inventory', id: 'inventory' },
        { name: 'Reports', icon: BarChart2, path: '/reports', id: 'reports' },
    ];

    // Function to close sidebar when navigation item is clicked
    const handleNavClick = () => {
        if (isMobile && isOpen) {
            onToggle(); // This will toggle the sidebar closed on mobile
        }
    };

    return (
        <>
            {/* Backdrop overlay for mobile - shown when sidebar is open */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30 transition-opacity duration-300"
                    onClick={onToggle}
                    aria-hidden="true"
                />
            )}

            {/* Main Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen bg-gray-800 shadow-lg transition-all duration-300 ease-in-out z-40
          ${isMobile ? 'w-full' : (isOpen ? 'w-64' : 'w-16')} 
          ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
          <span className={`text-white font-bold whitespace-nowrap overflow-hidden transition-all duration-300 ${!isOpen ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
            Tom's Construction
          </span>
                    <button
                        onClick={onToggle}
                        className="p-1 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                    >
                        {isOpen ? (
                            <ChevronRight className="h-5 w-5 text-white" />
                        ) : (
                            <Menu className="h-5 w-5 text-white" />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                    {navigation.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={handleNavClick}
                            className={`flex items-center px-2 py-3 text-sm font-medium rounded-md transition-all duration-200
                ${currentPath === item.path
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            aria-current={currentPath === item.path ? 'page' : undefined}
                        >
                            <div className="flex-shrink-0 h-6 w-6">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 w-32' : 'opacity-0 w-0'}`}>
                {item.name}
              </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Header - Only visible on mobile when sidebar is closed */}
            {isMobile && !isOpen && (
                <div className="fixed top-0 left-0 right-0 bg-gray-900 h-16 z-20 flex items-center px-4">
                    <button
                        onClick={onToggle}
                        className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Open sidebar"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <span className="text-white text-lg font-bold ml-4">Tom's Construction</span>
                </div>
            )}
        </>
    );
};

export default Sidebar;