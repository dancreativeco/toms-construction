import { BarChart2, Clipboard, Users, Box, Plus } from 'lucide-react';

const Reports = () => {
  const monthlyData = [
    { name: 'Jan', expense: 320000, revenue: 380000 },
    { name: 'Feb', expense: 350000, revenue: 400000 },
    { name: 'Mar', expense: 380000, revenue: 430000 },
    { name: 'Apr', expense: 400000, revenue: 450000 },
    { name: 'May', expense: 420000, revenue: 480000 },
    { name: 'Jun', expense: 450000, revenue: 520000 },
    { name: 'Jul', expense: 470000, revenue: 540000 },
    { name: 'Aug', expense: 490000, revenue: 560000 },
    { name: 'Sep', expense: 510000, revenue: 590000 },
    { name: 'Oct', expense: 530000, revenue: 610000 },
    { name: 'Nov', expense: 550000, revenue: 640000 },
    { name: 'Dec', expense: 580000, revenue: 680000 },
  ];
  
  const projectData = [
    { name: 'High-Rise Office Building', value: 12000000, progress: 65 },
    { name: 'Waterfront Residential Complex', value: 8500000, progress: 30 },
    { name: 'Highway Bridge Expansion', value: 15200000, progress: 90 },
    { name: 'Shopping Mall Renovation', value: 5800000, progress: 10 },
    { name: 'Elementary School Building', value: 7300000, progress: 0 },
    { name: 'Hospital Wing Addition', value: 18900000, progress: 0 },
  ];
  
  const materialUsageData = [
    { name: 'Building Materials', value: 35 },
    { name: 'Metals', value: 20 },
    { name: 'Wood', value: 15 },
    { name: 'Electrical', value: 10 },
    { name: 'Plumbing', value: 10 },
    { name: 'Finishes', value: 5 },
    { name: 'Other', value: 5 },
  ];
  
  // Calculate financial KPIs
  const totalRevenue = monthlyData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpense = monthlyData.reduce((sum, item) => sum + item.expense, 0);
  const profit = totalRevenue - totalExpense;
  const profitMargin = (profit / totalRevenue * 100).toFixed(1);
  
  // Calculate project KPIs
  const totalProjectValue = projectData.reduce((sum, item) => sum + item.value, 0);
  const completedValue = projectData.reduce((sum, item) => sum + (item.value * item.progress / 100), 0);
  const completionPercentage = (completedValue / totalProjectValue * 100).toFixed(1);
  
  return (
    <div className="space-y-6">
      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue (2025)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">${(totalRevenue / 1000000).toFixed(1)}M</p>
          <p className="mt-1 text-sm text-green-600">+8.2% from last year</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Expenses (2025)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">${(totalExpense / 1000000).toFixed(1)}M</p>
          <p className="mt-1 text-sm text-red-600">+5.4% from last year</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Net Profit (2025)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">${(profit / 1000000).toFixed(1)}M</p>
          <p className="mt-1 text-sm text-green-600">+12.7% from last year</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">Profit Margin</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{profitMargin}%</p>
          <p className="mt-1 text-sm text-green-600">+1.4% from last year</p>
        </div>
      </div>
      
      {/* Revenue vs Expenses Chart */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue vs Expenses (2025)</h3>
        <div className="h-64">
          <div className="flex h-full">
            {monthlyData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col justify-end space-y-1 px-1">
                <div 
                  className="bg-green-500 rounded-t" 
                  style={{ height: `${(item.revenue / 680000) * 100}%` }}
                  title={`Revenue: ${item.revenue.toLocaleString()}`}
                ></div>
                <div 
                  className="bg-red-500 rounded-t" 
                  style={{ height: `${(item.expense / 680000) * 100}%` }}
                  title={`Expense: ${item.expense.toLocaleString()}`}
                ></div>
                <span className="text-xs text-gray-500">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Expenses</span>
          </div>
        </div>
      </div>
      
      {/* Project Performance */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Project Performance</h3>
          <div className="text-sm text-gray-500">
            Overall Completion: <span className="font-semibold">{completionPercentage}%</span>
          </div>
        </div>
        <div className="space-y-4">
          {projectData.map((project, index) => (
            <div key={index} className="p-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{project.name}</span>
                <span className="text-sm text-gray-500">${(project.value / 1000000).toFixed(1)}M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${project.progress > 0 ? 'bg-blue-600' : 'bg-gray-400'}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">Progress</span>
                <span className="text-xs font-medium text-gray-700">{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Materials Usage */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Materials Usage by Category</h3>
        <div className="flex">
          <div className="w-1/2">
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-200">
                {materialUsageData.map((item, index) => {
                  // Calculate the segment's angle
                  const previousSegments = materialUsageData.slice(0, index).reduce((sum, segment) => sum + segment.value, 0);
                  const startAngle = (previousSegments / 100) * 360;
                  const endAngle = ((previousSegments + item.value) / 100) * 360;
                  
                  // Generate a color based on the index
                  const colors = ['#2563EB', '#7C3AED', '#DB2777', '#F59E0B', '#10B981', '#6366F1', '#6B7280'];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div 
                      key={index}
                      className="absolute inset-0"
                      style={{
                        background: `conic-gradient(${color} ${startAngle}deg, ${color} ${endAngle}deg, transparent ${endAngle}deg)`,
                      }}
                    ></div>
                  );
                })}
                <div className="absolute inset-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="space-y-2">
              {materialUsageData.map((item, index) => {
                const colors = ['#2563EB', '#7C3AED', '#DB2777', '#F59E0B', '#10B981', '#6366F1', '#6B7280'];
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: color }}></div>
                    <span className="ml-2 text-sm text-gray-700">{item.name}</span>
                    <div className="flex-grow"></div>
                    <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Reports Links */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Available Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReportLink title="Financial Statement" description="Monthly and quarterly financial reports" icon={<BarChart2 className="h-6 w-6 text-blue-600" />} />
          <ReportLink title="Project Progress" description="Detailed progress reports by project" icon={<Clipboard className="h-6 w-6 text-green-600" />} />
          <ReportLink title="Resource Allocation" description="Staff and equipment allocation" icon={<Users className="h-6 w-6 text-purple-600" />} />
          <ReportLink title="Inventory Status" description="Current inventory levels and orders" icon={<Box className="h-6 w-6 text-yellow-600" />} />
          <ReportLink title="Safety Compliance" description="Safety incidents and compliance reports" icon={<Clipboard className="h-6 w-6 text-red-600" />} />
          <ReportLink title="Custom Reports" description="Create customized reports" icon={<Plus className="h-6 w-6 text-gray-600" />} />
        </div>
      </div>
    </div>
  );
};

// Report Link Component
const ReportLink = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          {icon}
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports; 