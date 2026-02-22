import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Kā izvēlēties pareizos darba apavus?',
    excerpt: 'Uzziniet, kādi faktori jāņem vērā, izvēloties darba apavus, lai nodrošinātu maksimālu drošību un komfortu visas dienas garumā.',
    image: 'https://picsum.photos/seed/shoes/800/600',
    category: 'Padomi',
    date: '14. Oktobris, 2024',
    readTime: '5 min',
    author: 'Jānis Bērziņš'
  },
  {
    id: '2',
    title: 'Jaunākie standarti darba aizsardzībā 2024',
    excerpt: 'Pārskats par jaunākajām izmaiņām darba drošības regulējumos un to, kā tās ietekmē jūsu uzņēmumu.',
    image: 'https://picsum.photos/seed/safety/800/600',
    category: 'Likumdošana',
    date: '10. Oktobris, 2024',
    readTime: '8 min',
    author: 'Līga Kalniņa'
  },
  {
    id: '3',
    title: 'Kāpēc ir svarīgi lietot dzirdes aizsardzību?',
    excerpt: 'Ilgstošs troksnis var neatgriezeniski sabojāt dzirdi. Mēs skaidrojam, kāpēc un kad jālieto austiņas vai ausu aizbāžņi.',
    image: 'https://picsum.photos/seed/ear/800/600',
    category: 'Veselība',
    date: '5. Oktobris, 2024',
    readTime: '4 min',
    author: 'Māris Priede'
  },
  {
    id: '4',
    title: 'Ziemas darba apģērbs: Ko izvēlēties?',
    excerpt: 'Tuvojoties aukstajam laikam, ir svarīgi parūpēties par siltu un ērtu darba apģērbu. Mūsu ieteikumi ziemas sezonai.',
    image: 'https://picsum.photos/seed/winter/800/600',
    category: 'Sezonas',
    date: '1. Oktobris, 2024',
    readTime: '6 min',
    author: 'Jānis Bērziņš'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ekspertu Padomi & Jaunumi</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Uzziniet jaunāko informāciju par darba drošību, ekipējuma izvēli un nozares aktualitātēm. Mūsu eksperti dalās ar vērtīgiem padomiem.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <span className="text-orange-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lasīt vairāk <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
