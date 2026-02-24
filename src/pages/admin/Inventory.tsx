import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Download, 
  ArrowUpDown, 
  AlertTriangle, 
  Package, 
  ArrowRight,
  History,
  Save,
  Truck
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const inventoryStats = [
  { label: 'Total Inventory Value', value: '€45,230.00', change: '+2.4% vs last month', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Low Stock Items', value: '15', change: 'Requires attention', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Incoming Stock', value: '120', change: 'Arriving in 3 days', icon: Truck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

const inventoryItems = [
  { 
    id: 1, 
    name: 'Premium Leather Work Gloves', 
    sku: 'GLV-001', 
    location: 'Warehouse A', 
    available: 45, 
    committed: 12, 
    incoming: 50,
    image: 'https://picsum.photos/seed/glove/100/100'
  },
  { 
    id: 2, 
    name: 'Heavy Duty Steel Toe Boots', 
    sku: 'BOT-092', 
    location: 'Warehouse A', 
    available: 12, 
    committed: 4, 
    incoming: 0,
    image: 'https://picsum.photos/seed/boot/100/100'
  },
  { 
    id: 3, 
    name: 'High-Vis Safety Jacket', 
    sku: 'JAC-044', 
    location: 'Warehouse B', 
    available: 0, 
    committed: 0, 
    incoming: 100,
    image: 'https://picsum.photos/seed/jacket/100/100'
  },
  { 
    id: 4, 
    name: 'Industrial Safety Goggles', 
    sku: 'GOG-011', 
    location: 'Warehouse A', 
    available: 156, 
    committed: 2, 
    incoming: 0,
    image: 'https://picsum.photos/seed/goggles/100/100'
  },
  { 
    id: 5, 
    name: 'Thermal Insulated Socks', 
    sku: 'SOC-005', 
    location: 'Store Front', 
    available: 89, 
    committed: 5, 
    incoming: 20,
    image: 'https://picsum.photos/seed/socks/100/100'
  },
];

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Inventory</h2>
            <p className="text-slate-500 mt-1 font-medium">Track stock levels, adjustments, and transfers.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/admin/inventory/history')}
              className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md"
            >
              <History className="mr-2 h-4 w-4" />
              History
            </button>
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {inventoryStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 mt-1">{stat.label}</div>
                <div className="text-xs font-medium text-slate-400 mt-2">{stat.change}</div>
              </div>
            </div>
          ))}
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
                placeholder="Search inventory by SKU or product name..."
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-bold">Product</th>
                  <th className="px-6 py-4 font-bold">SKU</th>
                  <th className="px-6 py-4 font-bold">Location</th>
                  <th className="px-6 py-4 font-bold text-right">Committed</th>
                  <th className="px-6 py-4 font-bold text-right">Incoming</th>
                  <th className="px-6 py-4 font-bold text-right">Available</th>
                  <th className="px-6 py-4 font-bold text-right">Adjust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="font-bold text-slate-900">{item.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      {item.sku}
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-500">
                      {item.committed}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-blue-600">
                      {item.incoming > 0 ? `+${item.incoming}` : '-'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-black ${item.available < 10 ? 'text-amber-600' : 'text-slate-900'}`}>
                        {item.available}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <input 
                          type="number" 
                          placeholder="0"
                          className="w-16 px-2 py-1 text-right rounded-lg border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <Save className="w-4 h-4" />
                        </button>
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
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">1,248</span> items
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
