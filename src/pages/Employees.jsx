import { useState } from 'react';
import { Plus } from 'lucide-react';

const Employees = () => {
  const employees = [
    { id: 1, name: 'Robert Chen', role: 'Project Manager', projectsAssigned: 2, experience: '15 years', specialty: 'Commercial Construction', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', role: 'Project Manager', projectsAssigned: 1, experience: '10 years', specialty: 'Residential Development', status: 'Active' },
    { id: 3, name: 'Michael Torres', role: 'Project Manager', projectsAssigned: 1, experience: '12 years', specialty: 'Infrastructure', status: 'Active' },
    { id: 4, name: 'Lisa Wong', role: 'Project Manager', projectsAssigned: 1, experience: '8 years', specialty: 'Retail Construction', status: 'Active' },
    { id: 5, name: 'Carlos Rodriguez', role: 'Civil Engineer', projectsAssigned: 3, experience: '7 years', specialty: 'Structural Engineering', status: 'Active' },
    { id: 6, name: 'Emily Davis', role: 'Project Manager', projectsAssigned: 1, experience: '9 years', specialty: 'Healthcare Construction', status: 'Active' },
    { id: 7, name: 'David Kim', role: 'Electrical Engineer', projectsAssigned: 2, experience: '6 years', specialty: 'Electrical Systems', status: 'Active' },
    { id: 8, name: 'Jennifer Smith', role: 'Architect', projectsAssigned: 3, experience: '11 years', specialty: 'Urban Design', status: 'Active' },
    { id: 9, name: 'Marcus Johnson', role: 'Site Supervisor', projectsAssigned: 1, experience: '14 years', specialty: 'Safety Compliance', status: 'Active' },
    { id: 10, name: 'Hannah Patel', role: 'Mechanical Engineer', projectsAssigned: 2, experience: '5 years', specialty: 'HVAC Systems', status: 'Active' },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      {/* Header with Search */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-medium text-gray-900 mb-2 md:mb-0">Team Members</h2>
        <div className="flex space-x-2">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </button>
        </div>
      </div>
      
      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium text-lg">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{employee.name}</h3>
                  <p className="text-sm text-gray-500">{employee.role}</p>
                </div>
              </div>
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Projects:</span>
                  <span className="text-sm font-medium text-gray-700">{employee.projectsAssigned}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Experience:</span>
                  <span className="text-sm font-medium text-gray-700">{employee.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Specialty:</span>
                  <span className="text-sm font-medium text-gray-700">{employee.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Status:</span>
                  <span className={`text-sm font-medium ${employee.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{employee.status}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">View Details</button>
                <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees; 