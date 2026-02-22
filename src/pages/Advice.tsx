import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ArrowLeft, Share2, Clock, Bookmark, Calendar, ChevronRight, User, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '../components/Footer';

export default function Advice() {
  const categories = [
    { name: 'Visi', active: true },
    { name: 'Cimdi', active: false },
    { name: 'Apavi', active: false },
    { name: 'Likumdošana', active: false },
    { name: 'Instrukcijas', active: false },
  ];

  const featuredArticle = {
    title: 'Kā izvēlēties pareizos aizsargcimdus?',
    excerpt: 'Rokas ir visbiežāk traumētā ķermeņa daļa rūpniecībā. Uzziniet, kādi standarti (EN 388, EN 374) jāņem vērā, izvēloties cimdus dažādiem darba apstākļiem.',
    author: 'Jānis Bērziņš',
    role: 'Darba drošības eksperts',
    date: '12. Oktobris, 2023',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    category: 'Ekspertīze'
  };

  const articles = [
    {
      id: 1,
      title: 'Drošības apavi būvniecībā: S1P vs S3',
      excerpt: 'Kāda ir atšķirība starp S1P un S3 drošības klasēm? Kad nepieciešama ūdensizturība un kad pietiek ar purngala aizsardzību?',
      category: 'Apavi',
      readTime: '3 min',
      date: '10. Oktobris, 2023',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Dzirdes aizsardzības ABC trokšņainā vidē',
      excerpt: 'Ilgstošs troksnis virs 85dB var neatgriezeniski bojāt dzirdi. Apskatām austiņu un tapu efektivitāti dažādās frekvencēs.',
      category: 'Veselība',
      readTime: '4 min',
      date: '05. Oktobris, 2023',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Jaunie MK noteikumi Nr. 34 par IAL lietošanu',
      excerpt: 'Svarīgākās izmaiņas darba aizsardzības likumdošanā, kas stājas spēkā no 2024. gada. Kas jāzina darba devējiem?',
      category: 'Likumdošana',
      readTime: '7 min',
      date: '28. Septembris, 2023',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Elpošanas ceļu aizsardzība: FFP1, FFP2 vai FFP3?',
      excerpt: 'Kuru respiratoru izvēlēties slīpēšanai, krāsošanai vai darbam ar ķimikālijām? Filtru klasifikācijas skaidrojums.',
      category: 'Instrukcijas',
      readTime: '6 min',
      date: '15. Septembris, 2023',
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-xl hover:bg-slate-100 text-slate-900 transition-all active:scale-95">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Ekspertu Padomi</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
              <Bookmark className="w-4 h-4" />
              Saglabātie
            </button>
            <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-900 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Featured Article */}
        <div className="px-4 md:px-8 mt-8 mb-12 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("${featuredArticle.image}")` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg shadow-orange-600/30">
                  {featuredArticle.category}
                </span>
                <span className="text-white/80 text-xs font-bold flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                  <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime} lasīšana
                </span>
                <span className="text-white/80 text-xs font-bold flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 py-1 rounded-lg border border-white/10 hidden md:flex">
                  <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white leading-[1.1] mb-6 max-w-4xl tracking-tighter">
                {featuredArticle.title}
              </h2>
              <p className="text-slate-200 text-base md:text-xl line-clamp-2 md:line-clamp-none mb-8 max-w-3xl leading-relaxed font-medium">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 border-2 border-white/20 overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/author/100/100" className="w-full h-full object-cover" alt={featuredArticle.author} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white">{featuredArticle.author}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{featuredArticle.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories & Search */}
        <div className="px-4 md:px-8 mb-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
            {categories.map((cat, idx) => (
              <button key={idx} className={clsx(
                "whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black transition-all border uppercase tracking-widest",
                cat.active
                  ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20 scale-105" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-orange-200 hover:text-orange-600 hover:shadow-md"
              )}>
                {cat.name}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Meklēt rakstus..." 
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3 pl-12 text-sm font-bold focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all shadow-sm"
            />
            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Article Grid */}
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article, idx) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 hover:border-orange-100 transition-all cursor-pointer group flex flex-col overflow-hidden h-full"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img src={article.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={article.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-xl shadow-xl uppercase tracking-widest border border-white/20">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-orange-600 transition-colors tracking-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed flex-1 font-medium">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                    <span className="text-xs font-black text-orange-600 flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest">
                      Lasīt rakstu <ChevronRight className="w-4 h-4" />
                    </span>
                    <button className="text-slate-300 hover:text-orange-600 transition-all hover:scale-110">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="px-4 md:px-8 mt-24 max-w-7xl mx-auto w-full">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-24 -top-24 size-96 bg-orange-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute -left-24 -bottom-24 size-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                Esi pirmais, kurš uzzina par <span className="text-orange-500">drošības jaunumiem</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-medium">
                Piesakies mūsu apkārtrakstam un saņem ekspertu padomus, likumdošanas izmaiņas un īpašos piedāvājumus tieši savā e-pastā.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Tavs e-pasts" 
                  className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all backdrop-blur-md"
                />
                <button className="bg-orange-600 hover:bg-orange-500 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange-600/20 transition-all active:scale-95 whitespace-nowrap">
                  Pierakstīties
                </button>
              </form>
              <p className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest">
                Mēs cienām tavu privātumu. Atrakstīties var jebkurā laikā.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
