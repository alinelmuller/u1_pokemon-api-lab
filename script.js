
let button = document.querySelector("#searchButton")
let pokemonCard = document.getElementById("pokemonCard").style.display = "none"; 

button.addEventListener('click', async () => {
    pokemonCard = document.getElementById("pokemonCard").style.display = "block"; 
    //Axios call goes here
    let textInput = document.querySelector("#inputBar").value
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    //remember to use Async and Await!

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    console.log(response) 

    //DOM Setters go here
    let pokemonName = document.querySelector("#pokemonName")
    let name = response.data.name
    pokemonName.textContent = capitalizeFirstLetter(name)
    
    let imageUrl = response.data.sprites.front_default;
    pokemonImage.src = imageUrl;
    
    let pokemonAbilities = document.querySelector("#pokemonAbilities")
    let abilities = response.data.abilities
    for ( let i=0; i < abilities.length; i++ ) {
        pokemonAbilities.innerHTML = pokemonAbilities.innerHTML + abilities[i].ability.name + ", " 
    } 

    let pokemonHeight = document.querySelector("#pokemonHeight")
    let height = response.data.height
    pokemonHeight.textContent = height

    let pokemonWeight = document.querySelector("#pokemonWeight")
    let weight = response.data.weight
    pokemonWeight.textContent = weight

    let pokemonMoves = document.querySelector("#pokemonMoves")
    let moves = response.data.moves
    for ( let i=0; i < 10 ; i++ ) {
        pokemonMoves.innerHTML = pokemonMoves.innerHTML + moves[i].move.name + ", " 
    } 

    
    let pokemonType = document.querySelector("#pokemonType")
    let types = response.data.types
    for (  let i=0; i < 10 && i < types.length ; i++  ) {
        pokemonType.innerHTML = pokemonType.innerHTML + types[i].type.name + " "
    } 
    let bgColor = 'lightGray'
    switch (types[0].type.name) {
        case 'psychic':
            bgColor = 'lightPink' //abra
            break;
        case 'electric':
            bgColor = 'lightYellow' //pikachu
            break;
        case 'water':
            bgColor = 'lightBlue' //squirtle
            break;
        case 'fire':
            bgColor = 'Red' //charmeleon
            break;
        default:
            break;
    }
    document.getElementById("pokemonCard").style.background = bgColor; 

}
)



