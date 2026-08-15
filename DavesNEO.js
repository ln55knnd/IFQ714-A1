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
