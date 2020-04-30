const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortBands = bands.sort(function (a, b) {
//   return strip(a) > strip(b) ? 1 : -1;
    if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortBands);
