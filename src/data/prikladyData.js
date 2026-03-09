export const prikladyData = {
  id: "priklady-uctovani",
  titul: "Praktické příklady k procvičení",
  podtemata: [

    {
      id: "zakladni-zasoby",
      titul: "Zásoby – základní příklady",
      obsah: `📦 ZÁSOBY – LEHKÉ PŘÍKLADY S VYSVĚTLENÍM
Základní operace se zásobami ukazují, jak fungují aktivní účty (112, 132) a nákladové účty (501, 504).`,
      cviceni: [
        { zadani: "Nákup materiálu v hotovosti", castka: "5 000 Kč", md: "112", d: "211", text: "Materiál (A) roste → MD. Pokladna (A) klesá → D." },
        { zadani: "Nákkup zboží na fakturu", castka: "12 000 Kč", md: "132", d: "321", text: "Zboží (A) roste → MD. Závazky (P) rostou → D." },
        { zadani: "Spotřeba materiálu", castka: "3 000 Kč", md: "501", d: "112", text: "Spotřeba je náklad → MD. Materiál ubývá → D." },
        { zadani: "Prodej zboží (tržba)", castka: "8 000 Kč", md: "311", d: "604", text: "Pohledávka roste → MD. Tržba je výnos → D." },
        { zadani: "Výdej zboží ze skladu", castka: "5 000 Kč", md: "504", d: "132", text: "Prodané zboží je náklad → MD. Zboží ubývá → D." },
        { zadani: "Nákup materiálu kartou", castka: "4 500 Kč", md: "112", d: "221", text: "Materiál roste → MD. Bankovní účet klesá → D." },
        { zadani: "Příjem hotovosti za prodej šrotu", castka: "900 Kč", md: "211", d: "648", text: "Pokladna roste → MD. Výnos → D." },
        { zadani: "Vrácení zboží dodavateli", castka: "2 000 Kč", md: "321", d: "132", text: "Závazek se snižuje → MD. Zboží ubývá → D." },
        { zadani: "Převod materiálu na zboží", castka: "1 500 Kč", md: "132", d: "112", text: "Zboží roste → MD. Materiál ubývá → D." },
        { zadani: "Příjem materiálu bez dokladu (dočasně)", castka: "1 000 Kč", md: "112", d: "389", text: "Materiál roste → MD. Dočasný závazek → D." }
      ]
    },

    {
      id: "inventarizace-lehka",
      titul: "Inventarizace – lehké příklady",
      obsah: `📋 INVENTARIZACE – LEHKÉ PŘÍKLADY
Inventarizace porovnává skutečný stav se stavem účetním. Přebytek = výnos. Manko = náklad.`,
      cviceni: [
        { zadani: "Inventurní přebytek materiálu", castka: "500 Kč", md: "112", d: "648", text: "Majetek roste → MD. Přebytek je výnos → D." },
        { zadani: "Manko na zboží (norma)", castka: "300 Kč", md: "549", d: "132", text: "Manko je náklad → MD. Zboží ubývá → D." },
        { zadani: "Předpis náhrady manka zaměstnanci", castka: "1 000 Kč", md: "335", d: "648", text: "Pohledávka za zaměstnancem → MD. Náhrada je výnos → D." },
        { zadani: "Inventurní přebytek pokladny", castka: "200 Kč", md: "211", d: "668", text: "Pokladna roste → MD. Výnos → D." },
        { zadani: "Inventurní manko pokladny", castka: "150 Kč", md: "569", d: "211", text: "Manko je náklad → MD. Pokladna klesá → D." },
        { zadani: "Přebytek zboží při inventuře", castka: "700 Kč", md: "132", d: "648", text: "Zboží roste → MD. Výnos → D." },
        { zadani: "Manko na materiálu (norma)", castka: "250 Kč", md: "549", d: "112", text: "Náklad → MD. Materiál ubývá → D." },
        { zadani: "Přebytek dlouhodobého majetku", castka: "5 000 Kč", md: "022", d: "648", text: "Majetek roste → MD. Výnos → D." },
        { zadani: "Manko na ceninách", castka: "300 Kč", md: "569", d: "213", text: "Náklad → MD. Cenné papíry ubývají → D." },
        { zadani: "Přebytek cenin", castka: "400 Kč", md: "213", d: "668", text: "Ceniny rostou → MD. Výnos → D." }
      ]
    },

    {
      id: "zasoby-stredni",
      titul: "Zásoby – střední obtížnost",
      obsah: `📦 ZÁSOBY – STŘEDNÍ PŘÍKLADY
Zde se objevují závazky, DPH, přebytky a spotřeba materiálu.`,
      cviceni: [
        { zadani: "Nákup materiálu na fakturu (bez DPH)", castka: "20 000 Kč", md: "112", d: "321", text: "Materiál roste → MD. Vzniká závazek → D." },
        { zadani: "Úhrada faktury z účtu", castka: "24 200 Kč", md: "321", d: "221", text: "Závazek zaniká → MD. Peníze ubývají → D." },
        { zadani: "Příjemka přebytku zboží", castka: "400 Kč", md: "132", d: "648", text: "Zboží roste → MD. Přebytek je výnos → D." },
        { zadani: "Výdej materiálu do výroby", castka: "7 000 Kč", md: "501", d: "112", text: "Náklad → MD. Materiál ubývá → D." },
        { zadani: "Nákup zboží + doprava", castka: "30 000 Kč + 1 500 Kč", md: "132", d: "321/211", text: "Zboží roste → MD. Doprava je součást ceny → MD." },
        { zadani: "Vrácení zboží dodavateli", castka: "2 000 Kč", md: "321", d: "132", text: "Závazek klesá → MD. Zboží ubývá → D." },
        { zadani: "Převod materiálu na zboží", castka: "3 000 Kč", md: "132", d: "112", text: "Zboží roste → MD. Materiál ubývá → D." },
        { zadani: "Nákup materiálu s DPH", castka: "10 000 Kč + 21 %", md: "112 / 343", d: "321", text: "Materiál + nárok na DPH → MD. Závazek → D." },
        { zadani: "Příjemka zboží bez faktury", castka: "5 000 Kč", md: "132", d: "389", text: "Zboží roste → MD. Dočasný závazek → D." },
        { zadani: "Vyřazení zboží (znehodnocení)", castka: "1 200 Kč", md: "549", d: "132", text: "Náklad → MD. Zboží ubývá → D." }
      ]
    },

    {
      id: "inventarizace-tezka",
      titul: "Inventarizace – těžké příklady",
      obsah: `📋 INVENTARIZACE – TĚŽKÉ PŘÍKLADY
Tady už se řeší manka nad normu, náhrady, dlouhodobý majetek a kombinace účtů.`,
      cviceni: [
        { zadani: "Manko na materiálu (nad normu)", castka: "8 000 Kč", md: "549", d: "112", text: "Manko = náklad → MD. Materiál ubývá → D." },
        { zadani: "Náhrada manka od zaměstnance", castka: "5 000 Kč", md: "335", d: "648", text: "Vzniká pohledávka → MD. Náhrada je výnos → D." },
        { zadani: "Přebytek zboží při inventuře", castka: "2 500 Kč", md: "132", d: "648", text: "Zboží roste → MD. Výnos → D." },
        { zadani: "Manko na výrobkách", castka: "8 000 Kč", md: "549", d: "123", text: "Výrobky ubývají → D. Manko je náklad → MD." },
        { zadani: "Chybějící notebook (zůstatková cena)", castka: "12 000 Kč", md: "549 / 082", d: "022", text: "Vyřazení majetku → D. Oprávky se ruší → MD." },
        { zadani: "Inventurní rozdíl pokladny – přebytek", castka: "300 Kč", md: "211", d: "668", text: "Pokladna roste → MD. Výnos → D." },
        { zadani: "Inventurní rozdíl pokladny – manko", castka: "400 Kč", md: "569", d: "211", text: "Náklad → MD. Pokladna ubývá → D." },
        { zadani: "Manko na ceninách", castka: "600 Kč", md: "569", d: "213", text: "Ceniny ubývají → D. Manko je náklad → MD." },
        { zadani: "Přebytek cenin", castka: "900 Kč", md: "213", d: "668", text: "Ceniny rostou → MD. Výnos → D." },
        { zadani: "Inventurní rozdíl dlouhodobého majetku", castka: "20 000 Kč", md: "082 / 549", d: "022", text: "Vyřazení majetku → D. Oprávky se ruší → MD." }
      ]
    },

    {
      id: "komplexni-priklady",
      titul: "Komplexní příklady – test",
      obsah: `🧠 KOMPLEXNÍ PŘÍKLADY – S VYSVĚTLENÍM
Kombinace úvěrů, zásob, DPH, nákladů a výnosů.`,
      cviceni: [
        { zadani: "Přijetí bankovního úvěru", castka: "200 000 Kč", md: "221", d: "461", text: "Bankovní účet roste → MD. Úvěr je závazek → D." },
        { zadani: "Splátka úvěru z účtu", castka: "30 000 Kč", md: "461", d: "221", text: "Dluh klesá → MD. Peníze ubývají → D." },
        { zadani: "Nákup zboží v hotovosti", castka: "2 000 Kč", md: "132", d: "211", text: "Zboží roste → MD. Hotovost klesá → D." },
        { zadani: "Prodej zboží + DPH", castka: "70 000 Kč + 21 %", md: "311", d: "604 / 343", text: "Pohledávka roste → MD. Tržba a DPH → D." },
        { zadani: "Výdej zboží ze skladu (PC)", castka: "45 000 Kč", md: "504", d: "132", text: "Náklad → MD. Zboží ubývá → D." },
        { zadani: "Manko na zboží (nad normu)", castka: "5 000 Kč", md: "549", d: "132", text: "Manko = náklad → MD. Zboží ubývá → D." },
        { zadani: "Náhrada manka zaměstnancem", castka: "2 000 Kč", md: "211", d: "648", text: "Pokladna roste → MD. Náhrada je výnos → D." },
        { zadani: "Nákup materiálu s DPH", castka: "15 000 Kč + 21 %", md: "112 / 343", d: "321", text: "Materiál + nárok na DPH → MD. Závazek → D." },
        { zadani: "Úhrada pohledávky od zákazníka", castka: "84 700 Kč", md: "221", d: "311", text: "Bankovní účet roste → MD. Pohledávka klesá → D." },
        { zadani: "Vyřazení zboží z důvodu expirace", castka: "3 500 Kč", md: "549", d: "132", text: "Náklad → MD. Zboží ubývá → D." }
      ]
    }

  ]
};