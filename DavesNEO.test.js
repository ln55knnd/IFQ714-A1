//DavesNEO_test file link

test("returns Apollo orbit class NEO only", () => {
  const { apolloNEO } = require("./DavesNEO.js");
  expect(apolloNEO[6].orbit_class).toBe("Apollo");
});
test("returns correct QTY Apollo objects", () => {
  const { apolloNEO } = require("./DavesNEO.js");
  expect(apolloNEO).toHaveLength(105);
});
test("verify largest 10 NEO", () => {
  const { largestTenNeo } = require("./DavesNEO.js");
  expect(largestTenNeo).toHaveLength(10);
  expect(largestTenNeo).not.toHaveLength(3);
});
describe("deep copy validation", () => {
  test("validate deep copy", () => {
    const { neowise } = require("./DavesNEO.js");
    const { neowisedeep } = require("./DavesNEO.js");
    expect(neowisedeep).not.toBe(neowise);
  });
  test("change neowisedeep, no change to neowise", () => {
    const { neowise } = require("./DavesNEO.js");
    const { neowisedeep } = require("./DavesNEO.js");
    neowisedeep[0].period_yr = "orbit_duration";
    expect(neowisedeep[0].period_yr).toBe("orbit_duration");
    expect(neowise[0].period_yr).not.toBe("orbit_duration");
  });
});
