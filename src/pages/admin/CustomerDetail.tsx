import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Trash2, 
  ShoppingBag, 
  TrendingUp, 
  Clock, 
  CreditCard,
  MoreHorizontal,
  Star,
  MessageSquare
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

// --- Components ---

const Card = ({ title, children, className = "", action }: { title?: string, children: React.ReactNode, className?: string, action?: React.ReactNode }) => (
  <div className={`bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden ${className}`}>
    {title && (
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">{title}</h3>
        {action}
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

const StatCard = ({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="text-xl font-black text-slate-900 tracking-tight">{value}</p>
    </div>
  </div>
);

export default function CustomerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto pb-20">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/customers" className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border border-slate-200">
                <img src="https://picsum.photos/seed/emma/200/200" alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Emma Thompson</h1>
                <p className="text-sm text-slate-500 font-medium">Customer since Oct 2022 • Berlin, Germany</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-rose-600 font-bold text-sm hover:bg-rose-50 flex items-center">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Customer
            </button>
            <button 
              onClick={() => navigate(`/admin/customers/${id}/edit`)}
              className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            label="Total Spent" 
            value="€1,450.00" 
            icon={CreditCard} 
            color="bg-emerald-50 text-emerald-600" 
          />
          <StatCard 
            label="Total Orders" 
            value="12" 
            icon={ShoppingBag} 
            color="bg-blue-50 text-blue-600" 
          />
          <StatCard 
            label="Avg. Order Value" 
            value="€120.83" 
            icon={TrendingUp} 
            color="bg-indigo-50 text-indigo-600" 
          />
          <StatCard 
            label="Last Order" 
            value="2 days ago" 
            icon={Clock} 
            color="bg-amber-50 text-amber-600" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Last Order */}
            <Card title="Last Order" action={<Link to="/admin/orders/7352" className="text-orange-600 hover:text-orange-700 font-bold text-xs">View Order</Link>}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900">Order #ORD-7352</h4>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">Paid</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider border border-amber-100">Unfulfilled</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">October 24, 2023 at 10:24 am</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-900 text-lg">€145.00</p>
                  <p className="text-xs text-slate-500 font-medium">3 Items</p>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shrink-0 relative">
                    <img src={`https://picsum.photos/seed/item${item}/200/200`} alt="" className="w-full h-full object-cover" />
                    <span className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">x1</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Order History */}
            <Card title="Order History">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3 font-bold">Order</th>
                      <th className="px-4 py-3 font-bold">Date</th>
                      <th className="px-4 py-3 font-bold">Payment</th>
                      <th className="px-4 py-3 font-bold">Fulfillment</th>
                      <th className="px-4 py-3 font-bold text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[1, 2, 3, 4, 5].map((order) => (
                      <tr key={order} className="hover:bg-slate-50/80 transition-colors cursor-pointer">
                        <td className="px-4 py-3 font-bold text-slate-900">#ORD-73{52 - order}</td>
                        <td className="px-4 py-3 text-slate-500 font-medium">Oct {24 - order}, 2023</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">Paid</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider border border-blue-100">Fulfilled</span>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900">€{Math.floor(Math.random() * 200) + 50}.00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => navigate('/admin/orders')}
                  className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  View All Orders
                </button>
              </div>
            </Card>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <Card title="Contact Information" action={<button onClick={() => navigate(`/admin/customers/${id}/edit`)} className="text-orange-600 hover:text-orange-700 font-bold text-xs">Edit</button>}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium truncate">emma.t@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+49 152 12345678</span>
                </div>
              </div>
            </Card>

            {/* Default Address */}
            <Card title="Default Address" action={<button onClick={() => navigate(`/admin/customers/${id}/edit`)} className="text-orange-600 hover:text-orange-700 font-bold text-xs">Manage</button>}>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <div className="text-sm font-medium text-slate-600 leading-relaxed">
                  <p className="font-bold text-slate-900">Emma Thompson</p>
                  <p>Musterstraße 123</p>
                  <p>Apartment 4B</p>
                  <p>10115 Berlin</p>
                  <p>Germany</p>
                </div>
              </div>
            </Card>

            {/* Notes */}
            <Card title="Customer Notes">
              <div className="relative">
                <textarea 
                  rows={4}
                  placeholder="Add a note about this customer..."
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-sm resize-none"
                />
                <button className="absolute right-2 bottom-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm">
                  Save Note
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <p className="text-sm text-amber-900 font-medium">Customer requested special packaging for all future orders.</p>
                  <p className="text-xs text-amber-600/70 mt-2 font-bold">Oct 12, 2023 by Admin</p>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card title="Tags">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 flex items-center gap-1">
                  VIP <button className="hover:text-rose-500"><MoreHorizontal className="w-3 h-3" /></button>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 flex items-center gap-1">
                  Wholesale <button className="hover:text-rose-500"><MoreHorizontal className="w-3 h-3" /></button>
                </span>
                <button className="px-2.5 py-1 rounded-lg border border-dashed border-slate-300 text-slate-400 text-xs font-bold hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-all">
                  + Add Tag
                </button>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
