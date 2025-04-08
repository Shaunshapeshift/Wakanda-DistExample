import React, { useState, useRef } from 'react';
import { MenuIcon, X, Search } from 'lucide-react';
import ProductTable from './components/ProductTable';
import DistributorPrices from './components/DistributorPrices';
import { products, distributors } from './data';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const productTableRef = useRef<HTMLDivElement>(null);
  const distributorTableRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollingDiv: HTMLDivElement, otherDiv: HTMLDivElement | null) => {
    if (otherDiv) {
      otherDiv.scrollTop = scrollingDiv.scrollTop;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">
                Product Pricing Dashboard
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Reports</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800">Dashboard</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800">Reports</a>
            </div>
          </div>
        )}
      </nav>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">House</label>
              <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="">All Houses</option>
                <option value="Chloe">Chloe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="">All Brands</option>
                <option value="Chloe Nomade EDP">Chloe Nomade EDP</option>
                <option value="Chloe Nomade EDT">Chloe Nomade EDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Distributor</label>
              <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="">All Distributors</option>
                {distributors.map(dist => (
                  <option key={dist.customerNumber} value={dist.name}>{dist.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-gray-300 rounded-md shadow-sm p-2 pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Product Table Section - 3/2 width */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow">
            <ProductTable
              products={products}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              tableRef={productTableRef}
              onScroll={(e) => handleScroll(e.target as HTMLDivElement, distributorTableRef.current)}
            />
          </div>

          {/* Distributor Prices Section - 2/5 width */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <DistributorPrices
              distributors={distributors}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              tableRef={distributorTableRef}
              onScroll={(e) => handleScroll(e.target as HTMLDivElement, productTableRef.current)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;