setImmediate(() => {
  console.log("1st immediate");
});

process.nextTick(() => {
  console.log("1st process.nextTick");
});

console.log("program started");

setTimeout(() => {
  console.log("1st timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("1st promise");
});

process.nextTick(() => {
  console.log("2nd process.nextTick");
});
 