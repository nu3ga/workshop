import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, RotateCcw, ShieldCheck, FileText, Info } from 'lucide-react';
import clsx from 'clsx';

interface TextPageProps {
  title: string;
  type: 'terms' | 'privacy' | 'about' | 'shipping' | 'returns';
}

export default function TextPage({ title, type }: TextPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md px-4 py-3 border-b border-slate-200">
        <Link to="/" className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors -ml-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">
          {title}
        </h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 prose prose-slate prose-sm max-w-none">
          {type === 'about' && (
            <>
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Info className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">Par Mums</h2>
                  <p className="text-slate-500 text-sm m-0">Jūsu uzticamais partneris darba drošībā</p>
                </div>
              </div>
              
              <p className="lead text-slate-600 font-medium">
                Mēs esam vadošais darba drošības ekipējuma piegādātājs Baltijā, nodrošinot uzņēmumus ar augstākās kvalitātes aizsardzības līdzekļiem kopš 2010. gada.
              </p>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Warehouse" 
                  className="w-full h-64 object-cover m-0"
                />
              </div>

              <h3 className="text-slate-900 font-bold">Mūsu Misija</h3>
              <p>
                Nodrošināt katru darbinieku ar drošu un ērtu darba vidi, piedāvājot inovatīvus un sertificētus risinājumus. Mēs ticam, ka drošība nav tikai prasība, bet gan investīcija cilvēkresursos un uzņēmuma ilgtspējā.
              </p>
              
              <h3 className="text-slate-900 font-bold">Kāpēc izvēlēties mūs?</h3>
              <ul className="space-y-2 marker:text-orange-500">
                <li><strong>Plašākais klāsts Baltijā:</strong> Vairāk nekā 5000 preču vienību noliktavā.</li>
                <li><strong>Tiešā sadarbība:</strong> Oficiālie izplatītāji zīmoliem 3M, Uvex, Guide, Tegera.</li>
                <li><strong>Ekspertu konsultācijas:</strong> Mūsu komandā ir sertificēti darba aizsardzības speciālisti.</li>
                <li><strong>Ātra piegāde:</strong> 95% pasūtījumu tiek piegādāti 24h laikā.</li>
              </ul>
            </>
          )}

          {type === 'terms' && (
            <>
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">Lietošanas Noteikumi</h2>
                  <p className="text-slate-500 text-sm m-0">Pēdējo reizi atjaunots: 01.01.2024</p>
                </div>
              </div>

              <h3 className="text-slate-900 font-bold">1. Vispārīgie noteikumi</h3>
              <p>
                Šie noteikumi nosaka kārtību, kādā tiek veikti pirkumi interneta veikalā "Safety Gear". Veicot pasūtījumu, pircējs apliecina, ka ir iepazinies ar šiem noteikumiem un piekrīt tiem.
              </p>
              
              <h3 className="text-slate-900 font-bold">2. Piegāde un Apmaksa</h3>
              <p>
                Preces tiek piegādātas 1-3 darba dienu laikā. Apmaksu var veikt ar bankas pārskaitījumu, maksājumu karti (Visa, Mastercard) vai izmantojot internetbanku saites.
              </p>
              
              <h3 className="text-slate-900 font-bold">3. Atgriešanas tiesības</h3>
              <p>
                Pircējam ir tiesības atgriezt preci 14 dienu laikā no saņemšanas brīža, ja tā nav lietota, nav bojāta un ir oriģinālajā iepakojumā. Naudas atgriešana tiek veikta 5 darba dienu laikā pēc preces saņemšanas.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">Privātuma Politika</h2>
                  <p className="text-slate-500 text-sm m-0">Jūsu datu drošība ir mūsu prioritāte</p>
                </div>
              </div>

              <h3 className="text-slate-900 font-bold">Datu apstrāde</h3>
              <p>
                Mēs cienām Jūsu privātumu un apņemamies aizsargāt Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (VDAR).
              </p>
              
              <h3 className="text-slate-900 font-bold">Kādus datus mēs vācam?</h3>
              <ul className="marker:text-emerald-500">
                <li>Vārds, Uzvārds (lai identificētu pircēju)</li>
                <li>Kontaktinformācija (e-pasts, tālrunis - saziņai par pasūtījumu)</li>
                <li>Piegādes adrese (preču piegādei)</li>
                <li>Maksājumu informācija (tiek apstrādāta drošā maksājumu sistēmā)</li>
              </ul>
              
              <h3 className="text-slate-900 font-bold">Datu izmantošana</h3>
              <p>
                Dati tiek izmantoti tikai pasūtījumu apstrādei, grāmatvedības vajadzībām un klientu servisa nodrošināšanai. Mēs nenododam datus trešajām pusēm, izņemot loģistikas partnerus (Omniva, DPD) preču piegādes nodrošināšanai.
              </p>
            </>
          )}

          {type === 'shipping' && (
            <>
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">Piegādes Informācija</h2>
                  <p className="text-slate-500 text-sm m-0">Ātra un ērta piegāde visā Latvijā</p>
                </div>
              </div>

              <h3 className="text-slate-900 font-bold">Piegādes veidi un izmaksas</h3>
              <div className="grid grid-cols-1 gap-4 not-prose mb-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Omniva / DPD Pakomāti</span>
                    <span className="text-xs text-slate-500">1-2 darba dienas</span>
                  </div>
                  <span className="font-bold text-slate-900">2.99 €</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Kurjers (Venipak/DPD)</span>
                    <span className="text-xs text-slate-500">Nākamajā darba dienā</span>
                  </div>
                  <span className="font-bold text-slate-900">5.00 €</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Saņemšana veikalā</span>
                    <span className="text-xs text-slate-500">Rīga, Brīvības iela 123</span>
                  </div>
                  <span className="font-bold text-emerald-600">Bezmaksas</span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 not-prose mb-6">
                <p className="text-sm text-orange-800 font-medium m-0">
                  <span className="font-bold">Bezmaksas piegāde</span> pasūtījumiem virs 50.00 € uz pakomātiem visā Latvijā.
                </p>
              </div>

              <h3 className="text-slate-900 font-bold">Pasūtījuma apstrāde</h3>
              <p>
                Pasūtījumi, kas veikti darba dienās līdz plkst. 14:00, tiek izsūtīti tajā pašā dienā. Pasūtījumi pēc 14:00 vai brīvdienās tiek izsūtīti nākamajā darba dienā.
              </p>
            </>
          )}

          {type === 'returns' && (
            <>
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-3 bg-purple-50 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">Atgriešana un Garantija</h2>
                  <p className="text-slate-500 text-sm m-0">30 dienu atgriešanas tiesības</p>
                </div>
              </div>

              <h3 className="text-slate-900 font-bold">Atgriešanas kārtība</h3>
              <p>
                Ja iegādātā prece neder vai neapmierina, Jūs to varat atgriezt <strong>30 dienu laikā</strong> no saņemšanas brīža.
              </p>
              <ol className="space-y-2 marker:text-purple-600 marker:font-bold">
                <li>Aizpildiet atgriešanas veidlapu (pieejama Jūsu profilā).</li>
                <li>Iepakojiet preci oriģinālajā iepakojumā.</li>
                <li>Nosūtiet preci, izmantojot Omniva/DPD pakomātu (kods tiks nosūtīts SMS) vai nogādājiet mūsu veikalā.</li>
              </ol>

              <h3 className="text-slate-900 font-bold">Garantija</h3>
              <p>
                Visām precēm tiek nodrošināta 2 gadu ražotāja garantija fiziskām personām. Juridiskām personām garantijas termiņš ir 1 gads, ja ražotājs nav noteicis citādi.
              </p>
              
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 not-prose mt-6">
                <h4 className="font-bold text-slate-900 text-sm mb-2">Svarīgi zināt:</h4>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4 m-0">
                  <li>Prece nedrīkst būt lietota (tikai pielaikota).</li>
                  <li>Jābūt saglabātām visām etiķetēm un marķējumiem.</li>
                  <li>Naudas atgriešana notiek uz to pašu kontu, no kura veikts maksājums.</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
