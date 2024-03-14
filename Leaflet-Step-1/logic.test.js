// Test for the existence of the map object
test("Map object should be created", () => {
  expect(myMap).toBeDefined();
});

// Test for the existence of the tile layer
test("Tile layer should be added to the map", () => {
  expect(myMap.hasLayer(L.tileLayer)).toBeTruthy();
});

// Test for the correct attribution of the tile layer
test("Tile layer should have correct attribution", () => {
  const tileLayer = myMap.getLayers().find(layer => layer instanceof L.TileLayer);
  expect(tileLayer.options.attribution).toBe("Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>");
});

// Test for the correct API endpoint URL
test("API endpoint URL should be correct", () => {
  expect(queryUrl).toBe("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson");
});

// Test for the existence of the styleInfo function
test("styleInfo function should be defined", () => {
  expect(styleInfo).toBeDefined();
});

// Test for the existence of the getColor function
test("getColor function should be defined", () => {
  expect(getColor).toBeDefined();
});

// Test for the existence of the getRadius function
test("getRadius function should be defined", () => {
  expect(getRadius).toBeDefined();
});

// Test for the correct color returned by the getColor function
test("getColor function should return correct color", () => {
  expect(getColor(6)).toBe("#ea2c2c");
});

// Test for the correct radius returned by the getRadius function
test("getRadius function should return correct radius", () => {
  expect(getRadius(3)).toBe(12);
});

// Test for the existence of the legend control
test("Legend control should be added to the map", () => {
  expect(myMap.hasControl(legend)).toBeTruthy();
});// BEGIN: Test map object creation
test('Map object should be created with the correct center and zoom level', () => {
  expect(myMap.getCenter()).toEqual([39.9526, 75.1652]);
  expect(myMap.getZoom()).toEqual(5);
});
// END: Test map object creationdescribe("Map Initialization", function() {
  it("should initialize the map with the correct center and zoom level", function() {
    expect(myMap.getCenter()).toEqual([39.9526, 75.1652]);
    expect(myMap.getZoom()).toEqual(5);
  });
}); // END: Test map object creation    