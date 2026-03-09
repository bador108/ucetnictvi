export const uctovaniData = {
  id: "ucet-a-uctovani",
  titul: "Účet a účtování",
  podtemata: [
    { 
      id: "co-je-ucet", 
      titul: "Co je účet", 
      obsah: `📘 CO JE ÚČET?
Účet je základní nástroj účetnictví. Na účtu se sleduje stav a pohyb určité položky. Každý účet má dvě strany – levou a pravou – a každá účetní operace se zapisuje dvakrát.

🔍 ÚČET = KRABIČKA, VE KTERÉ SLEDUJEME ZMĚNY

🎯 ÚČET SLEDUJE:
• stav majetku
• stav závazků
• změny během období
• přírůstky a úbytky

📚 PŘÍKLADY ÚČTŮ:
• Pokladna (211)
• Bankovní účet (221)
• Zásoby (112, 132)
• Pohledávky (311)
• Závazky (321)
• Úvěry (461)
• Dlouhodobý majetek (022)

🧪 PRAKTICKÝ PŘÍKLAD:
Pokladna má 20 000 Kč → zapisuje se na účet 211.
Když firma zaplatí hotově 5 000 Kč, pokladna se sníží → zapisuje se na DAL.

Účet je základní stavební kámen účetnictví.`
    },

    { 
      id: "struktura-uctu", 
      titul: "Struktura účtu", 
      obsah: `🏛️ JAK VYPADÁ ÚČET?
Účet má dvě strany:

🟦 LEVÁ STRANA = MÁ DÁTI (MD)  
🟥 PRAVÁ STRANA = DAL (D)

Každá účetní operace se zapisuje dvakrát – jednou na MD a jednou na D. Tomu se říká podvojný zápis.

🎯 PROČ TO TAK JE?
• zajišťuje rovnováhu účetnictví
• umožňuje kontrolu správnosti
• každá operace má dvě stránky (např. peníze odejdou, závazek se sníží)

📚 JAK SE CHOVAJÍ ÚČTY:
AKTIVNÍ ÚČTY:
• přírůstky → MD
• úbytky → D

PASIVNÍ ÚČTY:
• přírůstky → D
• úbytky → MD

🧪 PRAKTICKÝ PŘÍKLAD:
Firma zaplatí dodavateli 10 000 Kč:
• Pokladna (aktivní účet) → úbytek → DAL
• Závazky (pasivní účet) → úbytek → MD

Struktura účtu je základ logiky účtování.`
    },

    { 
      id: "t-ucty", 
      titul: "T-účty", 
      obsah: `✏️ CO JSOU T-ÚČTY?
T-účet je grafické znázornění účtu. Vypadá jako písmeno T a používá se hlavně při výuce, protože je přehledný a jednoduchý.

🟦 LEVÁ STRANA = MD  
🟥 PRAVÁ STRANA = D

🎯 PROČ SE POUŽÍVAJÍ?
• přehlednost
• jednoduché pochopení principu
• ideální pro začátečníky
• snadné sledování přírůstků a úbytků

📚 PŘÍKLAD T-ÚČTU (textově):
Pokladna (211)
MD: +10 000, +5 000
D: -3 000, -2 000

🧪 PRAKTICKÝ PŘÍKLAD:
Firma přijme hotovost 8 000 Kč → MD  
Firma zaplatí hotově 2 000 Kč → D

T-účty pomáhají pochopit, jak účetnictví funguje.`
    },

    { 
      id: "obraty", 
      titul: "Obraty na účtu", 
      obsah: `🔄 CO JSOU OBRATY?
Obrat je součet všech zápisů na jedné straně účtu. Nejde o zůstatek, ale o celkový pohyb.

📚 DRUHY OBRATŮ:
🟦 Obrat na MD  
🟥 Obrat na D  

🎯 PROČ JSOU OBRATY DŮLEŽITÉ?
• ukazují aktivitu účtu
• pomáhají vypočítat zůstatek
• ukazují, jak často se účet používá

🧪 PRAKTICKÝ PŘÍKLAD:
Na účtu Pokladna:
MD: 10 000 + 5 000 = 15 000  
D: 4 000 + 1 000 = 5 000  

Obraty jsou základ pro výpočet zůstatku.`
    },

    { 
      id: "zustatek", 
      titul: "Zůstatek účtu", 
      obsah: `📘 CO JE ZŮSTATEK?
Zůstatek je rozdíl mezi obraty na MD a D. Ukazuje aktuální stav účtu.

📐 VÝPOČET:
Zůstatek = větší strana – menší strana

📚 DRUHY ZŮSTATKŮ:
AKTIVNÍ ÚČET → zůstatek na MD  
PASIVNÍ ÚČET → zůstatek na D  

🧪 PRAKTICKÝ PŘÍKLAD:
MD: 15 000  
D: 5 000  
Zůstatek = 10 000 na MD

Zůstatek ukazuje, kolik na účtu skutečně je.`
    },

    { 
      id: "pocatecni-stav", 
      titul: "Počáteční stav", 
      obsah: `📅 CO JE POČÁTEČNÍ STAV?
Počáteční stav je hodnota účtu na začátku účetního období. Přenáší se z rozvahy.

📚 KDE SE ZAPISUJE?
AKTIVNÍ ÚČTY → MD  
PASIVNÍ ÚČTY → D  

🧪 PRAKTICKÝ PŘÍKLAD:
Pokladna má na začátku roku 20 000 Kč → zapisuje se na MD.

Počáteční stav je výchozí bod účtování.`
    },

    { 
      id: "konecny-stav", 
      titul: "Konečný stav", 
      obsah: `📅 CO JE KONEČNÝ STAV?
Konečný stav je hodnota účtu na konci účetního období. Přenáší se do dalšího roku jako počáteční stav.

📐 VÝPOČET:
Počáteční stav + obraty MD – obraty D = konečný stav

🎯 PROČ JE DŮLEŽITÝ?
• vstupuje do rozvahy
• přenáší se do dalšího období
• ukazuje, jak účet skončil

🧪 PRAKTICKÝ PŘÍKLAD:
Počáteční stav: 20 000  
MD: 10 000  
D: 5 000  
Konečný stav = 25 000  

Konečný stav je výsledek celého roku.`
    }
  ]
};