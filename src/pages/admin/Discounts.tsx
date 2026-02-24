import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Tag, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Percent,
  DollarSign,
  Copy
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const discountStats = [
  { label: 'Active Discounts', value: '8', change: '3 expiring soon', icon: Tag, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Redemptions', value: '1,245', change: '+12% this month', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Total Savings', value: '€4,520.00', change: '+8% vs last month', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const discounts = [
  { 
    id: 1, 
    code: 'SUMMER2024', 
    type: 'Percentage', 
    value: '20% off', 
    status: 'Active', 
    used: 452, 
    limit: '∞',
    startDate: 'Jun 1, 2024',
    endDate: 'Aug 31, 2024'
  },
  { 
    id: 2, 
    code: 'WELCOME10', 
    type: 'Fixed Amount', 
    value: '€10.00 off', 
    status: 'Active', 
    used: 890, 
    limit: 'One per customer',
    startDate: 'Jan 1, 2024',
    endDate: '-'
  },
  { 
    id: 3, 
    code: 'FLASH50', 
    type: 'Percentage', 
    value: '50% off', 
    status: 'Expired', 
    used: 150, 
    limit: 'First 150 orders',
    startDate: 'Oct 20, 2023',
    endDate: 'Oct 21, 2023'
  },
  { 
    id: 4, 
    code: 'FREESHIP', 
    type: 'Free Shipping', 
    value: 'Free Shipping', 
    status: 'Scheduled', 
    used: 0, 
    limit: 'Orders over €50',
    startDate: 'Nov 1, 2024',
    endDate: 'Dec 31, 2024'
  },
  { 
    id: 5, 
    code: 'VIP25', 
    type: 'Percentage', 
    value: '25% off', 
    status: 'Active', 
    used: 45, 
    limit: 'VIP Customers only',
    startDate: 'Jan 1, 2024',
    endDate: '-'
  },
];

// --- Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Expired': 'bg-slate-50 text-slate-500 border-slate-200/60',
    'Scheduled': 'bg-blue-50 text-blue-700 border-blue-200/60',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${styles[status] || 'bg-slate-50 text-slate-700'}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
        status === 'Active' ? 'bg-emerald-500' :
        status === 'Scheduled' ? 'bg-blue-500' :
        'bg-slate-400'
      }`}></span>
      {status}
    </span>
  );
};

export default function Discounts() {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Discounts</h2>
            <p className="text-slate-500 mt-1 font-medium">Manage coupon codes and automatic discounts.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/admin/discounts/new')}
              className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Discount
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {discountStats.map((stat) => (
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
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md">All</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Active</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Scheduled</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Expired</button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search discounts..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all w-64"
                />
              </div>
              <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 w-10">
                    <input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                  </th>
                  <th className="px-6 py-4 font-bold">Code / Title</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold">Used</th>
                  <th className="px-6 py-4 font-bold">Date Range</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {discounts.map((discount) => (
                  <tr key={discount.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                          <Tag className="w-5 h-5 text-slate-500" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center gap-2">
                            {discount.code}
                            <button className="text-slate-300 hover:text-slate-500" title="Copy Code">
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{discount.value}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={discount.status} />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-600 font-medium">{discount.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900 font-bold">{discount.used} <span className="text-slate-400 font-normal text-xs">used</span></div>
                      <div className="text-xs text-slate-500">{discount.limit}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      <div className="flex flex-col text-xs">
                        <span>{discount.startDate}</span>
                        <span className="text-slate-400">to {discount.endDate}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">5</span> discounts
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
