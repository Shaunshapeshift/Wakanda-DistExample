import React from 'react';
import { Product } from '../types';

interface ProductTableProps {
  products: Product[];
  selectedRow: string | null;
  setSelectedRow: (irc: string | null) => void;
  tableRef: React.RefObject<HTMLDivElement>;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  selectedRow,
  setSelectedRow,
  tableRef,
  onScroll
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Product List</h2>
      </div>
      <div
        ref={tableRef}
        onScroll={onScroll}
        className="overflow-y-auto max-h-[calc(100vh-24rem)]"
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">House</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand Line</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IRC</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.irc}
                onClick={() => setSelectedRow(product.irc)}
                className={`cursor-pointer hover:bg-gray-50 ${
                  selectedRow === product.irc ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.house}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.brandLine}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.articleType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.irc}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;