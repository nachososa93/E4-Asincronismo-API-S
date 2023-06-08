const buttonSeach = document.querySelector(".button__seach__pokemon");
const inputPokemonId = document.getElementById("input__pokemon");
const cardConteiner = document.querySelector(".card__pokemon__conteiner");
const alertConteiner = document.querySelector(".error__alert");
const alertMsg = document.querySelector(".error__text");

inputEmpty = () => {
console.log(inputPokemonId.value.trim()=="");
  return inputPokemonId.value.trim()==""

};

const idPokemonInvalido =(dataPokemon) => {
  return !dataPokemon.id;
};


const seachPokemon = async (e) => {
  const pokemonBuscado = await requestPokemon(inputPokemonId.value);
  const { name, height, weight, sprites, types } = pokemonBuscado;



  if (inputEmpty()) {
    cardConteiner.classList.remove("show")
    cardConteiner.classList.add("hidden")
    alertConteiner.classList.add("show__alert");
    alertMsg.textContent = "Debe ingresar un numero de ID";
   
    return;
  }
  if (idPokemonInvalido(pokemonBuscado)) {
    cardConteiner.classList.remove("show")
    cardConteiner.classList.add("hidden")
    alertConteiner.classList.add("show__alert");
    alertMsg.textContent = "No existe un pokemon con ese ID";
 
    return;
  }
  
  cardConteiner.classList.remove("hidden")
  cardConteiner.classList.add("show")
   cardConteiner.innerHTML = `<h2 class="nombre__pokemon">${name}</h2>
<img src="${sprites.front_default}" alt="${name}">
<div class="descripcion__pokemon">
    <h2 class="tipo__pokemon">Este pokemon es de tipo: ${
      types[0].type.name
    }</h2>
<h2 class="altura__pokemon">Su altura es de: ${height / 10}Metros</h2>
    <h2 class="peso__pokemon">Su peso es de: ${weight / 10}Kg</h2>
</div>
`;
alertConteiner.classList.remove("show__alert");
    alertMsg.textContent = "";
return

 
};

const init = () => {
  buttonSeach.addEventListener("click", seachPokemon);
};

init();
