export const maDatiDalData = {
  id: "ma-dati-dal",
  titul: "Má dáti / Dal",
  podtemata: [
    { 
      id: "zaklad-md-d",
      titul: "Co je Má dáti / Dal",
      obsah: `📘 CO JE „MÁ DÁTI / DAL“?
Má dáti (MD) a Dal (D) jsou dvě strany každého účetního účtu.  
Je to základní princip podvojného účetnictví – každá operace se zapisuje dvakrát, aby účetnictví zůstalo vyrovnané.

🟦 LEVÁ STRANA = MÁ DÁTI (MD)  
🟥 PRAVÁ STRANA = DAL (D)

🎯 PROČ JE TO TAK DŮLEŽITÉ?
• každá operace má dvě stránky  
• rozvaha musí zůstat vyrovnaná  
• umožňuje kontrolu správnosti  
• je to základní princip účetnictví  

📌 PODVOJNÝ ZÁPIS = MD = D  
Součet všech MD musí být vždy stejný jako součet všech D.

Bez pochopení MD/D nelze účtovat – je to základní stavební kámen účetnictví.`
    },

    { 
      id: "strana-md",
      titul: "Strana Má dáti (MD)",
      obsah: `🟦 STRANA MÁ DÁTI (MD)
Strana MD je levá strana účtu.  
Zapisují se sem přírůstky aktiv, úbytky pasiv a náklady.

📘 NA MD SE ZAPISUJE:
• přírůstek aktiv (např. přibyly peníze, přibylo zboží)  
• úbytek pasiv (např. snížil se závazek)  
• náklady (např. spotřeba materiálu, mzdy, služby)  

🧪 PRAKTICKÉ PŘÍKLADY:
1) Firma přijme hotovost 10 000 Kč  
→ Pokladna 211 (MD)

2) Firma zaplatí závazek 5 000 Kč  
→ Závazky 321 (MD)

3) Firma spotřebuje materiál  
→ Spotřeba materiálu 501 (MD)

4) Firma vystaví fakturu zákazníkovi  
→ Pohledávky 311 (MD)

MD = levá strana účtu, kde rostou aktiva a náklady.`
    },

    { 
      id: "strana-dal",
      titul: "Strana Dal (D)",
      obsah: `🟥 STRANA DAL (D)
Strana Dal je pravá strana účtu.  
Zapisují se sem úbytky aktiv, přírůstky pasiv a výnosy.

📘 NA DAL SE ZAPISUJE:
• úbytek aktiv (např. ubyly peníze)  
• přírůstek pasiv (např. vznikl závazek)  
• výnosy (např. tržby, úroky, provize)  

🧪 PRAKTICKÉ PŘÍKLADY:
1) Firma zaplatí hotově 3 000 Kč  
→ Pokladna 211 (D)

2) Firma přijme fakturu od dodavatele  
→ Závazky 321 (D)

3) Firma prodá zboží  
→ Tržby 604 (D)

4) Firma přijme úvěr  
→ Úvěry 461 (D)

Dal = pravá strana účtu, kde rostou pasiva a výnosy.`
    },

    { 
      id: "aktivni-ucty",
      titul: "Aktivní účty",
      obsah: `🟩 AKTIVNÍ ÚČTY
Aktivní účty sledují majetek firmy.

📘 CHOVÁNÍ AKTIVNÍCH ÚČTŮ:
• přírůstky → MD  
• úbytky → D  

📦 PŘÍKLADY AKTIVNÍCH ÚČTŮ:
• 211 Pokladna  
• 221 Bankovní účet  
• 311 Pohledávky  
• 112 Materiál  
• 132 Zboží  
• 022 Stroje  

🧪 PRAKTICKÉ PŘÍKLADY:
Pokladna 211:
• firma přijme hotovost → MD  
• firma zaplatí hotově → D  

Pohledávky 311:
• vystavíme fakturu → MD  
• zákazník zaplatí → D  

Zásoby 132:
• nakoupíme zboží → MD  
• prodáme zboží → D  

Aktivní účet má obvykle zůstatek na straně MD.`
    },

    { 
      id: "pasivni-ucty",
      titul: "Pasivní účty",
      obsah: `🟥 PASIVNÍ ÚČTY
Pasivní účty sledují zdroje financování – dluhy, závazky, úvěry, vlastní kapitál.

📘 CHOVÁNÍ PASIVNÍCH ÚČTŮ:
• přírůstky → D  
• úbytky → MD  

📦 PŘÍKLADY PASIVNÍCH ÚČTŮ:
• 321 Závazky  
• 331 Zaměstnanci  
• 336 Zúčtování s institucemi  
• 343 DPH  
• 411 Základní kapitál  
• 461 Bankovní úvěry  

🧪 PRAKTICKÉ PŘÍKLADY:
Závazky 321:
• přijde faktura → D  
• zaplatíme fakturu → MD  

Úvěry 461:
• přijmeme úvěr → D  
• splácíme úvěr → MD  

Vlastní kapitál 411:
• vklad společníka → D  
• ztráta → MD  

Pasivní účet má obvykle zůstatek na straně D.`
    },

    { 
      id: "podvojnost",
      titul: "Podvojnost účetního zápisu",
      obsah: `⚖️ PODVOJNOST ÚČETNÍHO ZÁPISU
Podvojnost znamená, že každá účetní operace se zapisuje dvakrát:
• jednou na stranu MD jednoho účtu  
• jednou na stranu D jiného účtu  

🎯 PROČ JE TO TAK?
• zajišťuje rovnováhu rozvahy  
• umožňuje kontrolu správnosti  
• každá operace má dvě stránky  

📘 PODVOJNÝ ZÁPIS = MD = D  
Součet všech MD musí být vždy stejný jako součet všech D.

Bez podvojnosti by účetnictví nefungovalo.`
    },

    { 
      id: "prakticke-priklady",
      titul: "Praktické účtovací příklady",
      obsah: `🧮 PRAKTICKÉ ÚČTOVACÍ PŘÍKLADY  
Všechny příklady obsahují konkrétní účty a logiku MD/D.

------------------------------------------------------------

1️⃣ Nákup materiálu na fakturu 20 000 Kč + DPH 21 %
Materiál 112 → MD 20 000  
DPH 343 → MD 4 200  
Závazky 321 → D 24 200  

------------------------------------------------------------

2️⃣ Úhrada faktury dodavateli 24 200 Kč
Závazky 321 → MD 24 200  
Bankovní účet 221 → D 24 200  

------------------------------------------------------------

3️⃣ Prodej zboží za 10 000 Kč + DPH 21 %
Pohledávky 311 → MD 12 100  
Tržby 604 → D 10 000  
DPH 343 → D 2 100  

------------------------------------------------------------

4️⃣ Zákazník zaplatí fakturu
Bankovní účet 221 → MD 12 100  
Pohledávky 311 → D 12 100  

------------------------------------------------------------

5️⃣ Spotřeba materiálu 5 000 Kč
Spotřeba materiálu 501 → MD 5 000  
Materiál 112 → D 5 000  

------------------------------------------------------------

6️⃣ Přijetí úvěru 300 000 Kč
Bankovní účet 221 → MD 300 000  
Úvěry 461 → D 300 000  

------------------------------------------------------------

7️⃣ Splátka úvěru 50 000 Kč
Úvěry 461 → MD 50 000  
Bankovní účet 221 → D 50 000  

------------------------------------------------------------

8️⃣ Výplata mezd 80 000 Kč
Mzdové náklady 521 → MD 80 000  
Zaměstnanci 331 → D 80 000  

------------------------------------------------------------

9️⃣ Odvod sociálního a zdravotního pojištění
Zaměstnanci 331 → MD  
Instituce 336 → D  

------------------------------------------------------------

🔍 TYHLE PŘÍKLADY UKAZUJÍ:
• jak funguje MD/D v praxi  
• jak se účtuje nákup, prodej, úvěr, mzdy  
• jak se účty navzájem ovlivňují  
• jak se zachovává rovnováha MD = D  

MD/D je základní logika účetnictví – jakmile ji pochopíš, účetnictví začne dávat smysl.`
    }
  ]
};