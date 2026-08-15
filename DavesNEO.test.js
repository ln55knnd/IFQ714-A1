//DavesNEO_test file link
test("returns Apollo orbit class NEO only", () => {
  const { allApollo } = require("./DavesNEO.js");
  expect(allApollo[6].orbit_class).toBe("Apollo");
});
test("returns correct QTY Apollo objects", () => {
  const { allApollo } = require("./DavesNEO.js");
  expect(allApollo).toHaveLength(105);
});
test("verify largest 10 NEO", () => {
  const { largestTenNeo } = require("./DavesNEO.js");
  expect(largestTenNeo).toHaveLength(10);
  expect(largestTenNeo).not.toHaveLength(3);
});
