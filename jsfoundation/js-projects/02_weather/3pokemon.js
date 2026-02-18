// Project inspired by : https://youtu.be/37vxWr0WgQk?si=DxdRE9A5F2LtZyBD
// Project jari inspired asla tarihi code madhe farak ahe, jasti nahi pan me udemy couse che to project che components vapartoy na so me tyachi process follow kartoy hitesh shi so code madhe thoda farak ahe but we can use it as a reference
document.addEventListener("DOMContentLoaded", () => {
  const pokemonInput = document.getElementById("pokemon-input");
  const getPokemonspriteBtn = document.getElementById("get-pokemonsprite-btn");
  const pokemonInfo = document.getElementById("pokemon-info");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonSprite = document.getElementById("pokemon-sprite");
  const pokemonType = document.getElementById("pokemon-type");
  const errorMessage = document.getElementById("error-message");

  getPokemonspriteBtn.addEventListener("click", async () => {
    const pokemon = pokemonInput.value.toLowerCase().trim();
    console.log(pokemon);

    if (!pokemon) return;

    try {
      const pokemonData = await fetchPokemonData(pokemon);
      displayPokemonData(pokemonData);
    } catch (error) {
      showError();
    }
  });

  async function fetchPokemonData(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = response.json();
    return data;
  }

  function displayPokemonData(data) {
    console.log(data);
    const { name, sprites, types } = data;
    pokemonSprite.src = sprites.front_default;
    pokemonName.textContent = name.toUpperCase();
    pokemonType.textContent = `TYPE : ${types[0].type.name.toUpperCase()}`;

    pokemonInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    pokemonInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
