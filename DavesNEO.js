//Use file system syntax and assign readFileSync method to NEOWISE dataset (block scoped constant)
const fs = require("fs");
const data = fs.readFileSync("NEOWISE_Dataset.json", "utf8");
const neowise = JSON.parse(data);
const neoSort = neowise.sort((a, b) =>
  b.orbit_class.localeCompare(a.orbit_class),
);
//JSON file w/NEOWISE_Dataset sorted by orbit_class
fs.writeFileSync("neoSort.json", JSON.stringify(neoSort, null, 2), "utf8");

//I confirm complete dataset | 202 lines parsed
console.log(`total dataset contains ${neowise.length} NEOs`);

//console.table(neowise);

//I built a constructor to display all Apollo class NEOs that are potentially hazardous
const apolloClass = neowise.filter(
  (neowise) => neowise.orbit_class === "Apollo" && neowise.pha,
);
console.log(
  "this is a list of all Apollo class NEOs that are potentially hazardous",
);
console.table(apolloClass);

//.JSON containing PHA Apollo class NEOs
const neoarranged = JSON.stringify(apolloClass, null, 4);
//fs.writeFileSync("ApolloNeoPha.json", neoarranged, "utf8");

console.log(
  "here are the 10 largest objects (h_mag) indexed largest to smallest",
);

const largestTenNeo = neowise.sort((a, b) => b.h_mag - a.h_mag).slice(0, 10);
console.table(largestTenNeo); //not sure why h_mag column does not display? refer jest for expected output.
//.JSON containing details of the QTY 10 largest NEOs
const largestTen = JSON.stringify(largestTenNeo, null, 4);

//fs.writeFileSync("tenLargestNeo.json", largestTen, "utf8");

//Apollo class Qty 105
const allApollo = neowise.filter((neowise) => neowise.orbit_class === "Apollo");
console.log("QTY 105 Apollo class NEOs");
console.table(allApollo);
//.JSON containing all Apollo class NEOs
const classApollo = JSON.stringify(allApollo, null, 4);
//fs.writeFileSync("neoArranged.json", classApollo, "utf8");

let min = allApollo[0];
let max = allApollo[0];
let total = 0;

for (let i = 0; i < allApollo.length; i++) {
  if (allApollo[i].q_au_1 < min.q_au_1) min = allApollo[i];

  if (allApollo[i].q_au_1 > max.q_au_1) max = allApollo[i];

  total += allApollo[i].q_au_1;
}
const average = total / allApollo.length;
//Apollo NEO with largest perihelion (furtherest distance from sun)
//console.log(`Apollo class ${allApollo[i].designation} NEO lstmax);
//Apollo NEO with smallest perihelion (closest to sun)
console.log("Apollo class NEO with closest orbit distance to sun:");
console.log(min);
console.log(
  "Apollo class NEOs (multiple) with furtherest orbit distance to sun:",
);
console.log(max);
console.log(
  "Apollo NEOs average perihelion measured in Astronimical Units (AUs):",
);
console.log(average.toFixed(2));
console.table(`min dist ${min}`);
//Amor class Qty 61
const allAmor = neowise.filter((neowise) => neowise.orbit_class === "Amor");
console.table(allAmor);
//.JSON containing all Amor class NEOs
const classAmor = JSON.stringify(allAmor, null, 4);
//fs.writeFileSync("neoArranged.json", classAmor, "utf8");

//Aten class Qty 15
const allAten = neowise.filter((neowise) => neowise.orbit_class === "Aten");
console.table(allAten);
//.JSON containing all Aten class NEOs
const classAten = JSON.stringify(allAten, null, 4);
//fs.writeFileSync("neoArranged.json", classAten, "utf8");

//Comets Qty 21
const allComet = neowise.filter((neowise) =>
  neowise.orbit_class.includes("Comet"),
);
console.table(allComet);
//.JSON containing all Comet class NEOs
const classComet = JSON.stringify(allComet, null, 4);
//fs.writeFileSync("neoArranged.json", classComet, "utf8");

//NEO with closest orbit to the sun
const orbit = neowise.map((item) => item.q_au_1);

module.exports = { allApollo, largestTenNeo };

//i want to update / remove index column for '10 largest'; why does h_mag column not display?
//I want to call out all Apollo NEOs with the same q_au_1 value -if I have time.
//I am not 'returning' any data -it's all print within console -include return statements if I have time.
const Comet = [
  {
    designation: "C/2010 J4 (WISE)",
    discovery_date: "2010-05-12T00:00:00.000",
    moid_au: 0.307,
    q_au_1: 1.09,
    q_au_2: 0,
    i_deg: 162.3,
    pha: null,
    orbit_class: "Parabolic Comet",
  },
  {
    designation: "C/2010 E3 (WISE)",
    discovery_date: "2010-03-05T00:00:00.000",
    moid_au: 1.546,
    q_au_1: 2.27,
    q_au_2: 0,
    i_deg: 96.48,
    pha: null,
    orbit_class: "Parabolic Comet",
  },
  {
    designation: "P/2010 D2 (WISE)",
    discovery_date: "2010-02-25T00:00:00.000",
    moid_au: 2.945,
    q_au_1: 3.66,
    q_au_2: 9.72,
    period_yr: 17.3,
    i_deg: 57.18,
    pha: null,
    orbit_class: "Jupiter-family Comet*",
  },
  {
    designation: "P/2014 L2 (NEOWISE)",
    discovery_date: "2014-06-07T00:00:00.000",
    moid_au: 1.224,
    q_au_1: 2.23,
    q_au_2: 10.42,
    period_yr: 15.91,
    i_deg: 5.18,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "P/2010 P4 (WISE)",
    discovery_date: "2010-08-06T00:00:00.000",
    moid_au: 0.854,
    q_au_1: 1.86,
    q_au_2: 5.55,
    period_yr: 7.13,
    i_deg: 24.1,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "P/2010 N1 (WISE)",
    discovery_date: "2010-07-05T00:00:00.000",
    moid_au: 0.491,
    q_au_1: 1.49,
    q_au_2: 4.92,
    period_yr: 5.74,
    i_deg: 12.88,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "245P/WISE",
    discovery_date: "2010-06-02T00:00:00.000",
    moid_au: 1.172,
    q_au_1: 2.14,
    q_au_2: 5.88,
    period_yr: 8.04,
    i_deg: 21.09,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "317P/WISE",
    discovery_date: "2010-05-27T00:00:00.000",
    moid_au: 0.204,
    q_au_1: 1.2,
    q_au_2: 4.65,
    period_yr: 5.01,
    i_deg: 10.65,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "P/2010 D1 (WISE)",
    discovery_date: "2010-02-17T00:00:00.000",
    moid_au: 1.683,
    q_au_1: 2.67,
    q_au_2: 5.63,
    period_yr: 8.45,
    i_deg: 9.65,
    pha: null,
    orbit_class: "Jupiter-family Comet",
  },
  {
    designation: "C/2010 L5 (WISE)",
    discovery_date: "2010-06-14T00:00:00.000",
    moid_au: 0.114,
    q_au_1: 0.79,
    q_au_2: 15.64,
    period_yr: 23.56,
    i_deg: 147.05,
    pha: null,
    orbit_class: "Halley-type Comet*",
  },
  {
    designation: "P/2010 JC81 (WISE)",
    discovery_date: "2010-05-10T00:00:00.000",
    moid_au: 0.828,
    q_au_1: 1.81,
    q_au_2: 14.46,
    period_yr: 23.19,
    i_deg: 38.69,
    pha: null,
    orbit_class: "Halley-type Comet*",
  },
  {
    designation: "P/2010 B2 (WISE)",
    discovery_date: "2010-01-22T00:00:00.000",
    moid_au: 0.63,
    q_au_1: 1.62,
    q_au_2: 4.6,
    period_yr: 5.49,
    i_deg: 8.93,
    pha: null,
    orbit_class: "Encke-type Comet",
  },
  {
    designation: "C/2014 N3 (NEOWISE)",
    discovery_date: "2014-07-04T00:00:00.000",
    moid_au: 2.888,
    q_au_1: 3.88,
    q_au_2: 16441.51,
    period_yr: 745640.58,
    i_deg: 61.63,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2014 C3 (NEOWISE)",
    discovery_date: "2014-02-14T00:00:00.000",
    moid_au: 0.866,
    q_au_1: 1.86,
    q_au_2: 214.97,
    period_yr: 1128.89,
    i_deg: 151.78,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 L4 (WISE)",
    discovery_date: "2010-06-15T00:00:00.000",
    moid_au: 2.53,
    q_au_1: 2.83,
    q_au_2: 157.36,
    period_yr: 716.78,
    i_deg: 102.82,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 KW7 (WISE)",
    discovery_date: "2010-05-16T00:00:00.000",
    moid_au: 1.625,
    q_au_1: 2.57,
    q_au_2: 197.11,
    period_yr: 997.65,
    i_deg: 147.06,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 G3 (WISE)",
    discovery_date: "2010-04-14T00:00:00.000",
    moid_au: 4.492,
    q_au_1: 4.91,
    q_au_2: 5260.08,
    period_yr: 135070.2,
    i_deg: 108.27,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 FB87 (WISE-Garradd)",
    discovery_date: "2010-03-28T00:00:00.000",
    moid_au: 2.538,
    q_au_1: 2.84,
    q_au_2: 595.66,
    period_yr: 5176.82,
    i_deg: 107.63,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 DG56 (WISE)",
    discovery_date: "2010-02-18T00:00:00.000",
    moid_au: 0.65,
    q_au_1: 1.59,
    q_au_2: 133.48,
    period_yr: 555.03,
    i_deg: 160.42,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 D4 (WISE)",
    discovery_date: "2010-02-28T00:00:00.000",
    moid_au: 6.373,
    q_au_1: 7.15,
    q_au_2: 122.19,
    period_yr: 520.06,
    i_deg: 105.66,
    pha: null,
    orbit_class: "Comet",
  },
  {
    designation: "C/2010 D3 (WISE)",
    discovery_date: "2010-02-26T00:00:00.000",
    moid_au: 3.586,
    q_au_1: 4.25,
    q_au_2: 23255.11,
    period_yr: 1254179.62,
    i_deg: 76.39,
    pha: null,
    orbit_class: "Comet",
  },
];

//this is the data that I am interested in calculating
const columns = ["moid_au", "q_au_1", "q_au_2", "i_deg"];
const results = [];
//loaded Comet data directly into JS file | printed results using console.log(JSON.stringify(allComet, null, 2)); > then 'copy and paste'
for (const column of columns) {
  const values = Comet.map((comet) => comet[column]);

  const min = Math.min(...values);
  const max = Math.max(...values);

  const sum = values.reduce((total, value) => total + value, 0);
  const average = sum / values.length;
  ///I would like to refine the output...
  results.push({
    column: column,
    min: min,
    max: max,
    average: average.toFixed(2),
  });
}

console.table(results);
console.log(
  "Note that parabolic orbit class comets have no recorded aphellian (q_au_2) because they are on a strict parabolic trajectory",
);
