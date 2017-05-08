// const southBeachAverageScore = southBeach['businesses']
//   .map(d => d.rating)
//   .reduce((acc, val, index) => acc + ((val - acc) / (index + 1)) );


const NEIGHBORHOOD_RAW_DATA = {
  "South Beach": southBeach,
  "Chinatown": chinatown,
  "Nob Hill": nobHill,
  "Ingleside": ingleside,
  "Castro": castro,
  "Sunset": sunset,
  "Bayview": bayview,
  "Portola": portola,
  "Lake Merced": lakeMerced,
  "Twin Peaks": twinPeaks,
  "North Beach": northBeach,
  "Nob Hill": nobHill,
  "Tenderloin": tenderloin,
  "SoMa": soma,
  "Mission": mission,
  "Financial District": fidi,
  "Lower Pacific Heights": lowerPacificHeights,
  "Taraval": taraval,
  "Panhandle": panhandle,
  "Inner Richmond": innerRichmond,
  "Outer Richmond": outerRichmond,
  "Marina": marina,
  "Bayshore": bayshore,
  "Rincon Hill": rinconHill,
};

const HEAT_SCORE = {
  "4.0": "yellow",
  "4.1": "orange",
  "4.2": "orangered",
  "4.3": "darkorange",
  "4.4": "red",
  "4.5": "darkred"
};

const NEIGHBORHOOD_HEAT_SCORE = {};

const keys = Object.keys(NEIGHBORHOOD_RAW_DATA);
keys.forEach(key => {
	NEIGHBORHOOD_HEAT_SCORE[key] = NEIGHBORHOOD_RAW_DATA[key]['businesses']
	  .map(d => d.rating)
	  .reduce((acc, val, index) => acc + ((val - acc) / (index + 1)))
	  .toFixed(1);
	});




