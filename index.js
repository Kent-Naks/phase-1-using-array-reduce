

// Code your solution here
// Given batteryBatches array
const batteryBatches = [30, 50, 70];

// Using reduce to sum up all the elements in batteryBatches
const totalBatteries = batteryBatches.reduce((acc, current) => acc + current, 0);

console.log(totalBatteries); // Output: 150

