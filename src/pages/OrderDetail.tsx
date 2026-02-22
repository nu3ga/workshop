import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Package, 
  CreditCard, 
  Download, 
  RotateCcw,
  Truck
} from 'lucide-react';
import clsx from 'clsx';

export default function OrderDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto pb-20 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 shadow-sm">
        <Link to="/profile" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Pasūtījums #{id || 'ORD-2024-89'}
        </h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Status Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statuss</span>
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-orange-100 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Apstrādē
            </span>
          </div>
          <div className="relative pl-4 border-l-2 border-slate-100 space-y-8">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 size-3 rounded-full bg-green-500 ring-4 ring-white shadow-sm"></div>
              <p className="text-sm font-bold text-slate-900">Pasūtījums saņemts</p>
              <p className="text-xs text-slate-500 mt-0.5">Šodien, 10:42</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 size-3 rounded-full bg-orange-500 ring-4 ring-white shadow-sm"></div>
              <p className="text-sm font-bold text-slate-900">Apmaksa apstiprināta</p>
              <p className="text-xs text-slate-500 mt-0.5">Šodien, 10:45</p>
            </div>
            <div className="relative opacity-40">
              <div className="absolute -left-[21px] top-1 size-3 rounded-full bg-slate-300 ring-4 ring-white"></div>
              <p className="text-sm font-bold text-slate-900">Nodots kurjeram</p>
              <p className="text-xs text-slate-500 mt-0.5">Gaidāms rīt</p>
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Package className="w-4 h-4 text-slate-400" />
              Preces (3)
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {/* Item 1 */}
            <div className="p-4 flex gap-4">
              <div className="size-16 bg-slate-50 rounded-xl border border-slate-100 p-1 shrink-0">
                <img src="https://picsum.photos/seed/11/200/200" className="w-full h-full object-cover rounded-lg mix-blend-multiply" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 truncate">Premium Nitrile Cimdi</h3>
                <p className="text-xs text-slate-500 mb-2">Izmērs: 10/XL • Krāsa: Melna</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">20 gab x 4.50 €</span>
                  <span className="text-sm font-bold text-slate-900">90.00 €</span>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="p-4 flex gap-4">
              <div className="size-16 bg-slate-50 rounded-xl border border-slate-100 p-1 shrink-0">
                <img src="https://picsum.photos/seed/12/200/200" className="w-full h-full object-cover rounded-lg mix-blend-multiply" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 truncate">3M Aizsargbrilles</h3>
                <p className="text-xs text-slate-500 mb-2">Tips: UV Aizsardzība</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">5 gab x 12.00 €</span>
                  <span className="text-sm font-bold text-slate-900">60.00 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-slate-400" />
            Maksājuma informācija
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Summa bez PVN</span>
              <span>371.90 €</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Piegāde (DPD)</span>
              <span>0.00 €</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>PVN (21%)</span>
              <span>78.10 €</span>
            </div>
            <div className="border-t border-slate-100 pt-3 mt-3 flex justify-between items-end">
              <span className="font-bold text-slate-900">Kopā</span>
              <span className="text-xl font-black text-slate-900">450.00 €</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
             <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                <div className="bg-white p-1 rounded border border-slate-200">
                  <CreditCard className="w-4 h-4 text-slate-900" />
                </div>
                <span>Apmaksāts ar karti (**** 4242)</span>
             </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-colors hover:border-slate-300">
            <Download className="w-4 h-4" />
            Rēķins
          </button>
          <button className="flex items-center justify-center gap-2 bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 active:scale-[0.98]">
            <RotateCcw className="w-4 h-4" />
            Atkārtot
          </button>
        </div>
      </div>
    </div>
  );
}