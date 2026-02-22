import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 max-w-md mx-auto text-center font-sans">
      <div className="size-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-sm ring-8 ring-emerald-50/50 animate-bounce">
        <CheckCircle2 className="w-12 h-12 text-emerald-500" />
      </div>
      
      <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Paldies par pasūtījumu!</h1>
      <p className="text-slate-500 mb-8 max-w-xs mx-auto font-medium text-sm">
        Jūsu pasūtījums <span className="font-bold text-slate-900">#ORD-2024-90</span> ir veiksmīgi saņemts un tiek apstrādāts.
      </p>

      <div className="w-full bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100 shadow-sm">
        <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Pasūtījuma kopsavilkums</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
            <span className="text-slate-500 font-medium">Saņēmējs</span>
            <span className="font-bold text-slate-900">Jānis Bērziņš</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
            <span className="text-slate-500 font-medium">Piegāde</span>
            <span className="font-bold text-slate-900 text-right">Omniva<br/><span className="text-xs font-normal text-slate-400">T/C Akropole</span></span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
            <span className="text-slate-500 font-medium">Apmaksa</span>
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Rēķins
            </span>
          </div>
          <div className="pt-1 flex justify-between items-end">
            <span className="text-base font-bold text-slate-900">Kopā</span>
            <span className="text-xl font-black text-orange-600">124.62 €</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <Link 
          to="/" 
          className="flex w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all active:scale-[0.98] items-center justify-center gap-2 group"
        >
          Turpināt iepirkties
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link 
          to="/profile" 
          className="block w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all"
        >
          Skatīt pasūtījumu vēsturi
        </Link>
      </div>
    </div>
  );
}