import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, ArrowRight, CreditCard, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex flex-col group w-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 group-hover:text-orange-400 transition-colors">Industrial</span>
            <span className="text-2xl font-black leading-none tracking-tight text-white group-hover:text-slate-200 transition-colors">Safety Gear</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Profesionāls darba aizsardzības ekipējums Jūsu drošībai. Sertificēta kvalitāte, uzticami zīmoli un ekspertu atbalsts katrā solī.
          </p>
          
          <div className="flex gap-4 pt-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="size-10 flex items-center justify-center bg-slate-900 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-orange-500 group">
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 (Span 2) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Veikals</h3>
          <ul className="space-y-3 text-sm font-medium text-slate-400">
            {['Katalogs', 'Jaunumi', 'Izpārdošana', 'Zīmoli', 'B2B Klientiem'].map((item) => (
              <li key={item}>
                <Link to="/catalog" className="hover:text-orange-500 hover:pl-1 transition-all duration-200 block">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 (Span 2) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Atbalsts</h3>
          <ul className="space-y-3 text-sm font-medium text-slate-400">
            {['Piegāde', 'Atgriešana', 'Izmēru tabula', 'BUJ', 'Kontakti'].map((item) => (
              <li key={item}>
                <Link to="/help" className="hover:text-orange-500 hover:pl-1 transition-all duration-200 block">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column (Span 4) */}
        <div className="lg:col-span-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-white font-bold mb-2 text-lg">Saņemiet jaunumus</h3>
          <p className="text-sm text-slate-400 mb-6">Piesakieties jaunumiem un saņemiet 10% atlaidi pirmajam pirkumam.</p>
          
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                placeholder="Jūsu e-pasts" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>
            <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 group">
              Pierakstīties <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-[10px] text-slate-600 mt-4 text-center">
            Piesakoties, Jūs piekrītat mūsu privātuma politikai un noteikumiem.
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Ātra Piegāde</h4>
            <p className="text-xs text-slate-500">Visā Latvijas teritorijā</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">30 Dienu Atgriešana</h4>
            <p className="text-xs text-slate-500">Bez jautājumiem</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Droši Maksājumi</h4>
            <p className="text-xs text-slate-500">SSL Sertificēta drošība</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <p>© 2024 Industrial Safety Gear. Visas tiesības aizsargātas.</p>
        
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privātuma Politika</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Lietošanas Noteikumi</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Sīkdatnes</Link>
        </div>

        <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Payment Icons Placeholder - using text for now or simple svgs if needed, but lucid icons are limited for brands */}
           <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white">VISA</div>
           <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white">MC</div>
           <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white">PAYPAL</div>
        </div>
      </div>
    </footer>
  );
}
