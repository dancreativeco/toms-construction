import { useState, useEffect } from 'react';
import { Plus, Box, Truck, Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import Input from '../components/ui/Input.jsx';
import Badge from '../components/ui/Badge.jsx';
import Table from '../components/ui/Table.jsx';

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
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const categories = ['All', 'Building Materials', 'Metals', 'Wood', 'Finishes', 'Plumbing', 'Electrical', 'Glass', 'Roofing', 'Hardware'];

  // Check screen size
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

  // Filter and sort inventory
  let filteredInventory = inventory.filter(item =>
      (activeCategory === 'All' || item.category === activeCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting if needed
  if (sortConfig.key) {
    filteredInventory.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) {
      return null;
    }

    return sortConfig.direction === 'ascending'
        ? <ChevronUp className="h-4 w-4 inline ml-1" />
        : <ChevronDown className="h-4 w-4 inline ml-1" />;
  };

  // Summary stats
  const totalItems = inventory.length;
  const inStockItems = inventory.filter(item => item.status === 'In Stock').length;
  const lowStockItems = inventory.filter(item => item.status === 'Low Stock').length;
  const categoriesCount = new Set(inventory.map(item => item.category)).size;

  return (
      <div className="p-4 md:p-6 space-y-6">
        {/* Mobile Header with Search and Filters */}
        <div className="md:hidden space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Inventory ({filteredInventory.length})</h2>
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
                placeholder="Search inventory..."
                className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Expandable Filters */}
          {showFilters && (
              <div className="bg-white shadow p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Filter by Category</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-400">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map(category => (
                      <button
                          key={category}
                          className={`px-3 py-1 rounded-md text-sm font-medium ${
                              activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          onClick={() => setActiveCategory(category)}
                      >
                        {category}
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
              <h2 className="text-xl font-medium text-gray-900">Materials Inventory</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="Search inventory..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64"
                />
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Desktop Category Filters */}
        <Card className="hidden md:block">
          <Card.Body>
            <div className="overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? 'primary' : 'secondary'}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Inventory Items - Cards for Mobile, Table for Desktop */}
        {isMobile ? (
            <div className="space-y-4">
              {filteredInventory.map(item => (
                  <Card key={item.id} hoverable>
                    <Card.Body>
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded mr-3">
                          {item.category === 'Building Materials' ? <Box className="h-5 w-5 text-gray-600" /> :
                              item.category === 'Metals' ? <Box className="h-5 w-5 text-gray-600" /> :
                                  item.category === 'Wood' ? '🪵' :
                                      item.category === 'Finishes' ? '🖌️' :
                                          item.category === 'Electrical' ? '⚡' :
                                              item.category === 'Plumbing' ? '🚿' :
                                                  item.category === 'Glass' ? '🪟' :
                                                      item.category === 'Roofing' ? '🏠' :
                                                          item.category === 'Hardware' ? '🔨' :
                                                              <Box className="h-5 w-5 text-gray-600" />
                          }
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="text-xs text-gray-500">Quantity:</span>
                          <p className="font-medium">{item.quantity.toLocaleString()} {item.unit}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Reorder at:</span>
                          <p className="font-medium">{item.reorderLevel.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <Badge variant={item.status === 'In Stock' ? 'success' : 'warning'}>
                          {item.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="secondary" size="sm" className="text-xs px-2 py-1">Edit</Button>
                          <Button variant="secondary" size="sm" className="text-xs px-2 py-1">Order</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
              ))}
            </div>
        ) : (
            <Card>
              <Card.Body>
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Head>
                      <Table.Row>
                        <Table.HeaderCell className="cursor-pointer" onClick={() => requestSort('name')}>
                          Item Name {getSortIcon('name')}
                        </Table.HeaderCell>
                        <Table.HeaderCell className="cursor-pointer" onClick={() => requestSort('category')}>
                          Category {getSortIcon('category')}
                        </Table.HeaderCell>
                        <Table.HeaderCell className="cursor-pointer" onClick={() => requestSort('quantity')}>
                          Quantity {getSortIcon('quantity')}
                        </Table.HeaderCell>
                        <Table.HeaderCell>Unit</Table.HeaderCell>
                        <Table.HeaderCell className="cursor-pointer" onClick={() => requestSort('status')}>
                          Status {getSortIcon('status')}
                        </Table.HeaderCell>
                        <Table.HeaderCell className="cursor-pointer" onClick={() => requestSort('reorderLevel')}>
                          Reorder Level {getSortIcon('reorderLevel')}
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-right">Actions</Table.HeaderCell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      {filteredInventory.map(item => (
                          <Table.Row key={item.id}>
                            <Table.Cell>
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
                            </Table.Cell>
                            <Table.Cell>{item.category}</Table.Cell>
                            <Table.Cell>{item.quantity.toLocaleString()}</Table.Cell>
                            <Table.Cell>{item.unit}</Table.Cell>
                            <Table.Cell>
                              <Badge variant={item.status === 'In Stock' ? 'success' : 'warning'}>
                                {item.status}
                              </Badge>
                            </Table.Cell>
                            <Table.Cell>{item.reorderLevel.toLocaleString()}</Table.Cell>
                            <Table.Cell className="text-right">
                              <Button variant="secondary" size="sm" className="mr-2">Edit</Button>
                              <Button variant="secondary" size="sm">Order</Button>
                            </Table.Cell>
                          </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </Card.Body>
            </Card>
        )}

        {/* Summary Cards - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <Card.Body>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-md bg-blue-100">
                  <Box className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">Total Items</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalItems}</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-md bg-green-100">
                  <Box className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">In Stock</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">{inStockItems}</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-md bg-yellow-100">
                  <Box className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">Low Stock</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">{lowStockItems}</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-md bg-purple-100">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">Categories</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">{categoriesCount}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default Inventory;