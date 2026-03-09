export const zakladyData = {
  id: "zaklady-ucetnictvi",
  titul: "Základy účetnictví",
  podtemata: [
    { 
      id: "co-je-ucetnictvi", 
      titul: "Co je účetnictví", 
      obsah: `📘 CO JE ÚČETNICTVÍ?
Účetnictví je systém, který zaznamenává hospodářské operace firmy. Je to jazyk podnikání – bez účetnictví by firma nevěděla, jak si vede, kolik má majetku, kolik dluží nebo zda je v zisku.

🔍 ÚČETNICTVÍ SLEDUJE:
• majetek firmy  
• závazky firmy  
• náklady  
• výnosy  
• zisk nebo ztrátu  

🎯 HLAVNÍ ÚČEL ÚČETNICTVÍ:
• poskytnout věrný a poctivý obraz o firmě  
• umožnit kontrolu hospodaření  
• sloužit jako podklad pro daně  
• pomáhat při rozhodování managementu  
• zajistit přehled o majetku a závazcích  

👥 PRO KOHO SE VEDE ÚČETNICTVÍ?

Externí uživatelé:
• finanční úřad  
• banky  
• investoři  
• statistický úřad  

Interní uživatelé:
• majitelé  
• manažeři  
• zaměstnanci  

🧪 PRAKTICKÝ PŘÍKLAD:
Firma chce úvěr. Banka požaduje účetní závěrku. Bez účetnictví by nebylo možné doložit finanční zdraví firmy.

Účetnictví je základní nástroj řízení firmy.`,
      otazky: [
        {
          q: "Co přesně je účetnictví a k čemu firmě slouží?",
          a: "Je to systém zaznamenávající hospodářské operace. Funguje jako jazyk podnikání – ukazuje majetek, dluhy a zisk."
        },
        {
          q: "Co patří mezi hlavní účely účetnictví?",
          a: "Poskytnout věrný obraz o firmě, kontrolovat hospodaření, sloužit jako podklad pro daně a pomáhat managementu."
        },
        {
          q: "Kdo jsou tzv. externí uživatelé účetnictví?",
          a: "Finanční úřad, banky, investoři a statistický úřad."
        },
        {
          q: "Jaké položky se v účetnictví především sledují?",
          a: "Majetek, závazky, náklady, výnosy a zisk nebo ztráta."
        }
      ]
    },

    { 
      id: "funkce-ucetnictvi", 
      titul: "Funkce účetnictví", 
      obsah: `🎯 HLAVNÍ FUNKCE ÚČETNICTVÍ
Účetnictví má několik klíčových funkcí, které dohromady tvoří jeho význam.

📘 INFORMAČNÍ FUNKCE:
Účetnictví poskytuje informace o tom, jak si firma vede. Ukazuje stav majetku, závazků, nákladů, výnosů a výsledku hospodaření.

🛡️ KONTROLNÍ FUNKCE:
Účetnictví umožňuje kontrolovat hospodaření firmy. Odhaluje chyby, podvody a nesrovnalosti.

📄 DŮKAZNÍ FUNKCE:
Účetní doklady slouží jako důkaz při kontrolách finančního úřadu nebo při soudních sporech.

💰 DAŇOVÁ FUNKCE:
Účetnictví je podkladem pro výpočet daní. Bez účetnictví nelze správně určit daň z příjmů.

🧠 ROZHODOVACÍ FUNKCE:
Účetnictví pomáhá vedení firmy rozhodovat. Například zda má firma dost peněz na investici nebo zda je vhodné najmout nové zaměstnance.

🧪 PRAKTICKÝ PŘÍKLAD:
Manažer chce koupit nový stroj. Podívá se do účetnictví, zda má firma dostatek peněz a zda se investice vyplatí.

Účetnictví je mozek firmy – bez něj nelze dělat správná rozhodnutí.`,
      otazky: [
        {
          q: "Co zajišťuje informační funkce účetnictví?",
          a: "Poskytuje informace o tom, jak si firma vede – ukazuje stav majetku, závazků, nákladů a výnosů."
        },
        {
          q: "Proč je důležitá důkazní funkce?",
          a: "Protože účetní doklady slouží jako nezvratný důkaz při kontrolách finančního úřadu nebo u soudu."
        },
        {
          q: "V čem spočívá rozhodovací funkce účetnictví?",
          a: "Pomáhá vedení firmy dělat kroky – např. zjistit, zda má firma peníze na novou investici či zaměstnance."
        }
      ]
    },

    { 
      id: "druhy-evidence", 
      titul: "Druhy evidence", 
      obsah: `📚 DRUHY EVIDENCE V ČR
V České republice existují dva systémy sledování hospodaření podnikatelů.

🟦 DAŇOVÁ EVIDENCE:
• určena pro menší podnikatele (OSVČ)  
• sleduje příjmy, výdaje, majetek a závazky  
• je jednodušší než účetnictví  
• cílem je zjistit základ daně  

🟥 ÚČETNICTVÍ:
• povinné pro firmy (s.r.o., a.s.) a větší podnikatele  
• sleduje náklady, výnosy, aktiva a pasiva  
• používá podvojný zápis (každá operace se zapisuje dvakrát)  
• cílem je věrný a poctivý obraz o firmě  

🎯 PRAKTICKÝ ROZDÍL:
Daňová evidence = jednoduchá, sleduje hlavně peněžní toky  
Účetnictví = komplexní, sleduje ekonomickou realitu firmy  

🧪 PŘÍKLAD:
OSVČ s příjmy 300 000 Kč ročně vede daňovou evidenci.  
S.r.o. musí vést účetnictví bez ohledu na výši příjmů.`,
      otazky: [
        {
          q: "Pro koho je primárně určena daňová evidence?",
          a: "Pro menší podnikatele (OSVČ) s cílem jednoduše zjistit základ daně."
        },
        {
          q: "Kdo má povinnost vést klasické účetnictví (podvojné)?",
          a: "Firmy (jako s.r.o. a a.s.) a větší podnikatelé."
        },
        {
          q: "Jaký je hlavní praktický rozdíl mezi daňovou evidencí a účetnictvím?",
          a: "Daňová evidence je jednodušší a sleduje toky peněz. Účetnictví je komplexní, používá podvojný zápis a sleduje celkovou realitu firmy."
        }
      ]
    },

    { 
      id: "pravni-uprava", 
      titul: "Právní úprava účetnictví", 
      obsah: `⚖️ PRÁVNÍ ÚPRAVA ÚČETNICTVÍ
Účetnictví se řídí zákony a předpisy. Nelze ho vést libovolně, protože účetnictví musí být srovnatelné, průkazné a důvěryhodné.

📘 HLAVNÍ PRÁVNÍ NORMY:
• Zákon o účetnictví  
• Vyhlášky Ministerstva financí  
• České účetní standardy  
• Vnitropodnikové směrnice  

📋 ZÁKLADNÍ POŽADAVKY NA ÚČETNICTVÍ:
• úplnost – nic nesmí chybět  
• správnost – musí odpovídat skutečnosti  
• průkaznost – vše musí být doloženo dokladem  
• srozumitelnost – musí být čitelné a přehledné  
• trvalost – musí být archivováno  

🧾 POVINNOSTI ÚČETNÍ JEDNOTKY:
• vést účetní knihy  
• archivovat doklady  
• provádět inventarizaci  
• sestavit účetní závěrku  
• dodržovat zákon o účetnictví  

🧪 PRAKTICKÝ PŘÍKLAD:
Pokud firma ztratí doklady, může jí finanční úřad doměřit daň a udělit pokutu.

Právní úprava zajišťuje, že účetnictví je důvěryhodné a použitelné pro všechny uživatele.`,
      otazky: [
        {
          q: "Jaké jsou nejdůležitější právní normy upravující účetnictví?",
          a: "Zákon o účetnictví, vyhlášky Ministerstva financí, České účetní standardy a vnitropodnikové směrnice."
        },
        {
          q: "Jaké jsou základní požadavky na správné vedení účetnictví?",
          a: "Musí být úplné, správné, průkazné (vše doloženo dokladem), srozumitelné a trvalé."
        },
        {
          q: "Jaké povinnosti má účetní jednotka ohledně dokladů a knih?",
          a: "Musí vést účetní knihy, provádět inventarizaci, archivovat doklady a sestavovat účetní závěrku."
        }
      ]
    },

    { 
      id: "ucetni-jednotky", 
      titul: "Účetní jednotky", 
      obsah: `🏢 CO JE ÚČETNÍ JEDNOTKA?
Účetní jednotka je subjekt, který má povinnost vést účetnictví.

📘 KDO MUSÍ VÉST ÚČETNICTVÍ?
• všechny právnické osoby (s.r.o., a.s., družstva, nadace)  
• zahraniční osoby podnikající v ČR  
• fyzické osoby, pokud splní podmínky  

🧍‍♂️ FYZICKÁ OSOBA MUSÍ VÉST ÚČETNICTVÍ, POKUD:
• je zapsaná v obchodním rejstříku  
• její obrat přesáhl 25 milionů Kč  
• dobrovolně se rozhodla vést účetnictví  

📋 POVINNOSTI ÚČETNÍ JEDNOTKY:
• vést účetní knihy  
• archivovat doklady  
• provádět inventarizaci  
• sestavit účetní závěrku  

🧪 PRAKTICKÝ PŘÍKLAD:
OSVČ, která má obrat 30 milionů Kč, musí začít vést účetnictví od následujícího roku.

Účetní jednotka odpovídá za správnost účetnictví.`,
      otazky: [
        {
          q: "Co nebo kdo je účetní jednotka?",
          a: "Je to subjekt (firma nebo člověk), který má ze zákona povinnost vést účetnictví."
        },
        {
          q: "Kdy musí fyzická osoba (OSVČ) povinně začít vést účetnictví?",
          a: "Pokud její obrat přesáhne 25 milionů Kč, nebo pokud je zapsaná v obchodním rejstříku."
        },
        {
          q: "Které subjekty musí vést účetnictví vždy, bez ohledu na obrat?",
          a: "Všechny právnické osoby (s.r.o., a.s., nadace) a zahraniční osoby podnikající v ČR."
        }
      ]
    },

    { 
      id: "ucetni-obdobi", 
      titul: "Účetní období", 
      obsah: `📅 CO JE ÚČETNÍ OBDOBÍ?
Účetní období je časový úsek, za který se vede účetnictví. Standardně trvá 12 měsíců.

📘 TYPY ÚČETNÍHO OBDOBÍ:

🟦 KALENDÁŘNÍ ROK:
• od 1. 1. do 31. 12.  
• nejčastější varianta  

🟥 HOSPODÁŘSKÝ ROK:
• začíná jiným měsícem než leden  
• například od 1. 4. do 31. 3.  
• využívají ho firmy se sezónní činností  

📋 CO SE DĚJE NA ZAČÁTKU OBDOBÍ?
• otevírají se účetní knihy  
• přenáší se počáteční stavy  

📋 CO SE DĚJE NA KONCI OBDOBÍ?
• uzavírají se účetní knihy  
• sestavuje se účetní závěrka  

🧪 PRAKTICKÝ PŘÍKLAD:
Lyžařské středisko používá hospodářský rok, protože hlavní sezóna je v zimě.

Účetní období je základní časový rámec účetnictví.`,
      otazky: [
        {
          q: "Co je to účetní období a jak dlouho trvá?",
          a: "Je to časový úsek, za který se vede účetnictví. Standardně trvá přesně 12 měsíců."
        },
        {
          q: "Jaký je rozdíl mezi kalendářním a hospodářským rokem?",
          a: "Kalendářní rok začíná 1. ledna. Hospodářský rok začíná jakýmkoliv jiným měsícem a využívají ho sezónní firmy."
        },
        {
          q: "Co musí účetní udělat na konci účetního období?",
          a: "Musí uzavřít účetní knihy a sestavit účetní závěrku."
        }
      ]
    },

    { 
      id: "ucetni-doklady", 
      titul: "Účetní doklady", 
      obsah: `📄 CO JSOU ÚČETNÍ DOKLADY?
Účetní doklad je záznam o hospodářské operaci. Bez dokladu nelze účtovat.

📘 DRUHY ÚČETNÍCH DOKLADŮ:

🟦 VNĚJŠÍ DOKLADY:
• faktury přijaté  
• faktury vydané  
• bankovní výpisy  

🟥 VNITŘNÍ DOKLADY:
• příjemky  
• výdejky  
• výplatní listiny  
• vnitřní účetní doklady  

📋 POŽADAVKY NA DOKLAD:
• musí být čitelný  
• musí být úplný  
• musí být pravdivý  
• musí být průkazný  

🧪 PRAKTICKÝ PŘÍKLAD:
Pokud firma zaplatí hotově, musí mít pokladní doklad. Bez něj nelze operaci zaúčtovat.

Účetní doklad je základní důkazní prostředek v účetnictví.`,
      otazky: [
        {
          q: "Proč jsou účetní doklady tak důležité?",
          a: "Je to záznam o operaci a funguje jako důkaz. Platí pravidlo: Bez dokladu nelze účtovat."
        },
        {
          q: "Vyjmenuj příklady vnějších účetních dokladů.",
          a: "Přijaté a vydané faktury, bankovní výpisy."
        },
        {
          q: "Vyjmenuj příklady vnitřních účetních dokladů.",
          a: "Příjemky, výdejky a výplatní listiny zaměstnanců."
        }
      ]
    },

    { 
      id: "nalezitosti-dokladu", 
      titul: "Náležitosti účetního dokladu", 
      obsah: `🧾 CO MUSÍ OBSAHOVAT ÚČETNÍ DOKLAD?
Každý účetní doklad musí obsahovat zákonem stanovené náležitosti.

📋 NÁLEŽITOSTI DOKLADU:
• označení dokladu  
• popis operace  
• účastníky operace  
• peněžní částku  
• datum vyhotovení  
• datum uskutečnění operace  
• podpis odpovědné osoby  

📌 DALŠÍ ÚDAJE:
• variabilní symbol  
• sazba DPH  
• číslo smlouvy  
• množství a cena  

🧪 PRAKTICKÝ PŘÍKLAD:
Faktura musí obsahovat všechny náležitosti. Pokud chybí například datum uskutečnění zdanitelného plnění, může být doklad neplatný.

Správné náležitosti dokladu jsou klíčové pro průkaznost účetnictví.`,
      otazky: [
        {
          q: "Jaké základní údaje (náležitosti) musí mít každý doklad?",
          a: "Označení, popis operace, účastníky, částku, datum vyhotovení/uskutečnění a podpis."
        },
        {
          q: "Které další údaje mohou být na dokladu, i když nejsou vždy základem?",
          a: "Například variabilní symbol, sazba DPH, číslo smlouvy nebo cena za kus."
        },
        {
          q: "Co se stane, pokud na dokladu chybí povinná náležitost (např. datum)?",
          a: "Doklad může být považován za neplatný a účetnictví tím ztrácí průkaznost."
        }
      ]
    },

    { 
      id: "obeh-dokladu", 
      titul: "Oběh účetních dokladů", 
      obsah: `🔄 CO JE OBĚH ÚČETNÍCH DOKLADŮ?
Oběh účetních dokladů je cesta dokladu od jeho vzniku až po archivaci.

📋 KROKY OBĚHU DOKLADŮ:
1. vznik nebo přijetí dokladu  
2. třídění dokladů podle druhu  
3. kontrola dokladu  
   – věcná správnost  
   – formální správnost  
4. předkontace – určení účtů  
5. zaúčtování dokladu  
6. archivace dokladu  

🎯 PROČ JE OBĚH DOKLADŮ DŮLEŽITÝ?
• zajišťuje správnost účetnictví  
• minimalizuje chyby  
• zajišťuje dohledatelnost dokladů  

🧪 PRAKTICKÝ PŘÍKLAD:
Faktura přijde do firmy → účetní ji zkontroluje → přiřadí účty → zaúčtuje → uloží do archivu.

Správný oběh dokladů je základ kvalitního účetnictví.`,
      otazky: [
        {
          q: "Co to vlastně je oběh účetních dokladů?",
          a: "Je to celá cesta dokladu ve firmě – od jeho vzniku (nebo přijetí) až po konečnou archivaci."
        },
        {
          q: "Co se děje s dokladem ve fázi kontroly?",
          a: "Kontroluje se jeho věcná a formální správnost (zda jsou tam všechny údaje a zda se transakce opravdu stala)."
        },
        {
          q: "Co znamená pojem 'předkontace'?",
          a: "Je to určení konkrétních účtů, na které se daný doklad později zaúčtuje."
        }
      ]
    },

    { 
      id: "archivace", 
      titul: "Archivace dokladů", 
      obsah: `📦 CO JE ARCHIVACE?
Archivace dokladů je povinnost účetní jednotky. Doklady se musí uchovávat po zákonem stanovenou dobu.

📅 ARCHIVAČNÍ LHŮTY:
• účetní závěrka: 10 let  
• účetní doklady: 5 let  
• mzdové listy: až 30 let  

📦 FORMY ARCHIVACE:
• papírová  
• elektronická  

🔐 POŽADAVKY NA ARCHIV:
• bezpečnost  
• ochrana před zničením  
• ochrana před ztrátou  
• ochrana před neoprávněným přístupem  

🧪 PRAKTICKÝ PŘÍKLAD:
Pokud firma ztratí doklady, může jí finanční úřad doměřit daň a udělit pokutu.

Archivace je důležitá pro kontrolu i pro právní jistotu firmy.`,
      otazky: [
        {
          q: "Jak dlouho se musí povinně archivovat účetní závěrka a běžné doklady?",
          a: "Účetní závěrka se uchovává 10 let, běžné účetní doklady 5 let."
        },
        {
          q: "Které firemní dokumenty se musí archivovat ze všech nejdéle?",
          a: "Mzdové listy, ty se musí schovávat až 30 let kvůli důchodům zaměstnanců."
        },
        {
          q: "Před čím musí být chráněn firemní archiv?",
          a: "Před zničením, ztrátou a hlavně před neoprávněným přístupem cizích osob."
        }
      ]
    }
  ]
};