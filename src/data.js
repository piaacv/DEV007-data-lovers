import tarot from './data/tarot/tarot.js';
const cards= tarot.cards;

export const arcadeMinorFilter = cards.filter(arcadeMinorCards => {
  return arcadeMinorCards.type==="minor";
});

export const arcadeMajorFilter = cards.filter(arcadeMajorCards => {
  return arcadeMajorCards.type==="major";
});

