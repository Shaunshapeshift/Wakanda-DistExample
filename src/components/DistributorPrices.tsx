import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Distributor } from '../types';

interface DistributorPricesProps {
  distributors: Distributor[];
}

const DistributorPrices: React.FC<DistributorPricesProps> = ({ distributors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDistributor = () => {
    setCurrentIndex((prev) => (prev + 1) % distributors.length);
  };

  const prevDistributor = () => {
    setCurrentIndex((prev) => (prev - 1 + distributors.length) % distributors.length);
  };

  const currentDistributor = distributors[currentIndex];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Distributor Prices</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={prevDistributor}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm font-medium text-gray-600">
            {currentDistributor.name}
          </span>
          <button
            onClick={nextDistributor}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-20rem)]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billing Price</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RRSP</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentDistributor.prices.map((price, idx) => (
              <tr key={price.irc} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm text-gray-900">{price.description}</td>
                <td className="px-4 py-3 text-sm text-gray-900">${price.billingPrice.toFixed(2)}</td>
                <td className="px-4 py-3 text-sm text-gray-900">${price.rrsp.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistributorPrices;