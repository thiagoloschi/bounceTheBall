export const causeThat = {
  isNice: 'NICE',
  isGood: 'GOOD SKILLS',
  isAwesome: 'AWESOME',
  isWow: 'WOOW',
  isKeepItUp: 'KEEP IT UP',
  isUnbelievable: 'UNBELIEVABLE',
  isColossal: 'COLOSSAL',
  isOutrageos: 'OUTRAGEOUS',
  isInsane: 'INSANE',
  isKing: 'KING OF THE FUCKING WORLD',
};

export const withMotivation = (stage) => {
  switch (stage) {
    case 20:
      return causeThat.isNice;
    case 40:
      return causeThat.isGood;
    case 60:
      return causeThat.isAwesome;
    case 80:
      return causeThat.isWow;
    case 100:
      return causeThat.isKeepItUp;
    case 120:
      return causeThat.isUnbelievable;
    case 140:
      return causeThat.isColossal;
    case 160:
      return causeThat.isOutrageos;
    case 180:
      return causeThat.isInsane;
    case 200:
      return causeThat.isKing;
    default:
      return undefined;
  }
};
