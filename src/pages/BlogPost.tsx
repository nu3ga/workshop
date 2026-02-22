import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Kā izvēlēties pareizos darba apavus?',
    content: `
      <p>Darba apavi ir viens no svarīgākajiem individuālās aizsardzības līdzekļiem. Tie ne tikai aizsargā kājas no traumām, bet arī nodrošina komfortu visas darba dienas garumā. Izvēloties nepiemērotus apavus, var rasties nogurums, sāpes mugurā un locītavās, kā arī palielināties traumu risks.</p>
      
      <h3>1. Novērtējiet darba vidi</h3>
      <p>Pirms iegādāties apavus, ir svarīgi saprast, kādos apstākļos tie tiks lietoti. Vai strādājat iekštelpās vai ārā? Vai ir risks paslīdēt? Vai ir nepieciešama aizsardzība pret ķīmiskām vielām vai elektrību?</p>
      
      <h3>2. Izvēlieties atbilstošu aizsardzības klasi</h3>
      <p>Darba apavi tiek iedalīti dažādās aizsardzības klasēs (S1, S2, S3 u.c.). S1 klases apavi ir piemēroti darbam sausās telpās, savukārt S3 klases apavi nodrošina aizsardzību pret mitrumu un caurduršanu.</p>
      
      <h3>3. Pievērsiet uzmanību izmēram un ērtumam</h3>
      <p>Apaviem ir jābūt precīzi atbilstošiem jūsu kājas izmēram. Pārāk cieši apavi var radīt tulznas un asinsrites traucējumus, bet pārāk brīvi – palielināt paklupšanas risku. Ieteicams apavus pielaikot dienas beigās, kad kājas ir nedaudz pietūkušas.</p>
      
      <h3>4. Materiāls un elpojamība</h3>
      <p>Kvalitatīvi materiāli, piemēram, dabīgā āda vai moderni sintētiskie materiāli, nodrošina labu gaisa cirkulāciju un novērš kāju svīšanu. Tas ir īpaši svarīgi, ja apavi jāvalkā ilgas stundas.</p>
      
      <h3>Secinājums</h3>
      <p>Investīcija kvalitatīvos darba apavos atmaksājas ar uzviju – tie kalpo ilgāk un nodrošina labāku aizsardzību un komfortu. Neaizmirstiet regulāri kopt apavus, lai tie saglabātu savas īpašības pēc iespējas ilgāk.</p>
    `,
    image: 'https://picsum.photos/seed/shoes/1200/600',
    category: 'Padomi',
    date: '14. Oktobris, 2024',
    readTime: '5 min',
    author: 'Jānis Bērziņš'
  },
  // ... (other posts would be here in a real app)
];

export default function BlogPost() {
  const { id } = useParams();
  // In a real app, fetch post by ID. For now, just use the first one or find by ID if we had the full list here.
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Header Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-bold uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4" /> Atpakaļ uz blogu
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
              <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime} lasīšana
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-orange-600 hover:prose-a:text-orange-500 prose-img:rounded-2xl prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Dalīties
            </h3>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Facebook className="w-4 h-4" /> Facebook
              </button>
              <button className="flex-1 bg-sky-500 text-white py-2 rounded-lg font-bold text-sm hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                <Twitter className="w-4 h-4" /> Twitter
              </button>
            </div>
            <button className="w-full mt-2 bg-blue-700 text-white py-2 rounded-lg font-bold text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
