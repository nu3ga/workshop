import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Mail, 
  MapPin, 
  User, 
  TrendingUp, 
  Users, 
  UserPlus,
  Star
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const customerStats = [
  { label: 'Total Customers', value: '8,420', change: '+12% this month', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'New Customers', value: '342', change: '+24 this week', icon: UserPlus, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Returning Rate', value: '42%', change: '+1.2% vs last month', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Avg. LTV', value: '€345.00', change: '+5.4% vs last year', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const customers = [
  { 
    id: 1, 
    name: 'Emma Thompson', 
    email: 'emma.t@example.com', 
    location: 'Berlin, Germany', 
    orders: 12, 
    spent: '€1,450.00', 
    lastOrder: '2 days ago', 
    status: 'Active',
    avatar: 'https://picsum.photos/seed/emma/100/100'
  },
  { 
    id: 2, 
    name: 'Lukas Schmidt', 
    email: 'lukas.s@example.com', 
    location: 'Munich, Germany', 
    orders: 4, 
    spent: '€320.50', 
    lastOrder: '1 week ago', 
    status: 'Active',
    avatar: 'https://picsum.photos/seed/lukas/100/100'
  },
  { 
    id: 3, 
    name: 'Sophie Martin', 
    email: 'sophie.m@example.com', 
    location: 'Paris, France', 
    orders: 1, 
    spent: '€89.00', 
    lastOrder: '3 months ago', 
    status: 'Inactive',
    avatar: 'https://picsum.photos/seed/sophie/100/100'
  },
  { 
    id: 4, 
    name: 'Marcus Johnson', 
    email: 'marcus.j@example.com', 
    location: 'London, UK', 
    orders: 24, 
    spent: '€3,240.00', 
    lastOrder: '1 day ago', 
    status: 'VIP',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  { 
    id: 5, 
    name: 'Anna Kowalski', 
    email: 'anna.k@example.com', 
    location: 'Warsaw, Poland', 
    orders: 8, 
    spent: '€890.00', 
    lastOrder: '2 weeks ago', 
    status: 'Active',
    avatar: 'https://picsum.photos/seed/anna/100/100'
  },
];

// --- Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Inactive': 'bg-slate-50 text-slate-500 border-slate-200/60',
    'VIP': 'bg-purple-50 text-purple-700 border-purple-200/60',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${styles[status] || 'bg-slate-50 text-slate-700'}`}>
      {status}
    </span>
  );
};

export default function Customers() {
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleSelect = (id: number) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter(cid => cid !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Customers</h2>
            <p className="text-slate-500 mt-1 font-medium">View and manage your customer base.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
            <button 
              onClick={() => navigate('/admin/customers/new')}
              className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Add Customer
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {customerStats.map((stat) => (
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
                placeholder="Search customers by name, email, or location..."
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-600 hover:bg-slate-50 h-10 px-4 border border-slate-200">
                <Filter className="mr-2 h-4 w-4" />
                Filters
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
                  <th className="px-6 py-4 font-bold">Customer</th>
                  <th className="px-6 py-4 font-bold">Location</th>
                  <th className="px-6 py-4 font-bold">Orders</th>
                  <th className="px-6 py-4 font-bold">Total Spent</th>
                  <th className="px-6 py-4 font-bold">Last Order</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {customers.map((customer) => (
                  <tr 
                    key={customer.id} 
                    onClick={(e) => {
                      // Prevent navigation if clicking checkbox or action buttons
                      if ((e.target as HTMLElement).closest('input') || (e.target as HTMLElement).closest('button')) return;
                      navigate(`/admin/customers/${customer.id}`);
                    }}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedCustomers.includes(customer.id)}
                        onChange={() => toggleSelect(customer.id)}
                        className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" 
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                          <img src={customer.avatar} alt={customer.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{customer.name}</div>
                          <div className="text-xs text-slate-400 font-medium">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {customer.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {customer.orders}
                    </td>
                    <td className="px-6 py-4 font-black text-slate-900">
                      {customer.spent}
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      {customer.lastOrder}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={customer.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Send Email">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="View Profile">
                          <User className="w-4 h-4" />
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
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">8,420</span> customers
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
