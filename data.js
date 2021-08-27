/*API_USED_FOR_THE_PROJECT
    _URL_ = https://pokeapi.co/api/v2/pokemon/ditto
*/

const search_term = document.getElementById("search_q") //The value or string that user types in.
const search_btn = document.getElementById("search-btn") //@desc button for the search bar

// api https://pokeapi.co/docs/v2#pokemon
const getPokemonData = async (term) => {
    document.getElementById("show_error").classList.remove("show")
    document.getElementById("show_error").classList.add("hidden")

    const url = `https://pokeapi.co/api/v2/pokemon/${term}` //access every pokemon by its name
    const response = await fetch(url)

    if (response.status == 404 || response.statusText == "Not Found") {
        document.getElementById("show_error").classList.add("show")
        document.getElementById("show_error").classList.remove("hidden")
        return
    }
    const pokemon = await response.json()
    debugger //BREAKPOINT

    document
        .getElementById("update_img")
        .setAttribute("src", pokemon.sprites.other.dream_world.front_default) //Destructuring through the pokemon object to get IMG
    document.getElementById("update_name").innerHTML = pokemon.name
    document.getElementById(
        "update_candy_title"
    ).innerHTML = `${pokemon.name} Candy`
    document.getElementById("update_hp").innerHTML = `HP ${Math.floor(
        Math.random() * pokemon.stats[0].base_stat + 1
    )}/${pokemon.stats[0].base_stat}`
    document.getElementById(
        "update_cp"
    ).innerHTML = `XP ${pokemon.base_experience}`
    document.getElementById(
        "update_type"
    ).innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
    document.getElementById("update_weight").innerHTML = `${pokemon.weight}kg`
    document.getElementById("update_height").innerHTML = `0.${pokemon.height}m`
    document.getElementById("update_stardust").innerHTML = Math.floor(
        Math.random() * 10000 + 1
    )
    document.getElementById("update_candy").innerHTML = Math.floor(
        Math.random() * 200 + 1
    )
}
/* @desc event listener for the clicking of button
    which searches for the query input in accordance to the search term which
    we defined on the very first line

*/
search_btn.addEventListener("click", () => getPokemonData(search_term.value))
