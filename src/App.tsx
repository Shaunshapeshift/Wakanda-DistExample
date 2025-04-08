import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import ProductTable from './components/ProductTable';
import DistributorPrices from './components/DistributorPrices';
import { products, distributors } from './data';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Product Table Section - 3/2 width */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow">
            <ProductTable products={products} />
          </div>

          {/* Distributor Prices Section - 2/5 width */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <DistributorPrices distributors={distributors} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;