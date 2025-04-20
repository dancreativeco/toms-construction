import { useState, useEffect } from 'react';
import { Plus, Search, Filter, X} from 'lucide-react';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import Input from '../components/ui/Input.jsx';
import Badge from '../components/ui/Badge.jsx';

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
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile screen
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

  // Generate filters from employee data
  const roles = ['All', ...new Set(employees.map(employee => employee.role))];

  const filteredEmployees = employees.filter(employee => {
    // First apply role filter
    if (activeFilter !== 'All' && employee.role !== activeFilter) return false;

    // Then apply search filter
    return !(searchTerm && !employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !employee.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !employee.specialty.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
      <div className="p-4 md:p-6 space-y-6">
        {/* Mobile Header with Search and Filters */}
        <div className="md:hidden space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Team ({filteredEmployees.length})</h2>
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

          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search team members..."
                className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Expandable Filters */}
          {showFilters && (
              <div className="bg-white shadow p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Filter by Role</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-400">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {roles.map(role => (
                      <button
                          key={role}
                          className={`px-3 py-1 rounded-md text-sm font-medium ${
                              activeFilter === role ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          onClick={() => setActiveFilter(role)}
                      >
                        {role}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </div>

        {/* Desktop Header with Search and Add */}
        <Card className="hidden md:block">
          <Card.Body>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-medium text-gray-900">Team Members</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm text-gray-600">Filter:</span>
                  <select
                      className="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                  >
                    {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <Input
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64"
                />
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Employee
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Employee Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEmployees.map(employee => (
              <Card key={employee.id} hoverable>
                <Card.Body>
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 rounded-full h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium text-base sm:text-lg">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">{employee.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">{employee.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">Projects:</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{employee.projectsAssigned}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">Experience:</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{employee.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">Specialty:</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[150px]">{employee.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">Status:</span>
                      <Badge variant={employee.status === 'Active' ? 'success' : 'error'}>
                        {employee.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="secondary" size="sm" className="text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-1">View Details</Button>
                    <Button variant="secondary" size="sm" className="text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-1">Edit</Button>
                  </div>
                </Card.Body>
              </Card>
          ))}
        </div>
      </div>
  );
};

export default Employees;