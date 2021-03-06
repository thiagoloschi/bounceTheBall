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
  isProfessional: 'PROFESSIONAL',
  isKing: 'KING BOUNCER',
};

export const withMotivation = (stage) => {
  if (stage >= 220) {
    return causeThat.isKing;
  }
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
      return causeThat.isProfessional;
    default:
      return undefined;
  }
};
