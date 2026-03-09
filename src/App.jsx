import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Import tvých datových modulů
import { allData } from './data';
import { prikladyData } from './data/prikladyData';
import { maDatiDalData } from './data/matidal';

const finalData = [
  ...allData,
  maDatiDalData,
  prikladyData
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
              className={`w-full p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none transition-all shadow-sm
                ${checked ? (input.md.trim() === curr.md ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') 
                : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:text-white'}`}
            />
        </div>
        <div className="space-y-2">
            <span className="text-[9px] font-black uppercase ml-2 text-zinc-500">Dal (D)</span>
            <input 
              placeholder="???" value={input.d} onChange={e => setInput({...input, d: e.target.value})} disabled={checked}
              className={`w-full p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none transition-all shadow-sm
                ${checked ? (input.d.trim() === curr.d ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') 
                : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:text-white'}`}
            />
        </div>
      </div>
      {checked && (
        <div className={`p-6 rounded-2xl mb-8 animate-in fade-in slide-in-from-top-2 ${isCorrect ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
          <p className="font-black uppercase text-[10px] mb-1">{isCorrect ? 'Výborně!' : 'Pozor, chyba'}</p>
          <p className="text-sm font-bold leading-relaxed">{curr.text}</p>
          {!isCorrect && <p className="mt-2 text-xs font-mono font-black">Správné řešení: {curr.md} / {curr.d}</p>}
        </div>
      )}
      <button 
        onClick={checked ? handleNext : () => setChecked(true)} 
        className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-95 shadow-lg"
      >
        {checked ? 'Další příklad' : 'Zkontrolovat výsledek'}
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
      <p className="text-[10px] font-black uppercase text-blue-600 mb-8 tracking-[0.3em]">Flashcards / Teorie</p>
      <div className="min-h-[140px] flex flex-col items-center justify-center">
        <p className="text-2xl font-black text-zinc-900 dark:text-white mb-8 px-4 leading-tight">{otazky[index].q}</p>
        {show && (
          <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/30 animate-in zoom-in-95">
            <p className="font-bold text-blue-600 dark:text-blue-400">{otazky[index].a}</p>
          </div>
        )}
      </div>
      <button 
        onClick={() => show ? (setShow(false), setIndex((index + 1) % otazky.length)) : setShow(true)} 
        className="px-12 py-4 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-lg transition-all active:scale-95"
      >
        {show ? 'Další otázka' : 'Ukázat odpověď'}
      </button>
    </div>
  );
}

// --- LAYOUT LEKCE (SIDEBAR + BURGER MENU + OBSAH) ---
function TemaLayout({ isDark, setIsDark }) {
  const { temaId, podtemaId } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const tema = finalData.find(t => t.id === temaId);
  if (!tema) return <Navigate to="/" />;
  const podtema = tema.podtemata.find(p => p.id === podtemaId) || tema.podtemata[0];

  // Zavřít menu při změně podtématu (na mobilu)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
      
      {/* OVERLAY (Zatmění pozadí při otevřeném menu na mobilu) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* SIDEBAR / BURGER MENU */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-80 bg-zinc-50 dark:bg-zinc-950 lg:bg-zinc-50/50 lg:dark:bg-black
        border-r border-zinc-200 dark:border-zinc-900 p-10 overflow-y-auto transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">← Přehled</Link>
          <button onClick={closeMenu} className="lg:hidden text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
            ✕
          </button>
        </div>
        
        <h2 className="text-xl font-black mb-10 uppercase tracking-tighter leading-[1.1] text-zinc-900 dark:text-white">{tema.titul}</h2>
        <nav className="space-y-6">
          {tema.podtemata.map(p => (
            <Link 
              key={p.id} 
              to={`/${tema.id}/${p.id}`} 
              onClick={closeMenu}
              className={`block text-[11px] font-black uppercase tracking-wider transition-all ${podtemaId === p.id ? 'text-blue-600 border-l-2 border-blue-600 pl-4' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 pl-4'}`}
            >
              {p.titul}
            </Link>
          ))}
        </nav>
      </aside>

      {/* HLAVNÍ OBSAH */}
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-16 lg:p-24 w-full">
        
        {/* MOBILNÍ HEADER S BURGEREM */}
        <div className="lg:hidden flex justify-between items-center mb-10">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3 -ml-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-900 dark:text-white font-black text-xs uppercase tracking-widest border border-zinc-200 dark:border-zinc-800"
          >
            ☰ Menu
          </button>
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Kapitola {tema.podtemata.indexOf(podtema) + 1}</span>
        </div>

        <header className="mb-12 md:mb-16">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-4 italic">Aktuální lekce</span>
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

// --- HLAVNÍ STRÁNKA ---
function Home({ isDark, setIsDark }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 md:p-24 transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-24 border-b border-zinc-200 dark:border-zinc-900 pb-12">
          <div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] block mb-2 italic">Student Portal</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">ÚČTO</h1>
          </div>
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="mb-2 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 transition-all shadow-sm"
          >
            {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
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
                <span className={`text-[10px] font-black uppercase tracking-widest mb-4 block ${t.id === 'priklady-uctovani' ? 'text-white/60' : 'text-blue-600'}`}>Lekce {idx + 1}</span>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight transition-colors group-hover:text-blue-600">
                  {t.titul}
                </h2>
              </div>
              <div>
                <div className={`h-1 w-12 mb-4 transition-all group-hover:w-24 ${t.id === 'priklady-uctovani' ? 'bg-white/40' : 'bg-blue-600'}`}></div>
                <p className={`text-[10px] font-black uppercase tracking-widest ${t.id === 'priklady-uctovani' ? 'text-white/60' : 'text-zinc-400'}`}>
                  {t.podtemata.length} lekcí
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- HLAVNÍ KOMPONENTA APP ---
export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="/:temaId/:podtemaId" element={<TemaLayout isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
