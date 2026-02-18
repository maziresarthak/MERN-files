// Ata fakt hya code madhe thoda farak ahe pahila extra kay ahe te sangto line 20 te line 31 and line 68 te 72 he extra ahe bakki line 14 te line 18 and line 60 te 63 he hyachya jagi adhi hota te comment kelay. Nemkay kay kelay te sangto pahila problem kay yet hota ki me kuthlihi garbage valu mhanje kuthlihi invalid city takli ki ti citylist madhe add hot hoti, ani jecvha tya city li var click kela ki magh alerthyacha City not found asa. Pan mala kay hava hota ki ti city citylist madhe addch nako hoyla so he karayla ofc mala addCityBtn chya click eventlistener madhe validation karava lagnar na. So pahila instead of  ha if (city && !citites.includes(city)) block jyat non empty city and array madhe no double same city he asel tar city push honar and all... pan ata hyachya avijit tyacha complement mhanje ulta mhanje ha  if (!city || citites.includes(city)) return block pudhe jauch denar nahi. Nantar ata city valid ahe ki nahi he fakt api through call karun response.ok ala kich kalta bakki kuthlach way nahi so me ek validCity() ca fn line 68 la tayarkela tyat response.ok lach return kela magh tyala line 23 madhe await karunt isValid const la assing kela. Ata as we know ki he sagla fetching ahe mhanun line 11 madhe apan tya callback function la async function lihto async prefix add karun. Lastly if else vaprun jar isValid true asel tar if block ne city add karto ani jar false asel tar aleert deto. Ani lastly line 60 te line 63 chi garaz nahi tyamule ofc me comment karto same for line 14 te line 18
document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";
  const cityInput = document.getElementById("city-input");
  const addCityBtn = document.getElementById("add-city-btn");
  const cityList = document.getElementById("city-list");
  const weatherContainer = document.getElementById("weather-container");

  let citites = JSON.parse(localStorage.getItem("cities")) || [];

  addCityBtn.addEventListener("click", async () => {
    const city = cityInput.value.toLocaleLowerCase().trim();

    // if (city && !citites.includes(city)) {
    //   citites.push(city);
    //   saveCities();
    //   renderCities();
    // }

    // !city mhanje city!== ""
    if (!city || citites.includes(city)) return;

    const isValid = await validCity(city);

    if (isValid) {
      citites.push(city);
      saveCities();
      renderCities();
    } else {
      alert("Invalid city name");
    }

    cityInput.value = "";
  });

  function saveCities() {
    localStorage.setItem("cities", JSON.stringify(citites));
  }

  function renderCities() {
    cityList.innerHTML = "";
    citites.forEach((city) => {
      const li = document.createElement("li");
      li.textContent = city;
      cityList.appendChild(li);
    });
  }

  cityList.addEventListener("click", async (event) => {
    if (event.target.tagName === "LI") {
      const city = event.target.textContent;
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    // if (!response.ok) {
    //   alert("City not found!");
    //   return;
    // }
    const data = await response.json();
    return data;
  }

  async function validCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    return response.ok;
  }

  function displayWeatherData(data) {
    weatherContainer.innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature : ${data.main.temp}°C</p>
    <p>Weather : ${data.weather[0].description}</p>
    `;
  }

  renderCities();
});
