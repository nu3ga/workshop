import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p: string) => {
    if (p === '/' && path === '/') return true;
    if (p !== '/' && path.startsWith(p)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 z-50 w-full bg-white/90 backdrop-blur-md px-2 pb-safe pt-2 border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-4 items-end pb-2">
        <Link to="/" className="group flex flex-col items-center gap-1">
          <div className={clsx(
            "relative flex items-center justify-center px-5 py-1.5 rounded-full transition-all duration-300",
            isActive('/') ? "bg-orange-50 text-orange-600" : "text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50"
          )}>
            <Home className={clsx("w-6 h-6 transition-transform duration-300", isActive('/') && "scale-110")} />
          </div>
          <span className={clsx(
            "text-[10px] font-bold transition-colors duration-300",
            isActive('/') ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
          )}>Sākums</span>
        </Link>
        
        <Link to="/catalog" className="group flex flex-col items-center gap-1">
          <div className={clsx(
            "relative flex items-center justify-center px-5 py-1.5 rounded-full transition-all duration-300",
            isActive('/catalog') ? "bg-orange-50 text-orange-600" : "text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50"
          )}>
            <LayoutGrid className={clsx("w-6 h-6 transition-transform duration-300", isActive('/catalog') && "scale-110")} />
          </div>
          <span className={clsx(
            "text-[10px] font-bold transition-colors duration-300",
            isActive('/catalog') ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
          )}>Katalogs</span>
        </Link>
        
        <Link to="/cart" className="group flex flex-col items-center gap-1 relative">
          <div className={clsx(
            "relative flex items-center justify-center px-5 py-1.5 rounded-full transition-all duration-300",
            isActive('/cart') ? "bg-orange-50 text-orange-600" : "text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50"
          )}>
            <ShoppingCart className={clsx("w-6 h-6 transition-transform duration-300", isActive('/cart') && "scale-110")} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white shadow-sm">2</span>
          </div>
          <span className={clsx(
            "text-[10px] font-bold transition-colors duration-300",
            isActive('/cart') ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
          )}>Grozs</span>
        </Link>
        
        <Link to="/profile" className="group flex flex-col items-center gap-1">
          <div className={clsx(
            "relative flex items-center justify-center px-5 py-1.5 rounded-full transition-all duration-300",
            isActive('/profile') ? "bg-orange-50 text-orange-600" : "text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50"
          )}>
            <User className={clsx("w-6 h-6 transition-transform duration-300", isActive('/profile') && "scale-110")} />
          </div>
          <span className={clsx(
            "text-[10px] font-bold transition-colors duration-300",
            isActive('/profile') ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
          )}>Profils</span>
        </Link>
      </div>
      {/* Safe area spacer for newer iPhones */}
      <div className="h-[env(safe-area-inset-bottom)] w-full"></div>
    </nav>
  );
}