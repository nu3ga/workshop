import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-white flex flex-col p-6 max-w-md mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">lock_reset</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Atjaunot paroli</h1>
          <p className="text-slate-500 mt-2">Ievadiet e-pastu, lai saņemtu instrukcijas</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">E-pasts</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="vards@uznemums.lv"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98] mt-2"
          >
            Nosūtīt saiti
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-slate-800 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Atgriezties pie ielogošanās
          </Link>
        </div>
      </div>
    </div>
  );
}
