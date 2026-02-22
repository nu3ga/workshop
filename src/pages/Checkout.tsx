import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { 
  ArrowLeft, 
  Building2, 
  User, 
  Truck, 
  CreditCard, 
  ChevronDown, 
  ArrowRight, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function Checkout() {
  const [customerType, setCustomerType] = useState<'private' | 'business'>('business');

  return (
    <div className="relative flex min-h-screen w-full flex-col mx-auto max-w-md bg-slate-50 pb-96 font-sans">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="px-4 h-14 flex items-center justify-between">
          <Link to="/cart" className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-base font-bold uppercase tracking-wide text-slate-900">Noformēt pasūtījumu</h1>
          <div className="w-8"></div> {/* Spacer for visual balance */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="h-1.5 w-12 bg-orange-600 rounded-full shadow-sm shadow-orange-600/20"></div>
          <div className="h-1.5 w-12 bg-orange-600 rounded-full shadow-sm shadow-orange-600/20"></div>
          <div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
        </div>

        {/* Customer Type Toggle */}
        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 mb-8 flex relative">
          <button 
            onClick={() => setCustomerType('private')}
            className={clsx(
              "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all relative z-10 flex items-center justify-center gap-2",
              customerType === 'private' ? "text-white shadow-md shadow-orange-600/20" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            )}
          >
            <User className="w-4 h-4" /> Privātpersona
          </button>
          <button 
            onClick={() => setCustomerType('business')}
            className={clsx(
              "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all relative z-10 flex items-center justify-center gap-2",
              customerType === 'business' ? "text-white shadow-md shadow-orange-600/20" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            )}
          >
            <Building2 className="w-4 h-4" /> Uzņēmums
          </button>
          
          {/* Animated Background for Toggle */}
          <div 
            className={clsx(
              "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-orange-600 rounded-xl transition-all duration-300 ease-in-out",
              customerType === 'private' ? "left-1.5" : "left-[calc(50%+3px)]"
            )}
          />
        </div>

        {/* Form Section: Contact Info */}
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
            <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              {customerType === 'business' ? <Building2 className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              {customerType === 'business' ? 'Uzņēmuma dati' : 'Personas dati'}
            </h2>
          </div>
          
          <div className="space-y-5">
            {/* B2B Fields */}
            {customerType === 'business' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Uzņēmuma nosaukums</label>
                  <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium placeholder-slate-400" type="text" placeholder="SIA..." defaultValue="SIA Baltic Safety Group" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Reģ. Nr.</label>
                    <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="text" defaultValue="40001234567" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">PVN Nr.</label>
                    <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="text" defaultValue="LV40001234567" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Common Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Vārds</label>
                <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="text" defaultValue="Jānis" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Uzvārds</label>
                <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="text" defaultValue="Bērziņš" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">E-pasts</label>
              <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="email" defaultValue="info@balticsafety.lv" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Tālrunis</label>
              <input className="w-full bg-slate-50 border border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium" type="tel" defaultValue="+371 20000000" />
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
            <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              <Truck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Piegāde</h2>
          </div>
          
          <div className="space-y-3">
            {/* Option 1: Omniva */}
            <label className="relative flex items-center p-4 bg-white border-2 border-orange-500 bg-orange-50/10 rounded-xl cursor-pointer transition-all group shadow-sm">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-orange-500 bg-orange-500 text-white">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <input defaultChecked className="hidden" name="delivery" type="radio" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="block text-sm font-bold text-slate-900">Omniva Pakomāts</span>
                  <span className="block text-sm font-bold text-orange-600">€2.99</span>
                </div>
                <span className="block text-xs text-slate-500 mt-1 font-medium">Piegāde 1-2 darba dienu laikā</span>
              </div>
            </label>
            
            {/* Option 2: DPD */}
            <label className="relative flex items-center p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-slate-50 transition-all group">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-slate-300 group-hover:border-orange-400"></div>
              <input className="hidden" name="delivery" type="radio" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="block text-sm font-bold text-slate-900">DPD Paku Skapis</span>
                  <span className="block text-sm font-bold text-orange-600">€2.99</span>
                </div>
                <span className="block text-xs text-slate-500 mt-1 font-medium">Piegāde 1-2 darba dienu laikā</span>
              </div>
            </label>
            
            {/* Option 3: Courier */}
            <label className="relative flex items-center p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-slate-50 transition-all group">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-slate-300 group-hover:border-orange-400"></div>
              <input className="hidden" name="delivery" type="radio" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="block text-sm font-bold text-slate-900">Kurjers (Līdz durvīm)</span>
                  <span className="block text-sm font-bold text-orange-600">€5.00</span>
                </div>
                <span className="block text-xs text-slate-500 mt-1 font-medium">Piegāde nākamajā darba dienā</span>
              </div>
            </label>
          </div>

          <div className="mt-6">
            <button className="w-full text-left bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 flex items-center justify-between group hover:border-orange-300 hover:bg-white transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">T/C Akropole Alfa</span>
              </div>
              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
            </button>
            <div className="h-48 w-full mt-3 rounded-xl bg-slate-200 overflow-hidden relative border border-slate-200">
              <img alt="Map showing location of delivery point" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold shadow-lg text-slate-900 border border-white/50 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  Rīga, Brīvības gatve 372
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="mb-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
            <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Apmaksa</h2>
          </div>
          
          <div className="space-y-3">
            {/* Option 1: Invoice */}
            <label className="relative flex items-center p-4 bg-orange-50/30 border border-orange-200 rounded-xl cursor-pointer transition-all group">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-orange-500 bg-orange-500 text-white">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <input defaultChecked className="hidden" name="payment" type="radio" />
              <div className="ml-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="block text-sm font-bold text-slate-900">Rēķins (Priekšapmaksa)</span>
                  <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Ieteicams</span>
                </div>
                <span className="block text-xs text-slate-500 mt-1 font-medium">Rēķins tiks nosūtīts uz norādīto e-pastu</span>
              </div>
            </label>
            
            {/* Option 2: Bank Link */}
            <label className="relative flex items-center p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-slate-50 transition-all group">
              <div className="flex items-center justify-center h-5 w-5 rounded-full border-2 border-slate-300 group-hover:border-orange-400"></div>
              <input className="hidden" name="payment" type="radio" />
              <div className="ml-4 flex-1">
                <span className="block text-sm font-bold text-slate-900">Bankas saite</span>
                <div className="flex gap-2 mt-2 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                  <div className="h-5 w-8 bg-slate-200 rounded border border-slate-300"></div>
                  <div className="h-5 w-8 bg-slate-200 rounded border border-slate-300"></div>
                  <div className="h-5 w-8 bg-slate-200 rounded border border-slate-300"></div>
                </div>
              </div>
            </label>
          </div>
        </section>
      </div>

      {/* Bottom Sheet / Order Summary & Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] z-40 pb-safe">
        {/* Expandable Summary Handle */}
        <div className="w-full flex justify-center pt-3 pb-2 cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
        </div>
        <div className="px-4 pb-6 pt-2 max-w-lg mx-auto">
          {/* Totals Grid */}
          <div className="mb-6 space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between text-sm text-slate-500 font-medium">
              <span>Summa bez PVN</span>
              <span className="text-slate-700">100.00 €</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 font-medium">
              <span>Piegāde (Omniva)</span>
              <span className="text-slate-700">2.99 €</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 font-medium pb-3 border-b border-dashed border-slate-200">
              <span>PVN (21%)</span>
              <span className="text-slate-700">21.63 €</span>
            </div>
            <div className="flex justify-between items-end pt-2">
              <span className="text-base font-bold text-slate-900 uppercase tracking-tight">Kopā apmaksai</span>
              <span className="text-2xl font-black text-orange-600">124.62 €</span>
            </div>
          </div>
          
          {/* Action Button */}
          <Link to="/order-success" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] group">
            <span>Apstiprināt pasūtījumu</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-[10px] text-center text-slate-400 mt-4 font-medium">
            Nospiežot pogu, jūs piekrītat <a className="underline hover:text-orange-600 transition-colors" href="#">lietošanas noteikumiem</a>.
          </p>
        </div>
      </div>
    </div>
  );
}