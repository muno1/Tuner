inharmonicityCalc = (stringInfo) => {
  let inharmonicity = 0;
  if (!checkStringInfo(stringInfo)) return 0;
  inharmonicity =
    (Math.pow(stringInfo.diameter, 2) /
      Math.pow(stringInfo.vibrantPart, 4) /
      Math.pow(stringInfo.frequency, 2)) *
    stringInfo.elasticityConst;
  return inharmonicity;
};

// Scorro ogni elemento del stringInfo, per controllare che siano tutti numeri.

checkStringInfo = (_stringInfo) => {
  for (const key in _stringInfo) {
    if (_stringInfo.hasOwnProperty(key)) {
      if (isNaN(_stringInfo[key])) return false;
      if (_stringInfo[key] == 0) return false;
      return true;
    }
  }
};

export default inharmonicityCalc;
