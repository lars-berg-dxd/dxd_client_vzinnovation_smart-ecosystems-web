// stockMedia.js

import paths from "../static/stock_512/*.*";

const personas = ["Citizen", "Student", "Worker", "Patient"];

Object.entries(paths).forEach(([key, val], index) => {
  val.personna = personas[index % personas.length];
});

export { paths, personas };
