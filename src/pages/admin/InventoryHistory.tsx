import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight,
  User,
  Package
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// Mock History Data
const historyItems = [
  { id: 1, date: 'Oct 24, 2023 10:30 AM', product: 'Premium Leather Work Gloves', sku: 'GLV-001', type: 'Adjustment', quantity: -5, reason: 'Damaged', user: 'Admin User' },
  { id: 2, date: 'Oct 24, 2023 09:15 AM', product: 'Heavy Duty Steel Toe Boots', sku: 'BOT-092', type: 'Restock', quantity: +50, reason: 'Purchase Order #PO-102', user: 'System' },
  { id: 3, date: 'Oct 23, 2023 04:45 PM', product: 'High-Vis Safety Jacket', sku: 'JAC-044', type: 'Sale', quantity: -1, reason: 'Order #ORD-7352', user: 'System' },
  { id: 4, date: 'Oct 23, 2023 02:20 PM', product: 'Industrial Safety Goggles', sku: 'GOG-011', type: 'Transfer', quantity: -20, reason: 'To Warehouse B', user: 'Admin User' },
  { id: 5, date: 'Oct 23, 2023 11:00 AM', product: 'Premium Leather Work Gloves', sku: 'GLV-001', type: 'Sale', quantity: -2, reason: 'Order #ORD-7350', user: 'System' },
];

export default function InventoryHistory() {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/inventory" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Inventory History</h1>
              <p className="text-sm text-slate-500 font-medium">Log of all stock movements</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Download className="mr-2 h-4 w-4 text-slate-400" />
              Export Log
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="rounded-[2rem] border border-slate-200/60 bg-white shadow-sm overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by product, SKU or reason..."
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <Filter className="mr-2 h-4 w-4" />
                Filter Type
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold">Product</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold text-right">Quantity</th>
                  <th className="px-6 py-4 font-bold">Reason</th>
                  <th className="px-6 py-4 font-bold">User</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {historyItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4 text-slate-500 font-medium whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">{item.product}</div>
                      <div className="text-xs text-slate-400 font-medium">{item.sku}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider border ${
                        item.type === 'Restock' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        item.type === 'Sale' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        item.type === 'Adjustment' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                        'bg-slate-50 text-slate-700 border-slate-200'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-right font-black ${item.quantity > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {item.quantity > 0 ? `+${item.quantity}` : item.quantity}
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">
                      {item.reason}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <User className="w-3 h-3" />
                        </div>
                        <span className="text-slate-600 font-medium">{item.user}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">842</span> entries
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Previous</button>
              <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
