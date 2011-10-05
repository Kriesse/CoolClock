/*
Because these OVERRIDE the skin(s) defined in coolclock.js itself, we make sure the 'default skin' is also
adjusted accordingly.
*/
CoolClock.config.defaultSkin = 'chunkySwiss';


CoolClock.config.skins = {

  swissRail: {
    outerBorder:      { lineWidth: 2, radius: 95, color: "black", fillColor: 'white', alpha: 1 },
    smallIndicator:   { lineWidth: 2, startAt: 88, endAt: 92, color: "black", alpha: 1 },
    largeIndicator:   { lineWidth: 4, startAt: 79, endAt: 92, color: "black", alpha: 1 },
    hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "black", alpha: 1 },
    minuteHand:       { lineWidth: 7, startAt: -15, endAt: 75, color: "black", alpha: 1 },
    secondHand:       { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: 1 },
    secondDecoration: { lineWidth: 1, startAt: 70, radius: 4, fillColor: "red", color: "red", alpha: 1 },
    digital:          { lineWidth: 0, color: 'black', fillColor: 'black', font: '18px sans-serif', AmPm: false }
  },

  dutchRail: {
    outerBorder:      { lineWidth: 2, radius: 95, color: "black", fillColor: 'white', alpha: 1 },
    smallIndicator:   { lineWidth: 2, startAt: 88, endAt: 92, color: "black", alpha: 1 },
    largeIndicator:   { lineWidth: 4, startAt: 79, endAt: 92, color: "black", alpha: 1 },
    hourHand:         { lineWidth: 8, startAt: -15, endAt: 50, color: "black", alpha: 1 },
    minuteHand:       { lineWidth: 7, startAt: -15, endAt: 75, color: "black", alpha: 1 },
    secondHand:       { lineWidth: 1.5, startAt: -20, endAt: 85, color: "black", alpha: 1 },
    secondDecoration: { lineWidth: 4, startAt: 60, radius: 6, fillColor: "white", color: "black", alpha: 1 },
    digital:          { lineWidth: 1.3, color: 'black', font: '16px sans-serif', AmPm: false, timeTextPosition: { textPosX: 100, textPosY: 60 }  }
  },

  chunkySwiss: {
    outerBorder:      { lineWidth: 4, radius: 97, color: "black", fillColor: 'white', alpha: 1 },
    smallIndicator:   { lineWidth: 4, startAt: 89, endAt: 93, color: "black", alpha: 1 },
    largeIndicator:   { lineWidth: 8, startAt: 80, endAt: 93, color: "black", alpha: 1 },
    hourHand:         { lineWidth: 12, startAt: -15, endAt: 60, color: "black", alpha: 1 },
    minuteHand:       { lineWidth: 10, startAt: -15, endAt: 85, color: "black", alpha: 1 },
    secondHand:       { lineWidth: 4, startAt: -20, endAt: 85, color: "red", alpha: 1 },
    secondDecoration: { lineWidth: 2, startAt: 70, radius: 8, fillColor: "red", color: "red", alpha: 1 },
    digital:          { lineWidth: 0, color: 'black', fillColor: 'black', font: /* italic bold */ '24px sans-serif', AmPm: false, alpha: 1, timeTextPosition: { textPosX: 100, textPosY: 140 } }
  }
};
