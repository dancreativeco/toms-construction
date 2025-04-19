import { Home, Users, Clipboard, BarChart2, Box } from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = ({ activePage, setActivePage }) => {
  const navigation = [
    { name: 'Dashboard', icon: <Home className="h-6 w-6" />, href: '#', id: 'dashboard' },
    { name: 'Projects', icon: <Clipboard className="h-6 w-6" />, href: '#', id: 'projects' },
    { name: 'Employees', icon: <Users className="h-6 w-6" />, href: '#', id: 'employees' },
    { name: 'Inventory', icon: <Box className="h-6 w-6" />, href: '#', id: 'inventory' },
    { name: 'Reports', icon: <BarChart2 className="h-6 w-6" />, href: '#', id: 'reports' },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white text-xl font-bold">Tom's Construction</span>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              text={item.name}
              active={activePage === item.id}
              onClick={() => setActivePage(item.id)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 