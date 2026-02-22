import { Link, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { User, Mail, Lock, EyeOff, ArrowRight, Building2 } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center p-6 max-w-md mx-auto font-sans">
      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-orange-50 text-orange-600 mb-6 shadow-sm ring-4 ring-orange-50/50">
            <User className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Izveidot kontu</h1>
          <p className="text-slate-500 mt-2 text-sm font-medium">Pievienojies un saņem labākos piedāvājumus</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Vārds</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="text" 
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder-slate-400"
                  placeholder="Jānis"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Uzvārds</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="text" 
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder-slate-400"
                  placeholder="Bērziņš"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">E-pasts</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
              <input 
                type="email" 
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder-slate-400"
                placeholder="vards@uznemums.lv"
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Parole</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
              <input 
                type="password" 
                className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder-slate-400"
                placeholder="••••••••"
              />
              <button type="button" className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 transition-colors">
                <EyeOff className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="flex items-center justify-center size-5 rounded border border-slate-300 bg-white">
              <input type="checkbox" className="opacity-0 absolute" />
            </div>
            <span className="text-xs font-medium text-slate-600">Esmu juridiska persona (B2B)</span>
            <Building2 className="w-4 h-4 text-slate-400 ml-auto" />
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-4"
          >
            Reģistrēties
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs font-bold uppercase tracking-wider">
              <span className="px-4 bg-white text-slate-400">Vai turpināt ar</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all group">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 group-hover:scale-110 transition-transform" alt="Google" />
              <span className="text-sm font-bold text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all group">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5 group-hover:scale-110 transition-transform" alt="Facebook" />
              <span className="text-sm font-bold text-slate-700">Facebook</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          Jau ir konts? <Link to="/login" className="font-bold text-orange-600 hover:text-orange-500 hover:underline transition-colors">Pieslēgties</Link>
        </p>
      </div>
    </div>
  );
}