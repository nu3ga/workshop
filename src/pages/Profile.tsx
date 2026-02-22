import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { 
  ArrowLeft, 
  Settings, 
  Building2, 
  Wallet, 
  CreditCard, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  RotateCcw, 
  Edit2, 
  Plus, 
  FileText, 
  FileSpreadsheet,
  User,
  LogOut
} from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'orders' | 'company'>('orders');

  return (
    <div className="relative flex min-h-screen w-full flex-col mx-auto bg-slate-50 pb-24 md:pb-0 font-sans">
      {/* Header (Mobile Only) */}
      <div className="md:hidden sticky top-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-3 border-b border-slate-200">
        <Link to="/" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight text-center">
          Mans profils
        </h1>
        <Link to="/settings" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <Settings className="w-5 h-5" />
        </Link>
      </div>

      <div className="mx-auto w-full max-w-7xl md:px-6 md:py-8">
        <h1 className="hidden md:block text-3xl font-black text-slate-900 mb-8">Mans Profils</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar (Desktop) */}
          <div className="hidden md:block col-span-1 space-y-6">
            {/* User Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="size-20 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
                  <Building2 className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">SIA Būvnieks PRO</h2>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-blue-100">B2B Klients</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">ID: 882910</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CreditCard className="w-3 h-3" /> Kredītlimits
                  </p>
                  <p className="text-lg font-black text-slate-900">€2,500.00</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Wallet className="w-3 h-3" /> Atlikums
                  </p>
                  <p className="text-lg font-black text-orange-600">€1,240.50</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('orders')}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  activeTab === 'orders' ? "bg-white text-orange-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"
                )}
              >
                <Clock className="w-5 h-5" />
                Pasūtījumi
              </button>
              <button 
                onClick={() => setActiveTab('company')}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  activeTab === 'company' ? "bg-white text-orange-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:bg-white/50 hover:text-slate-900"
                )}
              >
                <Building2 className="w-5 h-5" />
                Uzņēmums
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-white/50 hover:text-slate-900 transition-all">
                <Settings className="w-5 h-5" />
                Iestatījumi
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-5 h-5" />
                Izrakstīties
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Mobile User Card (Hidden on Desktop) */}
            <div className="md:hidden bg-white p-6 mb-6 shadow-sm border-b border-slate-100">
              <div className="flex gap-4 items-center">
                <div className="size-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">SIA Būvnieks PRO</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-blue-100">B2B Klients</span>
                    <span className="text-xs text-slate-400 font-medium">ID: 882910</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CreditCard className="w-3 h-3" /> Kredītlimits
                  </p>
                  <p className="text-xl font-black text-slate-900">€2,500.00</p>
                </div>
                <div className="border-l border-slate-100 pl-6">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Wallet className="w-3 h-3" /> Atlikums
                  </p>
                  <p className="text-xl font-black text-orange-600">€1,240.50</p>
                </div>
              </div>
            </div>

            {/* Mobile Tabs (Hidden on Desktop) */}
            <div className="md:hidden px-4 mb-6">
              <div className="bg-slate-200/50 p-1 rounded-xl flex shadow-inner">
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={clsx(
                    "flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200",
                    activeTab === 'orders' ? "bg-white shadow-sm text-slate-900 ring-1 ring-black/5" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  )}
                >
                  Pasūtījumi
                </button>
                <button 
                  onClick={() => setActiveTab('company')}
                  className={clsx(
                    "flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200",
                    activeTab === 'company' ? "bg-white shadow-sm text-slate-900 ring-1 ring-black/5" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  )}
                >
                  Uzņēmums
                </button>
              </div>
            </div>

            {activeTab === 'orders' ? (
              <>
                {/* Search & Filter */}
                <div className="px-4 md:px-0 mb-6 flex gap-3">
                  <div className="flex-1 relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                    <input 
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm font-medium outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400" 
                      placeholder="Meklēt pasūtījumu..." 
                    />
                  </div>
                  <button className="bg-white border border-slate-200 rounded-xl size-11 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>

                {/* Orders List */}
                <div className="px-4 md:px-0 space-y-4">
                  {/* Order 1 */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                    <div className="flex justify-between items-start mb-4 pl-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-orange-100 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Apstrādē
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Šodien, 10:42</span>
                        </div>
                        <h3 className="font-black text-slate-900 text-lg tracking-tight">#ORD-2024-89</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Summa</p>
                        <p className="font-black text-slate-900 text-lg">€450.00</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 pt-4 mt-2 flex items-center justify-between pl-2">
                      <div className="flex -space-x-3">
                        {[11, 12, 13].map((i) => (
                          <div key={i} className="size-9 rounded-full bg-slate-100 border-2 border-white ring-1 ring-slate-100 flex items-center justify-center overflow-hidden">
                            <img src={`https://picsum.photos/seed/${i}/100/100`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="size-9 rounded-full bg-slate-50 border-2 border-white ring-1 ring-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                          +3
                        </div>
                      </div>
                      <Link to="/order/ORD-2024-89" className="text-orange-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all group-hover:text-orange-500">
                        Skatīt <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <div className="flex justify-between items-start mb-4 pl-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-emerald-100 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Izpildīts
                          </span>
                          <span className="text-xs text-slate-400 font-medium">12. Oktobris</span>
                        </div>
                        <h3 className="font-black text-slate-900 text-lg tracking-tight">#ORD-2024-42</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Summa</p>
                        <p className="font-black text-slate-900 text-lg">€1,200.00</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-3 mb-5 pl-2">
                       {[14, 15, 16].map((i) => (
                         <div key={i} className="size-12 bg-slate-50 rounded-lg border border-slate-100 p-1">
                            <img src={`https://picsum.photos/seed/${i}/100/100`} className="w-full h-full object-cover rounded mix-blend-multiply" />
                         </div>
                       ))}
                    </div>

                    <div className="flex gap-3 pl-2">
                      <button className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
                        <Download className="w-4 h-4 text-slate-400" /> Rēķins
                      </button>
                      <button className="flex-1 bg-slate-900 text-white rounded-xl py-2.5 text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                        <RotateCcw className="w-4 h-4" /> Atkārtot
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Company Tab Content */
              <div className="px-4 md:px-0 space-y-6">
                {/* Company Details */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" /> Rekvizīti
                    </h3>
                    <button className="text-orange-600 text-xs font-bold hover:underline flex items-center gap-1">
                      <Edit2 className="w-3 h-3" /> Labot
                    </button>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Nosaukums</span>
                      <span className="col-span-2 font-bold text-slate-900">SIA Būvnieks PRO</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Reģ. Nr.</span>
                      <span className="col-span-2 font-bold text-slate-900">40001234567</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">PVN Nr.</span>
                      <span className="col-span-2 font-bold text-slate-900">LV40001234567</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Adrese</span>
                      <span className="col-span-2 font-bold text-slate-900">Brīvības iela 123, Rīga, LV-1010</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-slate-500 font-medium">E-pasts</span>
                      <span className="col-span-2 font-bold text-slate-900">info@buvniekspro.lv</span>
                    </div>
                  </div>
                </div>

                {/* Employees */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                   <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" /> Darbinieki (3)
                    </h3>
                    <button className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-100 transition-colors">
                      <Plus className="w-3.5 h-3.5" /> Pievienot
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">JB</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Jānis Bērziņš</p>
                          <p className="text-xs text-slate-500 font-medium">Administrators</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md font-bold border border-emerald-100">Aktīvs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">LK</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Līga Kalniņa</p>
                          <p className="text-xs text-slate-500 font-medium">Iepirkumu speciālists</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md font-bold border border-emerald-100">Aktīvs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">MP</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Māris Priede</p>
                          <p className="text-xs text-slate-500 font-medium">Noliktavas pārzinis</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-1 rounded-md font-bold border border-slate-200">Neaktīvs</span>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" /> Dokumenti
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-slate-200 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Sadarbības līgums 2024</span>
                          <span className="text-xs text-slate-400 font-medium">PDF • 2.4 MB</span>
                        </div>
                      </div>
                      <button className="size-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-slate-200 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                          <FileSpreadsheet className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Cenu lapa Q1 2024</span>
                          <span className="text-xs text-slate-400 font-medium">XLSX • 1.1 MB</span>
                        </div>
                      </div>
                      <button className="size-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="md:hidden w-full py-4 text-red-500 font-bold text-sm bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                  <LogOut className="w-4 h-4" /> Izrakstīties
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}