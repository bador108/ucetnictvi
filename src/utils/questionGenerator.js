export const generateQuestions = (text) => {
  if (!text) return [];

  const questions = [];
  const lines = text.split('\n');

  lines.forEach(line => {
    // 1. Detekce odrážek (např. • majetek firmy)
    if (line.includes('•')) {
      const cleanLine = line.replace('•', '').trim();
      const parts = cleanLine.split('–'); // Pokud tam máš vysvětlení přes pomlčku
      
      if (parts.length > 1) {
        questions.push({
          q: `Co v kontextu tématu znamená: ${parts[0].trim()}?`,
          a: parts[1].trim()
        });
      } else {
        questions.push({
          q: `Patří "${cleanLine}" do tohoto tématu?`,
          a: `Ano, je to jeden z klíčových bodů: ${cleanLine}`
        });
      }
    }

    // 2. Detekce definic (text za otazníkem nebo velká písmena)
    if (line.includes('?')) {
      const nextLine = lines[lines.indexOf(line) + 1];
      if (nextLine && nextLine.length > 5) {
        questions.push({
          q: line.trim(),
          a: nextLine.trim()
        });
      }
    }
  });

  // Pokud je otázek moc, náhodně vybereme 5, aby to nebylo únavné
  return questions.sort(() => 0.5 - Math.random()).slice(0, 5);
};