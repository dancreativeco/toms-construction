import { Calendar, Clipboard, Users, BarChart2, Box } from 'lucide-react';
import SummaryCard from '../components/SummaryCard';

const Dashboard = () => {
  const projectsData = [
    { id: 1, name: 'High-Rise Office Building', progress: 65, status: 'In Progress', dueDate: 'Jun 15, 2025' },
    { id: 2, name: 'Waterfront Residential Complex', progress: 30, status: 'In Progress', dueDate: 'Sep 21, 2025' },
    { id: 3, name: 'Highway Bridge Expansion', progress: 90, status: 'Final Phase', dueDate: 'May 10, 2025' },
    { id: 4, name: 'Shopping Mall Renovation', progress: 10, status: 'Just Started', dueDate: 'Dec 05, 2025' },
  ];
  
  const upcomingTasks = [
    { id: 1, name: 'Foundation Inspection', project: 'Waterfront Residential Complex', date: 'Apr 23, 2025' },
    { id: 2, name: 'Steel Delivery', project: 'High-Rise Office Building', date: 'Apr 25, 2025' },
    { id: 3, name: 'Final Bridge Section Installation', project: 'Highway Bridge Expansion', date: 'Apr 30, 2025' },
  ];
  
  const notifications = [
    { id: 1, type: 'warning', message: 'Cement inventory low - reorder required', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Weather alert: Heavy rain expected tomorrow', time: '5 hours ago' },
    { id: 3, type: 'success', message: 'Highway Bridge milestone completed ahead of schedule', time: '1 day ago' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Active Projects" value="4" icon={<Clipboard className="h-6 w-6 text-blue-500" />} change="+1 from last month" />
        <SummaryCard title="Team Members" value="28" icon={<Users className="h-6 w-6 text-green-500" />} change="+3 from last month" />
        <SummaryCard title="Budget Spent" value="$4.2M" icon={<BarChart2 className="h-6 w-6 text-purple-500" />} change="42% of total" />
        <SummaryCard title="Materials" value="32" icon={<Box className="h-6 w-6 text-yellow-500" />} change="8 low stock" />
      </div>
      
      {/* Projects Progress */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Project Progress</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
        </div>
        <div className="space-y-4">
          {projectsData.map(project => (
            <div key={project.id} className="p-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{project.name}</span>
                <span className="text-sm text-gray-500">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">{project.status}</span>
                <span className="text-xs text-gray-500">Due: {project.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Upcoming Tasks */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Tasks</h2>
          <div className="space-y-3">
            {upcomingTasks.map(task => (
              <div key={task.id} className="flex items-center p-2 border-b border-gray-200">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{task.name}</p>
                  <p className="text-xs text-gray-500">{task.project}</p>
                </div>
                <span className="text-sm text-gray-600">{task.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Notifications */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
          <div className="space-y-3">
            {notifications.map(notification => (
              <div key={notification.id} className="flex p-2 border-b border-gray-200">
                <div className={`p-2 rounded-md mr-3 ${
                  notification.type === 'warning' ? 'bg-yellow-100' : 
                  notification.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <div className={`h-5 w-5 ${
                    notification.type === 'warning' ? 'text-yellow-600' : 
                    notification.type === 'info' ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    {notification.type === 'warning' ? '⚠️' : 
                     notification.type === 'info' ? 'ℹ️' : '✅'}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 