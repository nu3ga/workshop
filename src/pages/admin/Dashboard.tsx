import React from 'react';
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreHorizontal,
  Calendar,
  Package,
  AlertCircle,
  Clock,
  MapPin,
  CreditCard,
  Activity,
  ChevronRight,
  BrainCircuit,
  Target,
  Zap,
  Truck,
  ShoppingBag,
  BarChart2,
  RefreshCw,
  Download,
  Filter
} from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';

// --- Mock Data ---

const kpis = [
  { name: 'Gross Revenue', value: '€124,563.00', change: '+14.5%', trend: 'up', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-500/10', sparkline: 'emerald' },
  { name: 'Net Profit', value: '€42,180.50', change: '+18.2%', trend: 'up', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-500/10', sparkline: 'indigo' },
  { name: 'Conversion Rate', value: '3.24%', change: '-1.1%', trend: 'down', icon: Target, color: 'text-rose-600', bg: 'bg-rose-500/10', sparkline: 'rose' },
  { name: 'Avg. Order Value', value: '€99.81', change: '+5.4%', trend: 'up', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-500/10', sparkline: 'blue' },
];

const aiInsights = [
  { id: 1, type: 'opportunity', text: 'Demand for "Winter Work Gloves" predicted to rise 40% next week due to weather forecasts.', action: 'Review Stock' },
  { id: 2, type: 'warning', text: 'Cart abandonment rate increased by 2.4% on mobile devices in the last 24h.', action: 'View Analytics' },
  { id: 3, type: 'success', text: 'B2B Campaign "Spring Restock" is currently yielding a 4.2x ROAS.', action: 'Scale Budget' }
];

const fulfillmentFunnel = [
  { stage: 'Unfulfilled', count: 42, color: 'bg-amber-500', width: '100%' },
  { stage: 'Picking', count: 18, color: 'bg-blue-500', width: '75%' },
  { stage: 'Packed', count: 124, color: 'bg-indigo-500', width: '60%' },
  { stage: 'Shipped', count: 892, color: 'bg-emerald-500', width: '40%' }
];

const topProducts = [
  { id: 1, name: 'Premium Leather Work Gloves', sku: 'GLV-001', sales: 245, revenue: '€8,575', stock: 45, status: 'In Stock', image: 'https://picsum.photos/seed/glove/100/100' },
  { id: 2, name: 'Heavy Duty Steel Toe Boots', sku: 'BOT-092', sales: 182, revenue: '€23,660', stock: 12, status: 'Low Stock', image: 'https://picsum.photos/seed/boot/100/100' },
  { id: 3, name: 'High-Vis Safety Jacket', sku: 'JAC-044', sales: 156, revenue: '€6,240', stock: 0, status: 'Out of Stock', image: 'https://picsum.photos/seed/jacket/100/100' },
  { id: 4, name: 'Industrial Safety Goggles', sku: 'GOG-011', sales: 412, revenue: '€10,300', stock: 156, status: 'In Stock', image: 'https://picsum.photos/seed/goggles/100/100' },
];

const recentOrders = [
  { id: '#ORD-7352', customer: 'Emma Thompson', date: '2 mins ago', total: '€145.00', status: 'Processing', items: 3 },
  { id: '#ORD-7351', customer: 'Lukas Schmidt', date: '15 mins ago', total: '€89.50', status: 'Shipped', items: 1 },
  { id: '#ORD-7350', customer: 'Sophie Martin', date: '1 hour ago', total: '€312.00', status: 'Delivered', items: 5 },
  { id: '#ORD-7349', customer: 'Marcus Johnson', date: '2 hours ago', total: '€45.00', status: 'Processing', items: 1 },
  { id: '#ORD-7348', customer: 'Anna Kowalski', date: '3 hours ago', total: '€1,250.00', status: 'Review', items: 12 },
];

// --- Components ---

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Processing': 'bg-blue-50 text-blue-700 border-blue-200/50',
    'Shipped': 'bg-indigo-50 text-indigo-700 border-indigo-200/50',
    'Delivered': 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    'Review': 'bg-amber-50 text-amber-700 border-amber-200/50',
    'In Stock': 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    'Low Stock': 'bg-amber-50 text-amber-700 border-amber-200/50',
    'Out of Stock': 'bg-rose-50 text-rose-700 border-rose-200/50',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${styles[status] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
      {status}
    </span>
  );
};

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6 pb-12 max-w-[1600px] mx-auto">
        
        {/* Page Header & Command Center */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Command Center
              </h2>
              <div className="hidden sm:flex items-center px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">System Optimal</span>
              </div>
            </div>
            <p className="text-slate-500 text-base max-w-2xl font-medium">
              Your store generated <strong className="text-slate-900">€4,250.00</strong> today. You have <strong className="text-orange-600">42 unfulfilled orders</strong> requiring attention.
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-11 py-2 px-4 border border-slate-200 shadow-sm hover:shadow-md">
              <Calendar className="mr-2 h-4 w-4 text-slate-400" />
              Last 30 Days
              <ChevronRight className="ml-2 h-4 w-4 text-slate-400" />
            </button>
            <button className="inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-orange-600 text-white hover:bg-orange-500 h-11 py-2 px-5 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          
          {/* KPIs - Top Row */}
          {kpis.map((stat, i) => (
            <div key={stat.name} className="col-span-1 md:col-span-3 lg:col-span-3 group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
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
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-slate-500 mb-1">{stat.name}</h3>
                <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
              </div>
              
              {/* Decorative mini sparkline */}
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-[0.08] pointer-events-none overflow-hidden">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                  <path 
                    d={stat.trend === 'up' ? "M0,20 L20,15 L40,18 L60,5 L80,10 L100,0 L100,20 Z" : "M0,0 L20,10 L40,5 L60,15 L80,12 L100,20 L100,20 L0,20 Z"} 
                    fill="currentColor" 
                    className={stat.color}
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Main Chart - Left 8 Cols */}
          <div className="col-span-1 md:col-span-6 lg:col-span-8 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none opacity-50"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-8 border-b border-slate-100/50 gap-4 relative z-10">
              <div>
                <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">Financial Performance</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Revenue vs. Profit Margin</p>
              </div>
              <div className="flex items-center bg-slate-100/80 p-1 rounded-xl backdrop-blur-sm">
                <button className="px-5 py-2 text-xs font-bold rounded-lg bg-white text-slate-900 shadow-sm">Revenue</button>
                <button className="px-5 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-900 transition-colors">Orders</button>
                <button className="px-5 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-900 transition-colors">AOV</button>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col relative z-10">
              <div className="flex-1 min-h-[320px] w-full flex items-end justify-between gap-2 relative">
                {/* Y-Axis labels */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>€150k</span>
                  <span>€100k</span>
                  <span>€50k</span>
                  <span>€0</span>
                </div>
                
                {/* Grid lines */}
                <div className="absolute left-14 right-0 top-2 bottom-8 flex flex-col justify-between pointer-events-none">
                  {[1,2,3,4].map(i => <div key={i} className="w-full border-b border-slate-100 border-dashed"></div>)}
                </div>

                {/* Bars & Line Overlay */}
                <div className="ml-14 flex-1 flex items-end justify-between gap-2 sm:gap-4 h-[calc(100%-2rem)] z-10 relative">
                  {/* Simulated Line Chart Overlay for Profit Margin */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none z-20" preserveAspectRatio="none">
                    <path d="M 20 200 C 100 180, 200 220, 300 150 C 400 80, 500 120, 600 50 C 700 -20, 800 60, 900 20" fill="none" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_4px_8px_rgba(79,70,229,0.3)]" />
                  </svg>

                  {[45, 72, 30, 85, 55, 90, 65, 80, 40, 60, 75, 100].map((h, i) => (
                    <div key={i} className="w-full relative group h-full flex items-end">
                      {/* Current period (orange) */}
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-slate-800 rounded-t-lg transition-all duration-500 ease-out group-hover:bg-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        style={{ height: `${h}%` }}
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30 flex flex-col items-center">
                        <span>€{(h * 1245).toLocaleString()}</span>
                        <span className="text-[10px] text-slate-400 font-medium">Margin: 34%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* X-Axis */}
              <div className="ml-14 flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                <span className="hidden sm:inline">Jul</span><span className="hidden sm:inline">Aug</span><span className="hidden sm:inline">Sep</span><span className="hidden sm:inline">Oct</span><span className="hidden sm:inline">Nov</span><span className="hidden sm:inline">Dec</span>
              </div>
            </div>
          </div>

          {/* AI Insights - Right 4 Cols */}
          <div className="col-span-1 md:col-span-6 lg:col-span-4 rounded-[2rem] border border-slate-200/50 bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl flex flex-col overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="p-8 border-b border-white/10 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-xl flex items-center tracking-tight">
                  <BrainCircuit className="w-6 h-6 mr-2 text-indigo-400" />
                  Copilot Insights
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest border border-indigo-500/30">
                  AI Active
                </span>
              </div>
              <p className="text-sm text-slate-400 font-medium">Smart recommendations based on your store's real-time data.</p>
            </div>
            
            <div className="p-6 flex-1 overflow-y-auto space-y-4 relative z-10">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group cursor-pointer backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                      insight.type === 'opportunity' ? 'bg-emerald-500/20 text-emerald-400' :
                      insight.type === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      {insight.type === 'opportunity' ? <TrendingUp className="w-5 h-5" /> :
                       insight.type === 'warning' ? <AlertCircle className="w-5 h-5" /> :
                       <Zap className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm text-slate-200 leading-relaxed font-medium mb-3">{insight.text}</p>
                      <button className="text-xs font-bold uppercase tracking-widest text-indigo-400 group-hover:text-indigo-300 flex items-center transition-colors">
                        {insight.action} <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fulfillment Pipeline - 4 Cols */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Fulfillment Pipeline</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Current order statuses</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600">
                <Truck className="w-5 h-5" />
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              {fulfillmentFunnel.map((stage, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-700">{stage.stage}</span>
                    <span className="text-slate-900">{stage.count}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className={`${stage.color} h-full rounded-full transition-all duration-1000`} style={{ width: stage.width }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-3 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition-colors border border-slate-200/50">
              Manage Fulfillment
            </button>
          </div>

          {/* Marketing ROAS - 4 Cols */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Marketing ROI</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Return on Ad Spend (ROAS)</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600">
                <Target className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Simulated Donut Chart */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f97316" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" className="drop-shadow-md" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">3.8x</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mt-1">+0.4x YoY</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full mt-8">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Ad Spend</div>
                  <div className="text-lg font-black text-slate-900">€12,450</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Attr. Rev</div>
                  <div className="text-lg font-black text-slate-900">€47,310</div>
                </div>
              </div>
            </div>
          </div>

          {/* Abandoned Cart Recovery - 4 Cols */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Cart Recovery</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Automated email flows</p>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                <RefreshCw className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="text-center mb-8">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Recovered Revenue (30d)</div>
                <div className="text-4xl font-black text-slate-900 tracking-tight">€8,240.00</div>
                <div className="inline-flex items-center text-xs font-bold text-emerald-600 mt-2 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1" /> +12.5% vs last month
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                    <span className="text-sm font-bold text-slate-700">Flow 1: 1 Hour</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">€4,120</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-sm font-bold text-slate-700">Flow 2: 24 Hours</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">€2,890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Top Products & Recent Orders */}
          
          {/* Top Products - 6 Cols */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <div className="p-6 sm:p-8 border-b border-slate-100/50 flex items-center justify-between bg-slate-50/30">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Top Products</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">By sales volume</p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors flex items-center bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                View All <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] text-slate-400 uppercase tracking-widest bg-white border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-5 font-bold">Product</th>
                    <th className="px-8 py-5 font-bold">Sales</th>
                    <th className="px-8 py-5 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {topProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-2xl object-cover border border-slate-200/60 shadow-sm" referrerPolicy="no-referrer" />
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{product.name}</div>
                            <div className="text-slate-400 text-xs mt-1 font-medium">{product.sku}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="font-black text-slate-900">{product.sales}</div>
                        <div className="text-slate-400 text-xs mt-1 font-medium">{product.revenue}</div>
                      </td>
                      <td className="px-8 py-5">
                        <StatusBadge status={product.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Orders - 6 Cols */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <div className="p-6 sm:p-8 border-b border-slate-100/50 flex items-center justify-between bg-slate-50/30">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Recent Orders</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Latest transactions</p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors flex items-center bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                View All <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] text-slate-400 uppercase tracking-widest bg-white border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-5 font-bold">Order ID</th>
                    <th className="px-8 py-5 font-bold">Customer</th>
                    <th className="px-8 py-5 font-bold">Status</th>
                    <th className="px-8 py-5 font-bold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                      <td className="px-8 py-5">
                        <div className="font-black text-slate-900">{order.id}</div>
                        <div className="text-slate-400 text-xs mt-1 font-medium">{order.date}</div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="font-bold text-slate-700">{order.customer}</div>
                        <div className="text-slate-400 text-xs mt-1 font-medium">{order.items} items</div>
                      </td>
                      <td className="px-8 py-5">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-8 py-5 font-black text-slate-900 text-right text-base">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
