import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Trash2, 
  Minus, 
  Plus, 
  ArrowRight, 
  Sparkles, 
  X,
  CreditCard
} from 'lucide-react';
import clsx from 'clsx';

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'UVEX Silv-Air 2200', price: 2.50, qty: 10, img: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { id: 2, name: 'Bolle Rush+', price: 15.00, qty: 2, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const vat = subtotal * 0.21;
  const total = subtotal + vat;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between w-full">
          <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            Grozs 
            <span className="bg-slate-100 text-slate-500 font-bold text-xs px-2.5 py-1 rounded-full">
              {items.length} preces
            </span>
          </h1>
          <button className="text-xs font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-xl transition-all flex items-center gap-2 border border-transparent hover:border-red-100">
            <Trash2 className="w-4 h-4" />
            Iztīrīt grozu
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Items */}
          <div className="flex-1 space-y-6">
            {/* Savings & Progress Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Free Shipping Progress */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Bezmaksas piegāde</span>
                  <span className="text-xs font-black text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">
                    {subtotal >= 50 ? 'SASNIEGTS!' : `VĒL ${(50 - subtotal).toFixed(2)} €`}
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  {subtotal >= 50 
                    ? "Apsveicam! Jūsu pasūtījumam ir bezmaksas piegāde." 
                    : "Pievienojiet preces par 50.00 €, lai saņemtu bezmaksas piegādi."}
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex items-center gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 size-20 bg-emerald-100/50 rounded-full blur-2xl"></div>
                <div className="size-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm ring-4 ring-white shrink-0 relative z-10">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-black text-emerald-800 uppercase tracking-widest mb-1">Lielisks darījums!</p>
                  <p className="text-xs text-emerald-600 font-medium leading-relaxed">Pievieno vēl 3 preces, lai saņemtu <span className="font-bold underline decoration-emerald-300 underline-offset-2">-5% atlaidi</span> visam grozam.</p>
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row gap-6 shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:border-orange-100 group relative">
                  <div className="size-32 bg-slate-50 rounded-2xl border border-slate-100 p-2 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors mb-1">{item.name}</h3>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Preces kods: #00{item.id}882</p>
                      </div>
                      <button className="text-slate-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all active:scale-90">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
                      <div className="flex items-center gap-8">
                        <div>
                          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Cena par gab.</span>
                          <span className="text-lg font-black text-slate-900">€{item.price.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Kopā</span>
                          <span className="text-lg font-black text-orange-600">€{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-200 shadow-sm">
                        <button className="size-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-xl transition-all active:scale-90">
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-12 text-center text-base font-black text-slate-900">{item.qty}</span>
                        <button className="size-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-xl transition-all active:scale-90">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Summary */}
          <aside className="lg:w-96 shrink-0">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
              <h2 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Kopsavilkums</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-bold">Starpsumma</span>
                  <span className="font-black text-slate-900">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-bold">Piegāde</span>
                  <span className={clsx("font-black", subtotal >= 50 ? "text-emerald-500" : "text-slate-900")}>
                    {subtotal >= 50 ? 'BEZMAKSAS' : '€5.00'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-bold">PVN (21%)</span>
                  <span className="font-black text-slate-900">€{vat.toFixed(2)}</span>
                </div>
                
                <div className="pt-6 border-t border-dashed border-slate-200 mt-6">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Kopā apmaksai</span>
                    <span className="text-3xl font-black text-orange-600 tracking-tighter">€{total.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest text-right">Ieskaitot visus nodokļus</p>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-600/30 flex items-center justify-center gap-3 transition-all active:scale-[0.98] group text-lg">
                  <CreditCard className="w-6 h-6" />
                  Noformēt Pasūtījumu
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link to="/catalog" className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all border border-slate-200">
                  Turpināt iepirkties
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <CreditCard className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Droši maksājumi</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <Trash2 className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Viegla atgriešana</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}