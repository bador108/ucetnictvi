import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, Navigate, useLocation } from 'react-router-dom';

// --- IMPORTY ---
import { allData } from './data'; 
import { maDatiDalData } from './data/maDatiDalData';
import { prikladyData } from './data/prikladyData';

// Opravené finalData — žádné matidalData, jen existující proměnné
const finalData = [
  ...(allData || []),
  ...(maDatiDalData ? [maDatiDalData] : []),
  ...(prikladyData ? [prikladyData] : [])
];
// --- 2. KOMPONENTA: KARTIČKY (FLASHCARDS) ---
function FlashcardsSection({ otazky }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  if (!otazky || otazky.length === 0) return null;
  
  return (
    <div className="mt-12 p-10 border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[3rem] text-center bg-zinc-50/50 dark:bg-zinc-900/20">
      <p className="text-[10px] font-black uppercase text-blue-600 mb-8 tracking-[0.3em] italic text-center">Rychlá teorie</p>
      <div className="min-h-[140px] flex flex-col items-center justify-center">
        <p className="text-2xl font-black text-zinc-900 dark:text-white mb-8 px-4 leading-tight text-center">{otazky[index].q}</p>
        {show && (
          <div className="mb-8 p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/30">
            <p className="font-bold text-blue-600 dark:text-blue-400 text-center">{otazky[index].a}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button 
          onClick={() => show ? (setShow(false), setIndex((index + 1) % otazky.length)) : setShow(true)} 
          className="px-12 py-4 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-md transition-all active:scale-95"
        >
          {show ? 'Další kartička' : 'Ukázat odpověď'}
        </button>
      </div>
    </div>
  );
}

// --- 3. KOMPONENTA: TRENAŽÉR (PŘÍKLADY) ---
function PracticeSection({ cviceni }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState({ md: '', d: '' });
  const [checked, setChecked] = useState(false);
  if (!cviceni || cviceni.length === 0) return null;
  const curr = cviceni[idx];

  const handleNext = () => { 
    setIdx((p) => (p + 1) % cviceni.length); 
    setInput({ md: '', d: '' }); 
    setChecked(false); 
  };

  const isCorrect = input.md.trim().toLowerCase() === curr.md.toLowerCase() && 
                    input.d.trim().toLowerCase() === curr.d.toLowerCase();

  return (
    <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
      <div className="flex justify-between items-center mb-6 text-[10px] font-black uppercase tracking-widest text-blue-600">
        <span>Účetní trenažér</span>
        <span className="text-zinc-400 italic text-right">Příklad {idx + 1} / {cviceni.length}</span>
      </div>
      <div className="mb-8 text-center text-zinc-900 dark:text-white">
        <h3 className="text-2xl font-black mb-2 leading-tight">{curr.zadani}</h3>
        <p className="text-3xl font-bold text-blue-600">{curr.castka}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input placeholder="MD" value={input.md} onChange={e => setInput({...input, md: e.target.value})} disabled={checked} className={`p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none ${checked ? (input.md.trim().toLowerCase() === curr.md.toLowerCase() ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 dark:text-white'}`} />
        <input placeholder="D" value={input.d} onChange={e => setInput({...input, d: e.target.value})} disabled={checked} className={`p-5 rounded-2xl border-2 text-center font-mono font-black text-xl outline-none ${checked ? (input.d.trim().toLowerCase() === curr.d.toLowerCase() ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 dark:text-white'}`} />
      </div>
      {checked && (
        <div className={`p-4 rounded-xl mb-6 text-center font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
           {isCorrect ? '✓ Správně' : `✗ Chyba! Správně: ${curr.md} / ${curr.d}`}
        </div>
      )}
      <button onClick={checked ? handleNext : () => setChecked(true)} className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all">
        {checked ? 'Další zadání' : 'Zkontrolovat výsledek'}
      </button>
    </div>
  );
}

// --- 4. LAYOUT LEKCE (ŠIPKA I MENU NA PLOŠE) ---
function TemaLayout({ isDark }) {
  const { temaId, podtemaId } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const tema = finalData.find(t => t.id === temaId);
  if (!tema) return <Navigate to="/" />;
  const podtema = tema.podtemata.find(p => p.id === podtemaId) || tema.podtemata[0];

  useEffect(() => { setIsMenuOpen(false); }, [location]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className={`fixed inset-0 bg-black/70 z-[60] transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

      {/* BOČNÍ MENU */}
      <aside className={`fixed top-0 left-0 z-[70] h-screen w-80 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-900 p-8 overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full text-left">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)} className="text-zinc-400 p-2 text-2xl font-bold hover:text-red-500 transition-colors">✕</button>
          </div>
          <h2 className="text-xl font-black mb-8 uppercase tracking-tighter italic border-b border-zinc-100 dark:border-zinc-900 pb-4">{tema.titul}</h2>
          <nav className="space-y-2">
            {tema.podtemata.map(p => (
              <Link key={p.id} to={`/${tema.id}/${p.id}`} className={`block text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-xl text-left transition-all ${podtemaId === p.id ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}>
                {p.titul}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* HLAVNÍ OBSAH */}
      <main className="relative flex-1 max-w-4xl mx-auto p-6 md:p-16 w-full text-left">
        
        {/* LIŠTA S OVLÁDÁNÍM (Šipka + Menu) */}
        <div className="w-full flex items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="flex items-center justify-center w-12 h-12 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            <span className="text-xl font-bold">←</span>
          </Link>

          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
          >
            ☰ MENU LEKCÍ
          </button>
        </div>

        <header className="mb-12">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] block mb-4 italic">Kapitola</span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase">{podtema.titul}</h1>
        </header>

        <article className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed whitespace-pre-line mb-20 font-medium">
          {podtema.obsah}
        </article>

        {/* Zobrazení úkolů */}
        <div className="space-y-10">
          {podtema.cviceni && <PracticeSection cviceni={podtema.cviceni} />}
          {podtema.otazky && <FlashcardsSection otazky={podtema.otazky} />}
        </div>
      </main>
    </div>
  );
}

// --- 5. HOME (LOBBY) ---
function Home({ isDark, setIsDark }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 md:p-24 transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-20 border-b border-zinc-200 dark:border-zinc-900 pb-12">
          <div className="text-left">
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] block mb-2 italic">Student Portal</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none uppercase italic">Účto</h1>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest transition-all hover:border-blue-500">
            {isDark ? '🌙 DARK' : '☀️ LIGHT'}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalData.map((t, idx) => (
            <Link key={t.id} to={`/${t.id}/${t.podtemata[0].id}`} className="p-10 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 transition-all group flex flex-col justify-between min-h-[300px] hover:shadow-2xl hover:-translate-y-2">
              <div className="text-left">
                <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 block italic">Modul {idx + 1}</span>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors text-zinc-900 dark:text-white">{t.titul}</h2>
              </div>
              <div className="h-1 w-12 bg-blue-600 transition-all group-hover:w-24"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 6. APP ---
export default function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="/:temaId/:podtemaId" element={<TemaLayout isDark={isDark} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
