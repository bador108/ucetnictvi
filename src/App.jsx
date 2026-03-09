import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, Navigate, useLocation } from 'react-router-dom';

// --- IMPORTY PŘESNĚ PODLE TVÉ STRUKTURY (OBRÁZEK 1) ---
import { zakladyData } from './data/zaklady';
import { majetekData } from './data/majetek';
import { zdrojeData } from './data/zdroje';
import { rozvahaData } from './data/rozvaha';
import { uctovaniData } from './data/uctovani';
import { matidalData } from './data/matidal';
import { prikladyData } from './data/prikladyData';

// Sjednocení všech 7 modulů do jednoho pole pro hlavní stránku
const finalData = [
  zakladyData,    // 1.
  majetekData,    // 2.
  zdrojeData,     // 3.
  rozvahaData,    // 4.
  uctovaniData,   // 5.
  matidalData,    // 6.
  prikladyData    // 7.
];

// --- KOMPONENTA: INTERAKTIVNÍ TRENAŽÉR ---
function PracticeSection({ cviceni }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState({ md: '', d: '' });
  const [checked, setChecked] = useState(false);

  if (!cviceni) return null;
  const curr = cviceni[idx];

  const handleNext = () => {
    setIdx((prev) => (prev + 1) % cviceni.length);
    setInput({ md: '', d: '' });
    setChecked(false);
  };

  const isCorrect = input.md.trim() === curr.md && input.d.trim() === curr.d;

  return (
    <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 shadow-xl transition-all">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Účetní trenažér</span>
        <span className="text-[10px] font-bold text-zinc-400">Příklad {idx + 1} / {cviceni.length}</span>
      </div>
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 leading-tight">{curr.zadani}</h3>
        <p className="text-3xl font-bold text-blue-600">{curr.castka}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
            <span className="text-[9px] font-black uppercase ml-2 text-zinc-500">Má Dáti (MD)</span>
            <input 
              placeholder="???" value={input.md} onChange={e => setInput({...input, md: e.target.value})} disabled={checked}
              className={`w-full p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none transition-all
                ${checked ? (input.md.trim() === curr.md ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') 
                : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:text-white'}`}
            />
        </div>
        <div className="space-y-2">
            <span className="text-[9px] font-black uppercase ml-2 text-zinc-500">Dal (D)</span>
            <input 
              placeholder="???" value={input.d} onChange={e => setInput({...input, d: e.target.value})} disabled={checked}
              className={`w-full p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none transition-all
                ${checked ? (input.d.trim() === curr.d ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') 
                : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:text-white'}`}
            />
        </div>
      </div>
      {checked && (
        <div className={`p-6 rounded-2xl mb-8 animate-in fade-in slide-in-from-top-2 ${isCorrect ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
          <p className="font-black uppercase text-[10px] mb-1">{isCorrect ? 'Výborně!' : 'Pozor, chyba'}</p>
          <p className="text-sm font-bold leading-relaxed">{curr.text}</p>
          {!isCorrect && <p className="mt-2 text-xs font-mono font-black">Správně: {curr.md} / {curr.d}</p>}
        </div>
      )}
      <button 
        onClick={checked ? handleNext : () => setChecked(true)} 
        className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase text-[11px] tracking-[0.2em] shadow-lg active:scale-95 transition-all"
      >
        {checked ? 'Další příklad' : 'Zkontrolovat'}
      </button>
    </div>
  );
}

// --- KOMPONENTA: TEORETICKÉ KARTIČKY ---
function FlashcardsSection({ otazky }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  if (!otazky) return null;
  return (
    <div className="mt-12 p-10 border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[3rem] text-center bg-zinc-50/50 dark:bg-transparent">
      <p className="text-[10px] font-black uppercase text-blue-600 mb-8 tracking-[0.3em]">Flashcards</p>
      <div className="min-h-[140px] flex flex-col items-center justify-center">
        <p className="text-2xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">{otazky[index].q}</p>
        {show && (
          <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/30 animate-in zoom-in-95">
            <p className="font-bold text-blue-600 dark:text-blue-400">{otazky[index].a}</p>
          </div>
        )}
      </div>
      <button 
        onClick={() => show ? (setShow(false), setIndex((index + 1) % otazky.length)) : setShow(true)} 
        className="px-12 py-4 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 text-[10px] font-black uppercase tracking-widest shadow-md active:scale-95 transition-all"
      >
        {show ? 'Další otázka' : 'Ukázat odpověď'}
      </button>
    </div>
  );
}

// --- LAYOUT LEKCE (S BURGER MENU) ---
function TemaLayout({ isDark, setIsDark }) {
  const { temaId, podtemaId } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const tema = finalData.find(t => t.id === temaId);
  if (!tema) return <Navigate to="/" />;
  const podtema = tema.podtemata.find(p => p.id === podtemaId) || tema.podtemata[0];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Menu */}
      <aside className={`
        fixed top-0 left-0 z-[70] h-screen w-80 bg-white dark:bg-zinc-950 
        border-r border-zinc-200 dark:border-zinc-900 p-8 overflow-y-auto 
        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center mb-10">
          <Link to="/" className="text-[10px] font-black text-blue-600 uppercase tracking-widest">← Domů</Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-zinc-400 p-2 text-xl font-bold">✕</button>
        </div>
        
        <h2 className="text-xl font-black mb-8 uppercase tracking-tighter leading-tight border-b border-zinc-100 dark:border-zinc-900 pb-6">{tema.titul}</h2>
        <nav className="space-y-4">
          {tema.podtemata.map(p => (
            <Link 
              key={p.id} 
              to={`/${tema.id}/${p.id}`} 
              className={`block text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-xl transition-all ${podtemaId === p.id ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
            >
              {p.titul}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-16 lg:p-24 w-full">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 px-5 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 font-black text-[10px] uppercase tracking-widest"
          >
            ☰ Seznam lekcí
          </button>
          <div className="text-right">
             <div className="w-24 h-1 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 transition-all" style={{ width: `${((tema.podtemata.indexOf(podtema) + 1) / tema.podtemata.length) * 100}%` }}></div>
             </div>
          </div>
        </div>

        <header className="mb-12">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-4 italic">Kapitola</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.95]">{podtema.titul}</h1>
        </header>

        <article className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed whitespace-pre-line mb-20 font-medium">
          {podtema.obsah}
        </article>

        {podtema.cviceni && <PracticeSection cviceni={podtema.cviceni} />}
        {podtema.otazky && <FlashcardsSection otazky={podtema.otazky} />}
      </main>
    </div>
  );
}

// --- HLAVNÍ STRÁNKA (PŘEHLED) ---
function Home({ isDark, setIsDark }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 md:p-24 transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-24 border-b border-zinc-200 dark:border-zinc-900 pb-12">
          <div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] block mb-2 italic">Student Portal</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none uppercase italic">Účto</h1>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="mb-2 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            {isDark ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalData.map((t, idx) => (
            <Link 
              key={t.id} 
              to={`/${t.id}/${t.podtemata[0].id}`} 
              className={`p-10 rounded-[2.5rem] border-2 transition-all group flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-2xl hover:-translate-y-2
                ${t.id === 'priklady-uctovani' 
                  ? 'border-blue-600 bg-blue-600 text-white' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 dark:text-white'}`}
            >
              <div>
                <span className={`text-[10px] font-black uppercase tracking-widest mb-4 block ${t.id === 'priklady-uctovani' ? 'text-white/60' : 'text-blue-600'}`}>Modul {idx + 1}</span>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                  {t.titul}
                </h2>
              </div>
              <div className={`h-1 w-12 mb-4 group-hover:w-24 transition-all ${t.id === 'priklady-uctovani' ? 'bg-white/40' : 'bg-blue-600'}`}></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- APP ---
export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="/:temaId/:podtemaId" element={<TemaLayout isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
