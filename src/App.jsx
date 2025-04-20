import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Layout from "./components/Layout.jsx";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
          <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded">
            <h2>Something went wrong.</h2>
            <p>{this.state.error && this.state.error.toString()}</p>
            <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load route components
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Employees = React.lazy(() => import('./pages/Employees'));
const Inventory = React.lazy(() => import('./pages/Inventory'));
const Reports = React.lazy(() => import('./pages/Reports'));

// Loading Fallback
const LoadingFallback = () => (
    <div className="p-6 text-center">
      <p className="text-lg">Loading...</p>
    </div>
);

// Main Layout Component
const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      if (!mobileView && !isSidebarOpen && !localStorage.getItem('manualClose')) {
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
    if (!isMobile) {
      // On desktop, remember if user manually closed the sidebar
      localStorage.setItem('manualClose', !isSidebarOpen ? null : 'true');
    }
    setIsSidebarOpen(prev => !prev);
  };

  return (
      <div className="flex h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-white overflow-hidden">
        {/* Sidebar - pass toggle function and mobile state */}
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
          <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
  );
};

const App = () => {
  useEffect(() => {
    // Preload the Dashboard component
    import('./pages/Dashboard');
  }, []);

  return (
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Layout><LandingPage /></Layout>} />
              <Route path="/dashboard" element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              } />
              <Route path="/projects" element={
                <MainLayout>
                  <Projects />
                </MainLayout>
              } />
              <Route path="/employees" element={
                <MainLayout>
                  <Employees />
                </MainLayout>
              } />
              <Route path="/inventory" element={
                <MainLayout>
                  <Inventory />
                </MainLayout>
              } />
              <Route path="/reports" element={
                <MainLayout>
                  <Reports />
                </MainLayout>
              } />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
  );
};

export default App;