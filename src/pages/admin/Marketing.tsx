import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Mail, 
  Megaphone, 
  TrendingUp, 
  Users, 
  Plus, 
  ArrowRight,
  Target,
  MousePointer,
  DollarSign
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const marketingStats = [
  { label: 'Total Campaigns', value: '12', change: '3 active', icon: Megaphone, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Email Open Rate', value: '24.8%', change: '+1.2% vs last month', icon: Mail, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5% vs last month', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Ad Spend', value: '€1,250.00', change: '€450 remaining budget', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const campaigns = [
  { 
    id: 1, 
    name: 'Summer Sale 2024', 
    type: 'Email', 
    status: 'Active', 
    sent: 12500, 
    opened: 3200, 
    clicked: 850,
    revenue: '€4,500.00',
    startDate: 'Jun 1, 2024'
  },
  { 
    id: 2, 
    name: 'New Collection Launch', 
    type: 'Social Media', 
    status: 'Scheduled', 
    sent: 0, 
    opened: 0, 
    clicked: 0,
    revenue: '€0.00',
    startDate: 'Jul 15, 2024'
  },
  { 
    id: 3, 
    name: 'Abandoned Cart Recovery', 
    type: 'Automation', 
    status: 'Active', 
    sent: 450, 
    opened: 210, 
    clicked: 95,
    revenue: '€1,200.00',
    startDate: 'Ongoing'
  },
  { 
    id: 4, 
    name: 'VIP Customer Exclusive', 
    type: 'Email', 
    status: 'Completed', 
    sent: 500, 
    opened: 380, 
    clicked: 150,
    revenue: '€2,800.00',
    startDate: 'May 10, 2024'
  },
];

// --- Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Scheduled': 'bg-blue-50 text-blue-700 border-blue-200/60',
    'Completed': 'bg-slate-50 text-slate-600 border-slate-200/60',
    'Draft': 'bg-amber-50 text-amber-700 border-amber-200/60',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${styles[status] || 'bg-slate-50 text-slate-700'}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
        status === 'Active' ? 'bg-emerald-500' :
        status === 'Scheduled' ? 'bg-blue-500' :
        status === 'Draft' ? 'bg-amber-500' :
        'bg-slate-400'
      }`}></span>
      {status}
    </span>
  );
};

export default function Marketing() {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Marketing</h2>
            <p className="text-slate-500 mt-1 font-medium">Manage campaigns, automations, and track performance.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/admin/marketing/new')}
              className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Campaign
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {marketingStats.map((stat) => (
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
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md">All Campaigns</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Email</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Social</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-600 hover:bg-slate-50 text-sm font-bold border border-slate-200">Automation</button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-bold">Campaign</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold text-right">Sent</th>
                  <th className="px-6 py-4 font-bold text-right">Opened</th>
                  <th className="px-6 py-4 font-bold text-right">Clicks</th>
                  <th className="px-6 py-4 font-bold text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{campaign.name}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">Started {campaign.startDate}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={campaign.status} />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-600 font-medium bg-slate-100 px-2 py-1 rounded-md text-xs border border-slate-200">{campaign.type}</span>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-500">
                      {campaign.sent.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-500">
                      {campaign.opened > 0 ? `${((campaign.opened / campaign.sent) * 100).toFixed(1)}%` : '-'}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-500">
                      {campaign.clicked > 0 ? `${((campaign.clicked / campaign.opened) * 100).toFixed(1)}%` : '-'}
                    </td>
                    <td className="px-6 py-4 text-right font-black text-slate-900">
                      {campaign.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">1-4</span> of <span className="font-bold text-slate-900">12</span> campaigns
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
