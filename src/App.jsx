import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import { allData } from './data';

// --- KOMPONENTA: Přepínač (Dark/Light) ---
function ThemeToggle({ isDark, setIsDark }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
        {isDark ? 'Dark' : 'Light'}
      </span>
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`relative w-10 h-5 rounded-full transition-all duration-500 ${isDark ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-gray-300'}`}
      >
        <div className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isDark ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}

// --- BARVY KARET (OPRAVENO PRO LIGHT MOD) ---
const getTemaStyles = (id) => {
  const styles = {
    "zaklady-ucetnictvi": "border-blue-200 bg-blue-50/50 text-blue-800 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400 hover:border-blue-500",
    "majetek-podniku": "border-emerald-200 bg-emerald-50/50 text-emerald-800 dark:border-emerald-900/30 dark:bg-emerald-900/20 dark:text-emerald-400 hover:border-emerald-500",
    "zdroje-financovani": "border-purple-200 bg-purple-50/50 text-purple-800 dark:border-purple-900/30 dark:bg-purple-900/20 dark:text-purple-400 hover:border-purple-500",
    "rozvaha": "border-orange-200 bg-orange-50/50 text-orange-800 dark:border-orange-900/30 dark:bg-orange-900/20 dark:text-orange-400 hover:border-orange-500",
    "ucet-a-uctovani": "border-rose-200 bg-rose-50/50 text-rose-800 dark:border-rose-900/30 dark:bg-rose-900/20 dark:text-rose-400 hover:border-rose-500"
  };
  return styles[id] || "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950";
};

// --- SIDEBAR ---
function Sidebar({ tema, isOpen, setIsOpen, isDark, setIsDark }) {
  const { podtemaId } = useParams();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] lg:hidden transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <aside className={`
        fixed top-0 left-0 z-[90] w-80 h-screen 
        bg-white dark:bg-black border-r border-gray-100 dark:border-gray-900
        premium-bounce transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:sticky lg:translate-x-0 lg:z-40
      `}>
        <div className="p-10 flex flex-col h-full">
          <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-12 hover:opacity-50 transition">← Zpět</Link>
          <h2 className="text-2xl font-black mb-10 dark:text-white tracking-tighter uppercase leading-none">{tema.titul}</h2>
          <nav className="space-y-4 flex-1 overflow-y-auto no-scrollbar">
            {tema.podtemata.map(pod => (
              <Link 
                key={pod.id} 
                to={`/${tema.id}/${pod.id}`} 
                onClick={() => setIsOpen(false)} 
                className={`flex items-center gap-4 text-sm font-bold transition-all duration-300 ${
                  podtemaId === pod.id ? 'text-blue-600 translate-x-3' : 'text-gray-400 hover:text-black dark:hover:text-white hover:translate-x-1'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-blue-600 transition-transform ${podtemaId === pod.id ? 'scale-100' : 'scale-0'}`} />
                {pod.titul}
              </Link>
            ))}
          </nav>
          <div className="pt-8 border-t border-gray-100 dark:border-gray-900 mt-auto">
             <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>
        </div>
      </aside>
    </>
  );
}

// --- DETAIL TÉMATU ---
function TemaLayout({ isDark, setIsDark }) {
  const { temaId, podtemaId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const tema = allData.find(t => t.id === temaId);
  
  if (!tema) return <Navigate to="/" />;
  const podtema = tema.podtemata.find(p => p.id === podtemaId) || tema.podtemata[0];

  return (
    <div className="flex min-h-screen bg-white dark:bg-black transition-colors duration-700">
      <Sidebar tema={tema} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} isDark={isDark} setIsDark={setIsDark} />
      <main className="flex-1">
        <div className="lg:hidden p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-900 sticky top-0 bg-white/80 dark:bg-black/80 glass-effect z-50">
          <button onClick={() => setIsSidebarOpen(true)} className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-4 py-2 border border-blue-600/20 rounded-full">Menu</button>
          <span className="text-[10px] font-black dark:text-white tracking-widest">ÚČTO</span>
        </div>
        <div className="max-w-3xl mx-auto p-10 md:p-20 lg:p-32">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white mb-12 leading-[0.95]">{podtema.titul}</h1>
          <article className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">{podtema.obsah}</article>
        </div>
      </main>
    </div>
  );
}

// --- DOMOVSKÁ STRÁNKA ---
function Home({ isDark, setIsDark }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black p-10 md:p-24 transition-colors duration-700">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-32">
          <div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter dark:text-white">ÚČTO</h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[12px] mt-2">Maturita 2026</p>
          </div>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allData.map(t => (
            <Link 
              key={t.id} 
              to={`/${t.id}/${t.podtemata[0].id}`} 
              className={`group p-12 rounded-[3rem] border-2 transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl ${getTemaStyles(t.id)}`}
            >
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter transition-colors group-hover:text-blue-600">{t.titul}</h2>
              <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{t.podtemata.length} témat</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => { document.documentElement.classList.toggle('dark', isDark); }, [isDark]);
  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="/:temaId/:podtemaId" element={<TemaLayout isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}