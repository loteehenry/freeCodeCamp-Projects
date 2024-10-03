const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const pkNameDisplay = document.getElementById("pokemon-name")
const pkIdDisplay = document.getElementById("pokemon-id")
const pkWeightDisplay = document.getElementById("weight")
const pkHeightDisplay = document.getElementById("height")
const pkImageContainer = document.getElementById("image-container")
const pkTypesDisplay = document.getElementById("types")
const pkHPDisplay = document.getElementById("hp")
const pkAttackDisplay = document.getElementById("attack")
const pkDefenseDisplay = document.getElementById("defense")
const pkSpAttackDisplay = document.getElementById("special-attack")
const pkSpDefenseDisplay = document.getElementById("special-defense")
const pkSpeedDisplay = document.getElementById("speed")

let pokemonList = {}

const updateUI = (obj) => {
  pkTypesDisplay.innerHTML = ""
  pkImageContainer.innerHTML = ""

  pkNameDisplay.textContent = `${(obj.name).toUpperCase()}`
  pkIdDisplay.textContent = `#${obj.id}`
  pkWeightDisplay.textContent = `Weight: ${obj.weight}`
  pkHeightDisplay.textContent = `Height: ${obj.height}`
  pkHPDisplay.textContent = `${obj.stats[0].base_stat}`
  pkAttackDisplay.textContent = `${obj.stats[1].base_stat}`
  pkDefenseDisplay.textContent = `${obj.stats[2].base_stat}`
  pkSpAttackDisplay.textContent = `${obj.stats[3].base_stat}`
  pkSpDefenseDisplay.textContent = `${obj.stats[4].base_stat}`
  pkSpeedDisplay.textContent = `${obj.stats[5].base_stat}`

  obj.types.forEach((e) => {
    pkTypesDisplay.innerHTML += `<span class="type">${(e.type.name).toUpperCase()}</span>`
  })

  pkImageContainer.innerHTML += `<img src="${obj.sprites.front_default}" id="sprite" height="200px">`
}

function display (input) {
  let url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`;
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    pokemonList = data;
    console.log(pokemonList)
    updateUI(data)
    })
  .catch((err) => alert("Pokémon not found"))
}

searchBtn.addEventListener("click", ()=>{
  let userInput = searchInput.value;
  let cleanedInput = userInput
    .replace(/\s+/g, "-")
    .replace(/♀+/g, "-f")
    .replace(/♂+/g, "-m")
    .toLowerCase()
  display(cleanedInput)
  searchInput.value = ""
})
