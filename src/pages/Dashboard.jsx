import { useState } from 'react';
import {
  Calendar,
  Users,
  Clipboard,
  BarChart2,
  Box,
  AlertTriangle,
  Info,
  CheckCircle,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';

const Dashboard = () => {
  const [expandedCards, setExpandedCards] = useState({
    projects: true,
    tasks: true,
    notifications: true
  });

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

  const toggleCard = (card) => {
    setExpandedCards({
      ...expandedCards,
      [card]: !expandedCards[card]
    });
  };

  return (
      <div className="p-4 md:p-6 space-y-6">
        {/* Summary Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <Clipboard className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Active Projects</p>
                <p className="font-semibold text-lg sm:text-xl text-gray-900">4</p>
                <p className="mt-1 text-xs text-gray-500">+1 from last month</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-green-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Team Members</p>
                <p className="font-semibold text-lg sm:text-xl text-gray-900">28</p>
                <p className="mt-1 text-xs text-gray-500">+3 from last month</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Budget Spent</p>
                <p className="font-semibold text-lg sm:text-xl text-gray-900">$4.2M</p>
                <p className="mt-1 text-xs text-gray-500">42% of total</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <Box className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Materials</p>
                <p className="font-semibold text-lg sm:text-xl text-gray-900">32</p>
                <p className="mt-1 text-xs text-gray-500">8 low stock</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects Progress - Collapsible on mobile */}
        <Card hoverable>
          <Card.Header>
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => toggleCard('projects')}>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">Project Progress</h2>
                <button className="ml-2 sm:hidden">
                  {expandedCards.projects ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </button>
              </div>
              <Button variant="secondary" size="sm">View All</Button>
            </div>
          </Card.Header>
          {(expandedCards.projects || window.innerWidth >= 640) && (
              <Card.Body>
                <div className="space-y-4">
                  {projectsData.map(project => (
                      <div key={project.id} className="mb-3">
                        <div className="flex justify-between mb-2 flex-wrap">
                          <span className="text-sm sm:text-md font-medium mr-2">{project.name}</span>
                          <Badge variant={project.status === 'Final Phase' ? 'success' : 'primary'}>
                            {project.status}
                          </Badge>
                        </div>
                        <ProgressBar value={project.progress} />
                        <div className="flex justify-between mt-2 text-xs text-gray-600">
                          <span>Due: {project.dueDate}</span>
                        </div>
                      </div>
                  ))}
                </div>
              </Card.Body>
          )}
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upcoming Tasks - Collapsible on mobile */}
          <Card hoverable>
            <Card.Header>
              <div className="flex items-center cursor-pointer" onClick={() => toggleCard('tasks')}>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 border-l-4 border-indigo-500 pl-3">Upcoming Tasks</h2>
                <button className="ml-2 sm:hidden">
                  {expandedCards.tasks ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </button>
              </div>
            </Card.Header>
            {(expandedCards.tasks || window.innerWidth >= 640) && (
                <Card.Body>
                  <div className="space-y-3">
                    {upcomingTasks.map(task => (
                        <div key={task.id} className="flex items-center p-2 sm:p-3 rounded-md border-b border-gray-100">
                          <div className="bg-blue-100 p-2 rounded-md mr-3">
                            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{task.name}</p>
                            <p className="text-xs text-gray-500 truncate">{task.project}</p>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 pl-2 whitespace-nowrap">{task.date}</span>
                        </div>
                    ))}
                  </div>
                </Card.Body>
            )}
          </Card>

          {/* Notifications - Collapsible on mobile */}
          <Card hoverable>
            <Card.Header>
              <div className="flex items-center cursor-pointer" onClick={() => toggleCard('notifications')}>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 border-l-4 border-emerald-500 pl-3">Notifications</h2>
                <button className="ml-2 sm:hidden">
                  {expandedCards.notifications ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </button>
              </div>
            </Card.Header>
            {(expandedCards.notifications || window.innerWidth >= 640) && (
                <Card.Body>
                  <div className="space-y-2 sm:space-y-3">
                    {notifications.map(notification => (
                        <div key={notification.id} className="flex items-center p-2 sm:p-3 rounded-md border-b border-gray-100 last:border-b-0">
                          <div className={`p-1.5 sm:p-2 rounded-md mr-3 flex items-center justify-center ${
                              notification.type === 'warning' ? 'bg-yellow-100' :
                                  notification.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                          }`}>
                            {notification.type === 'warning' && <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />}
                            {notification.type === 'info' && <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />}
                            {notification.type === 'success' && <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{notification.message}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </Card.Body>
            )}
          </Card>
        </div>
      </div>
  );
};

export default Dashboard;