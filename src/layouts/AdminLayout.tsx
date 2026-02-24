import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Menu, 
  X,
  LogOut,
  ChevronDown,
  HelpCircle,
  Tag,
  ClipboardList,
  Megaphone
} from 'lucide-react';
import Logo from '../components/Logo';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Inventory', href: '/admin/inventory', icon: ClipboardList },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Discounts', href: '/admin/discounts', icon: Tag },
    { name: 'Marketing', href: '/admin/marketing', icon: Megaphone },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900 selection:bg-orange-500/20 selection:text-orange-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#0F172A] text-slate-300 transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r border-slate-800 flex flex-col shadow-2xl lg:shadow-none
      `}>
        {/* Logo Area */}
        <div className="h-20 flex items-center px-8 border-b border-slate-800/50">
          <Logo className="h-8 text-white w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
          <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Main Menu
          </div>
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group relative
                  ${active 
                    ? 'text-white bg-white/10 shadow-[0_1px_10px_rgba(0,0,0,0.2)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <item.icon className={`mr-3 h-5 w-5 transition-colors duration-200 ${active ? 'text-orange-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
                {item.name}
                {active && (
                  <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800/50 space-y-2">
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-400 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
            <HelpCircle className="mr-3 h-5 w-5 text-slate-500" />
            Support
          </button>
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-400 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="mr-3 h-5 w-5 text-slate-500" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F8FAFC]">
        {/* Top Header - Glassmorphism */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 h-20 flex items-center justify-between px-4 sm:px-8 transition-all duration-200">
          <div className="flex items-center flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 mr-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center max-w-md w-full">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-100/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:shadow-lg transition-all duration-200 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/80 transition-all relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
            </button>
            
            <div className="h-8 w-px bg-slate-200" />
            
            <button className="flex items-center space-x-3 group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">Admin User</p>
                <p className="text-xs text-slate-500">Store Manager</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-white shadow-sm flex items-center justify-center text-orange-600 font-bold text-sm group-hover:shadow-md transition-all">
                AD
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
