function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Sarthak", url: "https://sarthak.com" });
      //   reject({ name: "Sarthak", url: "https://sarthak.com" });
    }, 3000);
  });
}

// Async : This data might take some time
// Trycatch keyword : Means try to do certain task if it happens thats great but if there is error been thrown by the promises or by any other reason don't just crash the program , just throw the error or whatever you want to do with this but keep the program up and running
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData(); // You can only use this await keyword when you have async over the function
    console.log("User data fetched successfully");
    console.log("User data : ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
// If we try for reject catch will be called but it shoes the same userData the same object because we did'nt write anything for error
