// src/data.js
import { zakladyData } from './data/zaklady';
import { majetekData } from './data/majetek';
import { zdrojeData } from './data/zdroje';
import { rozvahaData } from './data/rozvaha';
import { uctovaniData } from './data/uctovani';
import { prikladyData } from './data/prikladyData'

// Tady spojíme všechna data do jednoho pole, které App.jsx očekává
export const allData = [
  zakladyData,
  majetekData,
  zdrojeData,
  rozvahaData,
  uctovaniData
].filter(Boolean); // Filtr zajistí, že pokud některý soubor ještě neexistuje, aplikace nespadne