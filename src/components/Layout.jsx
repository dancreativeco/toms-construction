import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

// Layout wrapper for applying consistent page structure
const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < 768;
            setIsMobile(mobileView);

            // Auto-close sidebar on initial mobile view
            if (mobileView && isSidebarOpen) {
                setIsSidebarOpen(false);
            }

            // Auto-open sidebar when switching to desktop
            if (!mobileView && !isSidebarOpen) {
                setIsSidebarOpen(true);
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar - pass toggle function */}
            <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} isMobile={isMobile} />

            {/* Main Content */}
            <main
                className={`flex-1 overflow-y-auto transition-all duration-300 ${
                    isMobile
                        ? 'ml-0 pt-16' // Fixed header height on mobile
                        : isSidebarOpen
                            ? 'ml-64' // Sidebar width
                            : 'ml-16' // Collapsed sidebar width
                }`}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;