function clamp(x, a, b) {
  if (x < a) x = a;
  if (x > b) x = b;
  return x;
}

function mapLinear(x, a1, a2, b1, b2) {
  return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}

function randInt(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}

function randFloat(low, high) {
  return low + Math.random() * (high - low);
}

// UUID https://github.com/mrdoob/three.js/blob/master/src/math/MathUtils.js
const _lut = [];

for (let i = 0; i < 256; i++) {
  _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
}

function generateUUID() {
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

  const d0 = (Math.random() * 0xffffffff) | 0;
  const d1 = (Math.random() * 0xffffffff) | 0;
  const d2 = (Math.random() * 0xffffffff) | 0;
  const d3 = (Math.random() * 0xffffffff) | 0;
  const uuid =
    _lut[d0 & 0xff] +
    _lut[(d0 >> 8) & 0xff] +
    _lut[(d0 >> 16) & 0xff] +
    _lut[(d0 >> 24) & 0xff] +
    "-" +
    _lut[d1 & 0xff] +
    _lut[(d1 >> 8) & 0xff] +
    "-" +
    _lut[((d1 >> 16) & 0x0f) | 0x40] +
    _lut[(d1 >> 24) & 0xff] +
    "-" +
    _lut[(d2 & 0x3f) | 0x80] +
    _lut[(d2 >> 8) & 0xff] +
    "-" +
    _lut[(d2 >> 16) & 0xff] +
    _lut[(d2 >> 24) & 0xff] +
    _lut[d3 & 0xff] +
    _lut[(d3 >> 8) & 0xff] +
    _lut[(d3 >> 16) & 0xff] +
    _lut[(d3 >> 24) & 0xff];

  // .toUpperCase() here flattens concatenated strings to save heap memory space.
  return uuid.toUpperCase();
}

function deepCopyFromTo(from, to = {}) {
  const entries = Object.entries(from || {});

  // create any objects/values that are missing
  entries.forEach(([key, value]) => {
    if (!(key in to)) {
      to[key] = typeof from[key] === "object" ? {} : from[key];
    }
  });

  // recursively set the values
  entries.forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      deepCopyFromTo(value, to[key]);
    } else {
      to[key] = value;
    }
  });

  return to;
}

export {
  deepCopyFromTo,
  generateUUID,
  clamp,
  mapLinear,
  lerp,
  randInt,
  randFloat,
};
