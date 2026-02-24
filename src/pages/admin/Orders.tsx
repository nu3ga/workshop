import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Download, 
  MoreHorizontal, 
  Eye, 
  Printer, 
  Archive,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  ChevronDown
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const orderStats = [
  { label: 'Total Revenue', value: '€42,593.00', change: '+18% this month', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Orders Today', value: '156', change: '+12 vs yesterday', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Pending Fulfillment', value: '24', change: 'Requires attention', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Return Rate', value: '2.4%', change: '-0.5% vs last month', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
];

const orders = [
  { 
    id: '#ORD-7352', 
    date: 'Oct 24, 2023', 
    customer: { name: 'Emma Thompson', email: 'emma.t@example.com', avatar: 'https://picsum.photos/seed/emma/100/100' },
    payment: 'Paid', 
    fulfillment: 'Unfulfilled', 
    total: '€145.00', 
    items: 3 
  },
  { 
    id: '#ORD-7351', 
    date: 'Oct 24, 2023', 
    customer: { name: 'Lukas Schmidt', email: 'lukas.s@example.com', avatar: 'https://picsum.photos/seed/lukas/100/100' },
    payment: 'Paid', 
    fulfillment: 'Shipped', 
    total: '€89.50', 
    items: 1 
  },
  { 
    id: '#ORD-7350', 
    date: 'Oct 23, 2023', 
    customer: { name: 'Sophie Martin', email: 'sophie.m@example.com', avatar: 'https://picsum.photos/seed/sophie/100/100' },
    payment: 'Refunded', 
    fulfillment: 'Restocked', 
    total: '€312.00', 
    items: 5 
  },
  { 
    id: '#ORD-7349', 
    date: 'Oct 23, 2023', 
    customer: { name: 'Marcus Johnson', email: 'marcus.j@example.com', avatar: 'https://picsum.photos/seed/marcus/100/100' },
    payment: 'Paid', 
    fulfillment: 'Delivered', 
    total: '€45.00', 
    items: 1 
  },
  { 
    id: '#ORD-7348', 
    date: 'Oct 22, 2023', 
    customer: { name: 'Anna Kowalski', email: 'anna.k@example.com', avatar: 'https://picsum.photos/seed/anna/100/100' },
    payment: 'Pending', 
    fulfillment: 'Unfulfilled', 
    total: '€1,250.00', 
    items: 12 
  },
];

// --- Components ---

const StatusBadge = ({ status, type }: { status: string, type: 'payment' | 'fulfillment' }) => {
  const styles: Record<string, string> = {
    // Payment
    'Paid': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Pending': 'bg-amber-50 text-amber-700 border-amber-200/60',
    'Refunded': 'bg-slate-50 text-slate-600 border-slate-200/60',
    'Failed': 'bg-rose-50 text-rose-700 border-rose-200/60',
    
    // Fulfillment
    'Delivered': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Shipped': 'bg-blue-50 text-blue-700 border-blue-200/60',
    'Unfulfilled': 'bg-amber-50 text-amber-700 border-amber-200/60',
    'Restocked': 'bg-slate-50 text-slate-600 border-slate-200/60',
  };

  const icon = type === 'payment' ? CreditCard : Truck;
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${styles[status] || 'bg-slate-50 text-slate-700'}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
        status === 'Paid' || status === 'Delivered' ? 'bg-emerald-500' :
        status === 'Pending' || status === 'Unfulfilled' ? 'bg-amber-500' :
        status === 'Shipped' ? 'bg-blue-500' :
        'bg-slate-400'
      }`}></span>
      {status}
    </span>
  );
};

export default function Orders() {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Orders</h2>
            <p className="text-slate-500 mt-1 font-medium">Manage customer orders and fulfillment.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5">
              Create Order
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {orderStats.map((stat) => (
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
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md">All Orders</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Unfulfilled</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Unpaid</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Open</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Archived</button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
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
                  <th className="px-6 py-4 font-bold">Order</th>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold">Customer</th>
                  <th className="px-6 py-4 font-bold">Payment</th>
                  <th className="px-6 py-4 font-bold">Fulfillment</th>
                  <th className="px-6 py-4 font-bold text-right">Total</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {orders.map((order) => (
                  <tr 
                    key={order.id} 
                    onClick={(e) => {
                      // Prevent navigation if clicking checkbox or action buttons
                      if ((e.target as HTMLElement).closest('input') || (e.target as HTMLElement).closest('button')) return;
                      navigate(`/admin/orders/${order.id.replace('#', '')}`);
                    }}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-black text-slate-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      {order.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src={order.customer.avatar} alt={order.customer.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{order.customer.name}</div>
                          <div className="text-xs text-slate-400 font-medium">{order.items} items</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={order.payment} type="payment" />
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={order.fulfillment} type="fulfillment" />
                    </td>
                    <td className="px-6 py-4 text-right font-black text-slate-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Print Label">
                          <Printer className="w-4 h-4" />
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
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">156</span> orders
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
