// Watch the very easy 2 videos on api
// API basic(apna clg) : https://youtu.be/XGa4onZP66Q?si=Ku0wtQX1toR1Mp9x
// and
// https://youtu.be/0PaWV3wIfkM?si=8pl-Gz1-ygNrmESP (chaiaurcode)
// // For fetch watch this 2 videos https://youtu.be/Rive84an6Lc?si=u6CAykhBKZvWAxgk & https://youtu.be/VLiE5tyfko4?si=6jhFESVhe4u7uaDW
// Basic idea of fetch and a cool pokemon project : https://youtu.be/r4MLHHLctKw?si=vkXdWFcWeIJHqqTH
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "ae7e67e397709ed5d3bfa3623aff9ea4"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.toLowerCase().trim();
    if (!city) return; // Now instead of using if(city === "") return we can use !city as "" empty sting is considered a false value thus we can use !city

    // Whenever you are making a web req to any other server or any DB you have to remember 2 things :
    // It may throw an error
    // Server/ Database is always in another continent

    //    So what I mean by 'it may throw an error' if you are making a web req try to wrap it up in some kind of a safe zone, it could be a customised safezone or atleast a trycatch
    try {
      const weatherData = await fetchWeatherData(city); // This response is never immediate as we know the server is on another continent so I have to wati a little so that to grab the respone thus we use await, now await only works on async function so async keyword on line 12 and 28
      displayWeatherData(weatherData);
    } catch (error) {
      // Now this error is diff from error  on line 45 this error bacic ally represents any bug or server down error or maybe a fetch failed error, the down error is for inappropriate city name injected
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // Gets the data
    // Refer mdn to learn more about fetch api : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const respone = await fetch(url);
    console.log(typeof respone); // The o/p I get is an object, so when you hit the fetch it gives an object and all the data is inside it
    console.log("RESPONSE : ", respone); // We get here a promise which shows pending status, so here for promise we can use .then or .catch to resolve the promise or we can use async before the fetch function on line 34 so hey I will await till the promise is fullfiled and then after that give me response
    // Basically when the response object has a value '.ok' that is true then we consider that we have recieved the response and can proceed further

    // ith oaryatn sagla perfect ahe pan ha jo resposnse ahe na to ek complex JS ibject ahe jo evdha kalat nahi , me kay karto hya response la json madhe convert karto whcich makes it readable ani magh tyala data la assign karto

    if (!respone.ok) {
      // So we know response.ok is true but if its false we will throw an error, he ji goshta ahe hi console madhe dista he on screen nahi disat
      throw new Error("City not found");
    }

    const data = await respone.json();
    // Now basically whatever the response you have I would love to convert that into a json so that so that its a proper object and I can extract each of the data.
    // Any object that you are creating via calling the fetch() has this method json() that we can use and inject

    return data;
    // So in all this function just makes a web request and gets the data back. So function should basically only do one job, so here its job is to only fetch the data nad not to display it. We have a different function to do that
  }

  function displayWeatherData(data) {
    // Display the data
    console.log(data);
    // Now I want to  extract some of the info from data,
    const { name, main, weather } = data;
    // Data in all ek object ahe ani magh he sagle keys ahe ani kahi keys fakt number ahe,a kahi string ani kahi object , etc
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`; // Main ek object ahe so we need . to access the key of it
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`; // So basically weather in all ek array ahe ani tya array madhe 0th index position var object ahet, ata ithe 0th position var ek object ahe jyat bharpur info ahe like id, main, description ,etc but in all we just want description so we use '.'. So in conclusion pahila array mhanun square brackets maggh at object ahe so '.'.
    // The whole idea of handling the api is to understand the data structure which one is object and which is an array so that you put the keys accordingly

    // Unlock the display
    weatherInfo.classList.remove("hidden"); // Now it will appear
    errorMessage.classList.add("hidden"); // If there is any error from previous part just hide it
    // Basically hidden class kay ahe he css file madhe bagh its just display : none, so je display hoyla hava tithe hidden class remove keli pahije karan ofc ts display none ani je hide karaychay tithe add kela pahije
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    // Basically hidden class kay ahe he css file madhe bagh its just display : none, so je display hoyla hava tithe hidden class remove keli pahije karan ofc ts display none ani je hide karaychay tithe add kela pahije
  }
});
// Ata basically 35, 36 ,54 he print karaychi garaz nahiye ata we can comment it out but tasahch thevla kiva nahi thevla kahihi farak padat nahi pan its for understanding what is type of response, what is response, and in all what is the data
