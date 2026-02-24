import React from 'react';
import { 
  Calendar, 
  Download, 
  TrendingUp, 
  Users, 
  CreditCard, 
  ShoppingBag, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Smartphone,
  Monitor,
  Tablet,
  Globe
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const analyticsStats = [
  { label: 'Total Sales', value: '€124,563.00', change: '+14.5%', trend: 'up', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Online Store Sessions', value: '45,231', change: '+8.2%', trend: 'up', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Returning Customer Rate', value: '24.8%', change: '-1.1%', trend: 'down', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Avg. Order Value', value: '€89.45', change: '+5.4%', trend: 'up', icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const topPages = [
  { path: '/products/leather-gloves', visits: '12,450', bounce: '42%' },
  { path: '/', visits: '8,230', bounce: '35%' },
  { path: '/collections/safety-boots', visits: '6,120', bounce: '48%' },
  { path: '/products/high-vis-jacket', visits: '4,500', bounce: '38%' },
  { path: '/about-us', visits: '2,100', bounce: '65%' },
];

const salesByChannel = [
  { channel: 'Online Store', value: '€85,420', percent: 68, color: 'bg-indigo-500' },
  { channel: 'Facebook Shop', value: '€24,150', percent: 19, color: 'bg-blue-500' },
  { channel: 'Instagram', value: '€12,450', percent: 10, color: 'bg-pink-500' },
  { channel: 'Other', value: '€2,543', percent: 3, color: 'bg-slate-400' },
];

export default function Analytics() {
  return (
    <AdminLayout>
      <div className="space-y-8 pb-12 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Analytics</h2>
            <p className="text-slate-500 mt-1 font-medium">Deep dive into your store's performance.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Calendar className="mr-2 h-4 w-4 text-slate-400" />
              Last 30 Days
            </button>
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Download className="mr-2 h-4 w-4 text-slate-400" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {analyticsStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center text-xs font-bold px-2.5 py-1 rounded-lg ${
                  stat.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3.5 w-3.5 mr-1" /> : <ArrowDownRight className="h-3.5 w-3.5 mr-1" />}
                  {stat.change}
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Sales Chart */}
          <div className="lg:col-span-2 rounded-[2rem] border border-slate-200/60 bg-white shadow-sm p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Total Sales</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Sales over time</p>
              </div>
            </div>
            
            <div className="flex-1 min-h-[300px] w-full flex items-end justify-between gap-2 relative">
               {/* Y-Axis labels */}
               <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>€5k</span>
                  <span>€2.5k</span>
                  <span>€0</span>
                </div>
                
                {/* Grid lines */}
                <div className="absolute left-10 right-0 top-2 bottom-8 flex flex-col justify-between pointer-events-none">
                  {[1,2,3].map(i => <div key={i} className="w-full border-b border-slate-100 border-dashed"></div>)}
                </div>

                {/* Bars */}
                <div className="ml-10 flex-1 flex items-end justify-between gap-2 h-[calc(100%-2rem)] z-10">
                  {[45, 72, 30, 85, 55, 90, 65, 80, 40, 60, 75, 100, 85, 45, 60, 70, 50, 80, 90, 65, 55, 40, 60, 75, 85, 95, 60, 50, 70, 80].map((h, i) => (
                    <div key={i} className="w-full relative group h-full flex items-end">
                      <div 
                        className="w-full bg-indigo-500 rounded-t-sm transition-all duration-300 hover:bg-indigo-600"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
            </div>
            <div className="ml-10 flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Oct 1</span>
              <span>Oct 8</span>
              <span>Oct 15</span>
              <span>Oct 22</span>
              <span>Oct 30</span>
            </div>
          </div>

          {/* Sales by Channel */}
          <div className="lg:col-span-1 rounded-[2rem] border border-slate-200/60 bg-white shadow-sm p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Sales by Channel</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Where your customers buy</p>
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              {salesByChannel.map((channel, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-700">{channel.channel}</span>
                    <span className="text-slate-900">{channel.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className={`${channel.color} h-full rounded-full`} style={{ width: `${channel.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Landing Pages */}
          <div className="lg:col-span-2 rounded-[2rem] border border-slate-200/60 bg-white shadow-sm p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Top Landing Pages</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Most visited pages by session</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase tracking-widest bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-bold">Page Path</th>
                    <th className="px-6 py-4 font-bold text-right">Visits</th>
                    <th className="px-6 py-4 font-bold text-right">Bounce Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {topPages.map((page, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{page.path}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">{page.visits}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">{page.bounce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sessions by Device */}
          <div className="lg:col-span-1 rounded-[2rem] border border-slate-200/60 bg-white shadow-sm p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Sessions by Device</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Mobile vs Desktop</p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-xl shadow-sm mr-3 text-slate-600">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Mobile</span>
                </div>
                <span className="font-black text-slate-900">68%</span>
              </div>
              
              <div className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-xl shadow-sm mr-3 text-slate-600">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Desktop</span>
                </div>
                <span className="font-black text-slate-900">24%</span>
              </div>

              <div className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-xl shadow-sm mr-3 text-slate-600">
                    <Tablet className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">Tablet</span>
                </div>
                <span className="font-black text-slate-900">8%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}
