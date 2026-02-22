import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-3 border-b border-gray-100">
        <Link to="/menu" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Kontakti
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-8">
        {/* Map Placeholder */}
        <div className="w-full h-64 bg-gray-200 relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5nUNrEQc6DGHFXn8zgUDVW_EVv6J4N-5yAZRpr6UdriX7vet4VcziFynBWottBZJXIRT4YeQAPW_vB5mNkUxR2HwfqZnmVU4FdEDLwVI3GFeeGumZjgCWA94uaJTLx-zv8PQ8Wunue2WRDlvjJz1O20leFnScXBYMlaZCK0fYlztrUoXi_IOsBBLVqZN1WXSyG5S3OZ0NZADV7xZ96Pl5NrU0mN1t-Uage7cAwvua66GqhBr5T81w73EUfZrTQBns6yyWoICjrg" 
            alt="Map" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
              <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Centrālais Birojs</p>
                <p className="text-[10px] text-slate-500">Brīvības gatve 372, Rīga</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <a href="tel:+37120000000" className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors">
              <div className="size-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <span className="material-symbols-outlined">call</span>
              </div>
              <span className="text-sm font-bold text-slate-900">Zvanīt</span>
              <span className="text-xs text-slate-500">+371 2000 0000</span>
            </a>
            <a href="mailto:info@balticsafety.lv" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
              <div className="size-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="text-sm font-bold text-slate-900">Rakstīt</span>
              <span className="text-xs text-slate-500">info@balticsafety.lv</span>
            </a>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-4">Nosūtīt ziņu</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Tēma</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                <option>Vispārēji jautājumi</option>
                <option>B2B Sadarbība</option>
                <option>Pasūtījuma statuss</option>
                <option>Preču atgriešana</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Ziņa</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none"
                placeholder="Kā mēs varam palīdzēt?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
            >
              Nosūtīt ziņu
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Darba laiks</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Pirmdiena - Piektdiena</span>
                <span className="font-medium text-slate-900">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sestdiena</span>
                <span className="font-medium text-slate-900">10:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Svētdiena</span>
                <span className="text-red-500 font-medium">Slēgts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
