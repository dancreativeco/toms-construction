import { useState, useEffect } from 'react';
import { Plus, Filter, Search} from 'lucide-react';
import Card from '../components/ui/Card.jsx';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    { id: 1, name: 'High-Rise Office Building', client: 'Skyward Developers', type: 'Commercial', value: '$12M', status: 'In Progress', startDate: 'Jan 15, 2025', endDate: 'Jun 15, 2025', progress: 65, manager: 'Robert Chen' },
    { id: 2, name: 'Waterfront Residential Complex', client: 'Harbor Living LLC', type: 'Residential', value: '$8.5M', status: 'In Progress', startDate: 'Mar 03, 2025', endDate: 'Sep 21, 2025', progress: 30, manager: 'Sarah Johnson' },
    { id: 3, name: 'Highway Bridge Expansion', client: 'State DOT', type: 'Infrastructure', value: '$15.2M', status: 'Final Phase', startDate: 'Nov 10, 2024', endDate: 'May 10, 2025', progress: 90, manager: 'Michael Torres' },
    { id: 4, name: 'Shopping Mall Renovation', client: 'Retail Properties Inc.', type: 'Commercial', value: '$5.8M', status: 'Just Started', startDate: 'Apr 01, 2025', endDate: 'Dec 05, 2025', progress: 10, manager: 'Lisa Wong' },
    { id: 5, name: 'Elementary School Building', client: 'County School District', type: 'Educational', value: '$7.3M', status: 'Planning', startDate: 'May 20, 2025', endDate: 'Jul 30, 2026', progress: 0, manager: 'James Peterson' },
    { id: 6, name: 'Hospital Wing Addition', client: 'Memorial Healthcare', type: 'Healthcare', value: '$18.9M', status: 'Planning', startDate: 'Jun 15, 2025', endDate: 'Aug 25, 2026', progress: 0, manager: 'Emily Davis' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      // Reset filters panel when switching to desktop
      if (window.innerWidth >= 768) {
        setShowFilters(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = projects
      .filter(project => {
        // First apply tab filter
        if (activeTab === 'all') return true;
        if (activeTab === 'active') return project.status === 'In Progress' || project.status === 'Final Phase' || project.status === 'Just Started';
        if (activeTab === 'planned') return project.status === 'Planning';
        if (activeTab === 'completed') return project.status === 'Completed';
        return true;
      })
      .filter(project => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
            project.name.toLowerCase().includes(term) ||
            project.client.toLowerCase().includes(term) ||
            project.type.toLowerCase().includes(term) ||
            project.manager.toLowerCase().includes(term)
        );
      });

  return (
      <div className="p-4 md:p-6">
        {/* Mobile Filter and Search */}
        <div className="mb-4 md:hidden">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-900">Projects ({filteredProjects.length})</h2>
            <div className="flex space-x-2">
              <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <Filter className="h-5 w-5" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex items-center justify-center">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Expandable Search */}
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Expandable Filter Tabs */}
          {showFilters && (
              <div className="mb-4 bg-white shadow p-2 rounded-md">
                <div className="flex flex-wrap gap-2">
                  <button
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                          activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setActiveTab('all')}
                  >
                    All
                  </button>
                  <button
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                          activeTab === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setActiveTab('active')}
                  >
                    Active
                  </button>
                  <button
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                          activeTab === 'planned' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setActiveTab('planned')}
                  >
                    Planned
                  </button>
                  <button
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                          activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setActiveTab('completed')}
                  >
                    Completed
                  </button>
                </div>
              </div>
          )}
        </div>

        {/* Desktop Tabs and Controls */}
        <div className="hidden md:block mb-6">
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between">
              <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                <button
                    className={`${
                        activeTab === 'all'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab('all')}
                >
                  All Projects
                </button>
                <button
                    className={`${
                        activeTab === 'active'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab('active')}
                >
                  Active
                </button>
                <button
                    className={`${
                        activeTab === 'planned'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab('planned')}
                >
                  Planned
                </button>
                <button
                    className={`${
                        activeTab === 'completed'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab('completed')}
                >
                  Completed
                </button>
              </nav>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                      type="text"
                      placeholder="Search projects..."
                      className="bg-white w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List - Card view on mobile, Table on desktop */}
        {isMobile ? (
            <div className="space-y-4">
              {filteredProjects.map(project => (
                  <Card key={project.id} hoverable className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-medium text-blue-600">{project.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                      project.status === 'Final Phase' ? 'bg-purple-100 text-purple-800' :
                                          project.status === 'Just Started' ? 'bg-yellow-100 text-yellow-800' :
                                              'bg-gray-100 text-gray-800'
                          }`}>
                      {project.status}
                    </span>
                        </div>

                        <div className="text-sm text-gray-600 mb-3">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-gray-500">Client:</span> {project.client}
                            </div>
                            <div>
                              <span className="text-gray-500">Type:</span> {project.type}
                            </div>
                            <div>
                              <span className="text-gray-500">Value:</span> {project.value}
                            </div>
                            <div>
                              <span className="text-gray-500">Manager:</span> {project.manager}
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <span className="text-xs text-gray-500 block mb-1">Timeline: {project.startDate} - {project.endDate}</span>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                          </div>
                          <span className="text-xs text-gray-500 mt-1 block">{project.progress}% complete</span>
                        </div>

                        <div className="flex justify-end mt-2">
                          <button className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 mr-2">
                            Details
                          </button>
                          <button className="text-sm bg-gray-50 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
        ) : (
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProjects.map(project => (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{project.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{project.client}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{project.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{project.value}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                  project.status === 'Final Phase' ? 'bg-purple-100 text-purple-800' :
                                      project.status === 'Just Started' ? 'bg-yellow-100 text-yellow-800' :
                                          'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{project.startDate} - {project.endDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                          </div>
                          <span className="text-xs text-gray-500">{project.progress}%</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{project.manager}</div>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        )}
      </div>
  );
};

export default Projects;