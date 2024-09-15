export function formatNouns(nouns: string[]): string {
  if (nouns.length === 0) {
    return '';
  }

  if (nouns.length === 1) {
    return nouns[0];
  }

  if (nouns.length === 2) {
    return `${nouns[0]} and ${nouns[1]}`;
  }

  const lastNoun = nouns.pop();
  return `${nouns.join(', ')} and ${lastNoun}`;
}
