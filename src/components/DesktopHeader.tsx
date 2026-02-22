import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Phone, Mail, Heart } from 'lucide-react';
import clsx from 'clsx';

export default function DesktopHeader() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Sākums', path: '/' },
    { name: 'Katalogs', path: '/catalog' },
    { name: 'Padomi', path: '/advice' },
    { name: 'B2B', path: '/b2b' },
    { name: 'Par Mums', path: '/about' },
    { name: 'Kontakti', path: '/contact' },
  ];

  return (
    <header className="hidden md:block sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-400 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3 h-3" /> +371 20 123 456
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-3 h-3" /> info@safetygear.lv
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/shipping" className="hover:text-white transition-colors">Piegāde</Link>
            <Link to="/returns" className="hover:text-white transition-colors">Atgriešana</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="flex flex-col shrink-0 group">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 group-hover:text-orange-500 transition-colors">Industrial</span>
          <span className="text-2xl font-black leading-none tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">Safety Gear</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-2xl relative group">
          <input 
            type="text" 
            placeholder="Meklēt preces (piem. cimdi, apavi)..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder-slate-400 group-hover:bg-white group-hover:shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/profile" className="p-3 hover:bg-slate-50 rounded-xl text-slate-600 hover:text-slate-900 transition-colors relative group">
            <User className="w-6 h-6" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Profils</span>
          </Link>
          <Link to="/profile" className="p-3 hover:bg-slate-50 rounded-xl text-slate-600 hover:text-slate-900 transition-colors relative group">
            <Heart className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Vēlmes</span>
          </Link>
          <Link to="/cart" className="p-3 hover:bg-slate-50 rounded-xl text-slate-600 hover:text-slate-900 transition-colors relative group">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white">2</span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Grozs</span>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-2 py-4 pr-6 border-r border-slate-100 font-bold text-slate-900 hover:text-orange-600 transition-colors">
              <Menu className="w-5 h-5" />
              Visas kategorijas
            </button>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap",
                  location.pathname === link.path 
                    ? "text-orange-600 border-orange-600" 
                    : "text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-200"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
