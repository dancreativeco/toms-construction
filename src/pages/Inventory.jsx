import { useState } from 'react';
import { Plus, Box, Truck } from 'lucide-react';

const Inventory = () => {
  const inventory = [
    { id: 1, name: 'Cement (50kg bags)', category: 'Building Materials', quantity: 420, unit: 'bags', status: 'In Stock', reorderLevel: 100 },
    { id: 2, name: 'Steel Rebar (12mm)', category: 'Metals', quantity: 580, unit: 'rods', status: 'In Stock', reorderLevel: 150 },
    { id: 3, name: 'Bricks (Standard)', category: 'Building Materials', quantity: 8500, unit: 'pieces', status: 'In Stock', reorderLevel: 2000 },
    { id: 4, name: 'Timber (2x4)', category: 'Wood', quantity: 320, unit: 'pieces', status: 'In Stock', reorderLevel: 100 },
    { id: 5, name: 'Concrete Blocks (8-inch)', category: 'Building Materials', quantity: 750, unit: 'pieces', status: 'In Stock', reorderLevel: 300 },
    { id: 6, name: 'Paint (White, 5L)', category: 'Finishes', quantity: 45, unit: 'cans', status: 'Low Stock', reorderLevel: 50 },
    { id: 7, name: 'PVC Pipes (4-inch)', category: 'Plumbing', quantity: 120, unit: 'pieces', status: 'In Stock', reorderLevel: 50 },
    { id: 8, name: 'Electrical Wire (2.5mm)', category: 'Electrical', quantity: 850, unit: 'meters', status: 'In Stock', reorderLevel: 300 },
    { id: 9, name: 'Glass Panels (4x6ft)', category: 'Glass', quantity: 28, unit: 'pieces', status: 'Low Stock', reorderLevel: 30 },
    { id: 10, name: 'Roof Tiles (Clay)', category: 'Roofing', quantity: 1200, unit: 'pieces', status: 'In Stock', reorderLevel: 500 },
    { id: 11, name: 'Plywood Sheets (4x8ft)', category: 'Wood', quantity: 65, unit: 'sheets', status: 'In Stock', reorderLevel: 40 },
    { id: 12, name: 'Nails (3-inch)', category: 'Hardware', quantity: 15, unit: 'boxes', status: 'Low Stock', reorderLevel: 20 },
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Building Materials', 'Metals', 'Wood', 'Finishes', 'Plumbing', 'Electrical', 'Glass', 'Roofing', 'Hardware'];
  
  const filteredInventory = inventory.filter(item => 
    (activeCategory === 'All' || item.category === activeCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      {/* Header with Search and Add Button */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-medium text-gray-900 mb-2 md:mb-0">Materials Inventory</h2>
        <div className="flex space-x-2">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search inventory..."
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
            Add Item
          </button>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } text-sm whitespace-nowrap`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Inventory Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded">
                        {item.category === 'Building Materials' ? <Box className="h-4 w-4 text-gray-600" /> :
                         item.category === 'Metals' ? <Box className="h-4 w-4 text-gray-600" /> :
                         item.category === 'Wood' ? '🪵' :
                         item.category === 'Finishes' ? '🖌️' :
                         item.category === 'Electrical' ? '⚡' :
                         item.category === 'Plumbing' ? '🚿' :
                         item.category === 'Glass' ? '🪟' :
                         item.category === 'Roofing' ? '🏠' :
                         item.category === 'Hardware' ? '🔨' :
                         <Box className="h-4 w-4 text-gray-600" />
                        }
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.reorderLevel.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-blue-600 hover:text-blue-900">Order</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-md bg-blue-100">
              <Box className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Total Items</h3>
              <p className="text-2xl font-semibold text-gray-900">{inventory.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-md bg-green-100">
              <Box className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">In Stock</h3>
              <p className="text-2xl font-semibold text-gray-900">{inventory.filter(item => item.status === 'In Stock').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-md bg-yellow-100">
              <Box className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Low Stock</h3>
              <p className="text-2xl font-semibold text-gray-900">{inventory.filter(item => item.status === 'Low Stock').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-md bg-purple-100">
              <Truck className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Categories</h3>
              <p className="text-2xl font-semibold text-gray-900">{new Set(inventory.map(item => item.category)).size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory; 