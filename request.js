const requestPokemon = async idPokemon =>{
    try {
        const response  = await fetch (`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        const dataPokemon = await response.json()

        return dataPokemon
    } catch (error) {
        return false
    }

}
