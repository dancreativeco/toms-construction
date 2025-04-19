import { useState } from 'react';
import { Plus } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    { id: 1, name: 'High-Rise Office Building', client: 'Skyward Developers', type: 'Commercial', value: '$12M', status: 'In Progress', startDate: 'Jan 15, 2025', endDate: 'Jun 15, 2025', progress: 65, manager: 'Robert Chen' },
    { id: 2, name: 'Waterfront Residential Complex', client: 'Harbor Living LLC', type: 'Residential', value: '$8.5M', status: 'In Progress', startDate: 'Mar 03, 2025', endDate: 'Sep 21, 2025', progress: 30, manager: 'Sarah Johnson' },
    { id: 3, name: 'Highway Bridge Expansion', client: 'State DOT', type: 'Infrastructure', value: '$15.2M', status: 'Final Phase', startDate: 'Nov 10, 2024', endDate: 'May 10, 2025', progress: 90, manager: 'Michael Torres' },
    { id: 4, name: 'Shopping Mall Renovation', client: 'Retail Properties Inc.', type: 'Commercial', value: '$5.8M', status: 'Just Started', startDate: 'Apr 01, 2025', endDate: 'Dec 05, 2025', progress: 10, manager: 'Lisa Wong' },
    { id: 5, name: 'Elementary School Building', client: 'County School District', type: 'Educational', value: '$7.3M', status: 'Planning', startDate: 'May 20, 2025', endDate: 'Jul 30, 2026', progress: 0, manager: 'James Peterson' },
    { id: 6, name: 'Hospital Wing Addition', client: 'Memorial Healthcare', type: 'Healthcare', value: '$18.9M', status: 'Planning', startDate: 'Jun 15, 2025', endDate: 'Aug 25, 2026', progress: 0, manager: 'Emily Davis' },
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeTab === 'active') return project.status === 'In Progress' || project.status === 'Final Phase' || project.status === 'Just Started';
        if (activeTab === 'planned') return project.status === 'Planning';
        if (activeTab === 'completed') return project.status === 'Completed';
        return true;
      });
  
  return (
    <div>
      {/* Tabs */}
      <div className="mb-4">
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
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
          </div>
        </div>
      </div>
      
      {/* Add New Project Button */}
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-medium text-gray-900">Projects ({filteredProjects.length})</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Project
        </button>
      </div>
      
      {/* Projects Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
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
    </div>
  );
};

export default Projects; 