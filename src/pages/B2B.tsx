import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  UserCheck, 
  CreditCard, 
  Percent, 
  Check, 
  Send 
} from 'lucide-react';

export default function B2B() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-900 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">B2B Risinājumi</h1>
        <div className="w-10"></div>
      </header>

      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 bg-orange-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mb-4 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">ISO 45001 Certified</span>
          </div>
          <h1 className="text-4xl font-black text-white leading-none mb-4 tracking-tight">
            Drošība Jūsu <br/> <span className="text-orange-500">Biznesam</span>
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xs mb-8 font-medium">
            Individuāli risinājumi, vairumtirdzniecības cenas un prioritāra apkalpošana Latvijas uzņēmumiem.
          </p>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white py-8 border-b border-slate-100">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Mums uzticas nozares līderi</p>
        <div className="flex justify-center gap-10 px-6 opacity-60 grayscale">
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Building2 className="w-6 h-6" /> RIGA BŪVE</div>
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><HardHat className="w-6 h-6" /> LATVIA CEL</div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="px-4 py-10 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 px-2">Priekšrocības</h2>
        
        {[
          { title: 'Personalizēts piedāvājums', desc: 'Individuāls menedžeris un cenu politika.', icon: UserCheck, color: 'bg-blue-50 text-blue-600' },
          { title: 'Atliktais maksājums', desc: 'Elastīgs apmaksas grafiks līdz 60 dienām.', icon: CreditCard, color: 'bg-emerald-50 text-emerald-600' },
          { title: 'Vairumtirdzniecības cenas', desc: 'Piekļuve speciālajam B2B cenu līmenim.', icon: Percent, color: 'bg-orange-50 text-orange-600' }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-5 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all group">
            <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
              <item.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <div className="px-4 pb-10">
        <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-slate-900/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Kļūt par partneri</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium">Aizpildiet formu un mēs sazināsimies 24h laikā.</p>
            
            <form className="space-y-4">
              <div className="space-y-4">
                <input type="text" placeholder="Uzņēmuma nosaukums" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-medium" />
                <input type="text" placeholder="Reģistrācijas Nr." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-medium" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Tālrunis" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-medium" />
                  <input type="email" placeholder="E-pasts" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2 cursor-pointer group">
                <div className="size-5 rounded border border-slate-600 flex items-center justify-center bg-white/5 group-hover:border-orange-500 transition-colors">
                  <Check className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-slate-400 font-medium group-hover:text-slate-300 transition-colors">Piekrītu datu apstrādes noteikumiem</span>
              </div>
              
              <button type="button" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] group">
                <span>Nosūtīt Pieteikumu</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}