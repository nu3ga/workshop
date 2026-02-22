import { Link, useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 glass shadow-sm px-4 py-3 flex items-center justify-between">
        <Link to="/profile" className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold text-charcoal tracking-tight">Pasūtījums #{id}</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
          <span className="material-symbols-outlined">print</span>
        </button>
      </header>

      <main className="px-4 py-6 space-y-6">
        {/* Status Card */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Statuss</span>
            <span className="bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Apstrādē
            </span>
          </div>
          
          {/* Timeline (Simplified) */}
          <div className="relative pl-4 space-y-6 border-l-2 border-gray-100 my-2">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm"></div>
              <p className="text-sm font-bold text-charcoal leading-none">Pasūtījums saņemts</p>
              <p className="text-xs text-gray-400 mt-1">Šodien, 10:42</p>
            </div>
            <div className="relative opacity-50">
              <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-gray-200 border-2 border-white"></div>
              <p className="text-sm font-bold text-charcoal leading-none">Nodots kurjeram</p>
              <p className="text-xs text-gray-400 mt-1">Gaidāms rīt</p>
            </div>
            <div className="relative opacity-50">
              <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-gray-200 border-2 border-white"></div>
              <p className="text-sm font-bold text-charcoal leading-none">Piegādāts</p>
            </div>
          </div>
        </div>

        {/* Items */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-2">Preces</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
            {[1, 2].map((item) => (
              <div key={item} className="p-4 flex gap-3">
                <div className="w-16 h-16 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover mix-blend-multiply rounded-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-charcoal leading-tight mb-1">UVEX Silv-Air 2200</h3>
                  <p className="text-xs text-gray-400 mb-2">FFP2 Respirators</p>
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-medium text-charcoal">10 gab. x €2.50</span>
                    <span className="text-sm font-bold text-charcoal">€25.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-2">Kopsavilkums</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Summa bez PVN</span>
              <span className="font-medium text-charcoal">€100.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Piegāde</span>
              <span className="font-medium text-charcoal">€2.99</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>PVN (21%)</span>
              <span className="font-medium text-charcoal">€21.63</span>
            </div>
            <div className="flex justify-between text-base pt-2 border-t border-dashed border-gray-100 mt-2">
              <span className="font-bold text-charcoal">Kopā</span>
              <span className="font-bold text-primary text-xl">€124.62</span>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-white border border-gray-200 text-charcoal font-bold py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            Lejupielādēt Rēķinu
          </button>
          <button className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover transition-colors">
            Atkārtot Pasūtījumu
          </button>
        </div>
      </main>
    </div>
  );
}
