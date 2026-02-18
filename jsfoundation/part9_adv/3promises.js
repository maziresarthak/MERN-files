// Promise basic : https://youtu.be/NJwRQgsu1Q8?si=cwhcdlMHx9Y2fhET
// Promisses is a utility being provided by js
// We know that some functions take time, probably a network call, writing something in the files, quering something in the DB, there are lot of situations like that. If we delibaretly want to create such situations promises are a neat way of doing the things
// Lets assume the function below wants some delay then I can manually invoke a promise
function fetchData() {
  // Promises takes callback that is a function
  // It's expected to pass 2 parameters in the promise that is, whenever you make a promise either you keep it or not keep it thats the basic idea for the 2 parameters so either it will be solved or rejected
  // Reject in this case means that hey promise didn't work the way we expected it to behave so we send that kind of data, if the promise is resolved the way we want it to be then we send that kind of data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      //   let success = false;
      if (success) {
        resolve("Data fetched successfully"); // Now here in resolve and reject I can pass any kind of data like array, object, number or string
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
} // Till here its promise creation now we need to consume it

// let resonse = fetchData();
// console.log(fetchData()); // Every single promise has some kind of state associated with it, there are 3 states look in mdn, I have copy pasted definations down from mdn, her it just give me peding
// A Promise is in one of these states:

// 1> pending: initial state, neither fulfilled nor rejected.
// 2>fulfilled: meaning that the operation was completed successfully.
// 3> rejected: meaning that the operation failed.

// Then for resolve, anything sent via resolve(may it be string, var, object) that whole thing is catched up by then
// Catch for reject, anything sent via reject(may it be string, var, object) that whole thing is catched up by catch
// Then and catch also take a callback
// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// So revision : Promises are always created by new, promise always takes a callback/Function. the 2 parameters it takes is resolve and reject, resolve is for when everything goes success and whatever passed in resolved is linked with '.then' and twe can catch the data in '.then',  reject is linked with '.catch' vice a versa
// lets do a then linkage
fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase(); // This return string, object or anything is passed on to next thien chain, where we take retrun value in the parameter of next then chain which is 'value' for now, its mandatory to pass on nect then chain to return something if I don't link new then then only data will be consoled nothing will be retruned so yeah return gets passed on to next then chain
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
