import { Home, Users, Clipboard, BarChart2, Box } from 'lucide-react';

const SidebarItem = ({ icon, text, active, onClick }) => {
  return (
    <button
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
        active 
          ? 'bg-gray-900 text-white' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
      onClick={onClick}
    >
      <div className="mr-3 h-6 w-6">
        {icon}
      </div>
      {text}
    </button>
  );
};

export default SidebarItem; 