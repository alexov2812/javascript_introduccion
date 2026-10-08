
let numbers = [1, 2, 3, 4, 5];

let pokedex = [
    {
        pokemon_name: "Squirtle",
        pokemon_type: "Agua",
        pokemon_number: 4,
        pokemon_description: "Tortuga que lanza chorros de agua por la boca.",
        id: 1
    },

    {
        pokemon_name: "Wartortle",
        pokemon_type: "Agua",
        pokemon_number: 5,
        pokemon_description: "Tortuga más grande que lanza chorros de agua por la boca.",
        id: 2
    },

    {
        pokemon_name: "Blastoise",
        pokemon_type: "Agua",
        pokemon_number: 6,
        pokemon_description: "Tortuga gigante que lanza chorros de agua por la boca.",
        id: 3
    },

    {
        pokemon_name: "Charmander",
        pokemon_type: "Fuego",
        pokemon_number: 4,
        pokemon_description: "Lagartija que lanza fuego por la boca.",
        id: 4
    },

    {
        pokemon_name: "Charmeleon",
        pokemon_type: "Fuego",
        pokemon_number: 5,
        pokemon_description: "Lagartija más grande que lanza fuego por la boca.",
        id: 5
    },

    {
        pokemon_name: "Charizard",
        pokemon_type: "Fuego",
        pokemon_number: 6,
        pokemon_description: "Lagartija gigante que lanza fuego por la boca.",
        id: 6
    }
];

for (let i = 0; i < pokedex.length; i++) {
    console.log(pokedex[i].pokemon_name);
}

pokedex.forEach((pokemon) => {
    console.log(pokemon.pokemon_name);
});

let pokedexAgua = pokedex.filter(pokemon => pokemon.pokemon_type === "Agua");

console.log(pokedexAgua);

let pokedexFuego = pokedex.filter(pokemon => pokemon.pokemon_type === "Fuego");

console.log(pokedexFuego);








let newpokemon = {
    pokemon_name: "Monke",
    pokemon_type: "Fuego",
    pokemon_number: 7,
    pokemon_description: "Mono que controla el fuego.",
    id: 7
};





let exists = false;

pokedex.forEach(function(pokemon) {
    if (pokemon.pokemon_name === newpokemon.pokemon_name) {
        exists = true;
    }
});





if (!exists) {
    pokedex.push(newpokemon);
}

console.log(pokedex);






function createPokemon(newPokemon) {
    pokedex.push(newPokemon);
    console.log(pokedex);
}

createPokemon({
    pokemon_name: "Pikachu",
    pokemon_type: "Electrico",
    pokemon_number: 25,
    pokemon_description: "Pokemon que almacena electricidad en sus mejillas.",
    id: 8
});






function readPokemon(name) {
    let pokemonEncontrado = pokedex.filter(function(pokemon) {
        return pokemon.pokemon_name.includes(name);
    });

    console.log(pokemonEncontrado);
}

readPokemon("Charizard");






function updatePokemon(id, name, type, number, description) {
    let position = pokedex.findIndex(pokemon => pokemon.id === id);

    console.log(position);

    if (position !== -1) {
        pokedex[position] = {
            pokemon_name: name,
            pokemon_type: type,
            pokemon_number: number,
            pokemon_description: description,
            id: id
        };
    }

    console.log(pokedex);
}

updatePokemon(
    1,
    "Squirtle",
    "Agua",
    4,
    "Tortuga que utiliza agua para atacar a sus enemigos."
);






function deletePokemon(id) {
    let newPokedex = pokedex.filter(function(pokemon) {
        return pokemon.id != id;
    });

    pokedex = newPokedex;

    console.log(newPokedex);
}

deletePokemon(2);

