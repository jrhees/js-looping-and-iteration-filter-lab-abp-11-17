// Code your solution in this file
function findMatching(drivers, driver) {
  return drivers.filter(function (name) {
    return driver.toLowerCase() === name.toLowerCase();

  });
}

function fuzzyMatch(drivers, start) {
  return drivers.filter(function (driver) {
    return driver.startsWith(string);
  });
}
