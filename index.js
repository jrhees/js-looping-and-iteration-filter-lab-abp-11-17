// Code your solution in this file
function findMatching(drivers, driver) {
  return drivers.filter(function (name) { 
    return driver === name;
    
  });
}