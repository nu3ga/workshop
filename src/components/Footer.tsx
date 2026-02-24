import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center text-white">
            <Logo className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Profesionāls darba aizsardzības ekipējums Jūsu drošībai. Sertificēta kvalitāte un uzticami zīmoli.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-600 hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-600 hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-600 hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Sadaļas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">Katalogs</Link></li>
            <li><Link to="/advice" className="hover:text-orange-500 transition-colors">Ekspertu Padomi</Link></li>
            <li><Link to="/b2b" className="hover:text-orange-500 transition-colors">B2B Klientiem</Link></li>
            <li><Link to="/stores" className="hover:text-orange-500 transition-colors">Veikali</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">Par Mums</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-bold mb-4">Atbalsts</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-orange-500 transition-colors">BUJ</Link></li>
            <li><Link to="/shipping" className="hover:text-orange-500 transition-colors">Piegāde</Link></li>
            <li><Link to="/returns" className="hover:text-orange-500 transition-colors">Atgriešana</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privātuma Politika</Link></li>
            <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Lietošanas Noteikumi</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Kontakti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <span>Rīga, Brīvības iela 123, LV-1001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500 shrink-0" />
              <span>+371 20 123 456</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500 shrink-0" />
              <span>info@safetygear.lv</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2024 WORKSHOP. Visas tiesības aizsargātas.</p>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-600" />
          <span>Droši maksājumi ar Stripe & PayPal</span>
        </div>
      </div>
    </footer>
  );
}
