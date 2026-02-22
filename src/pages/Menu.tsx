import { Link } from 'react-router-dom';
import { 
  Home, 
  LayoutGrid, 
  Globe, 
  Lightbulb, 
  User, 
  Settings, 
  LogIn, 
  X,
  ChevronRight,
  Factory,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

export default function Menu() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">Industrial</span>
          <span className="text-xl font-black leading-none tracking-tight">Safety Gear</span>
        </div>
        <Link to="/" className="size-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all active:scale-90">
          <X className="w-5 h-5" />
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          <Link to="/" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-all">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Sākums</span>
            <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-orange-500 transition-all" />
          </Link>
          <Link to="/catalog" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-all">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Katalogs</span>
            <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-orange-500 transition-all" />
          </Link>
          <Link to="/b2b" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-all">
              <Factory className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">B2B Risinājumi</span>
            <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-orange-500 transition-all" />
          </Link>
          <Link to="/advice" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-all">
              <Lightbulb className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Padomi & Jaunumi</span>
            <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-orange-500 transition-all" />
          </Link>
          <Link to="/profile" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-all">
              <User className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">Mans Profils</span>
            <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-orange-500 transition-all" />
          </Link>
        </nav>

        <div className="my-8 border-t border-white/10"></div>

        <div className="space-y-6 px-2">
          <h3 className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em]">Kategorijas</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/catalog" className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-orange-500/30 group">
              <span className="text-sm font-bold block mb-1 group-hover:text-orange-500 transition-colors">Darba Cimdi</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">120+ preces</span>
            </Link>
            <Link to="/catalog" className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-orange-500/30 group">
              <span className="text-sm font-bold block mb-1 group-hover:text-orange-500 transition-colors">Apavi</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">85 preces</span>
            </Link>
            <Link to="/catalog" className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-orange-500/30 group">
              <span className="text-sm font-bold block mb-1 group-hover:text-orange-500 transition-colors">Apģērbs</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">200+ preces</span>
            </Link>
            <Link to="/catalog" className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-orange-500/30 group">
              <span className="text-sm font-bold block mb-1 group-hover:text-orange-500 transition-colors">Aizsardzība</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">50+ preces</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-white/10 bg-black/20">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/settings" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-sm font-bold border border-white/5">
            <Settings className="w-4 h-4" />
            Iestatījumi
          </Link>
          <Link to="/login" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-orange-600 hover:bg-orange-500 transition-all text-sm font-bold shadow-lg shadow-orange-600/20">
            <LogIn className="w-4 h-4" />
            Pieslēgties
          </Link>
        </div>
      </div>
    </div>
  );
}
