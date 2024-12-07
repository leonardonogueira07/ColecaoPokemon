import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { Container, Grid2 } from "@mui/material";
import { useEffect } from "react";
import { Skeletons } from "../components/Skeletons";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
        console.log(getPokemons());
    }, []);

    const getPokemons = () => {
        var endPoints = [];
        for (var i = 1; i < 500; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        // console.log(endPoints);
        axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemons(res));

        // axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        //     .then((res) => setPokemons(res.data.results))
        //     .catch((err) => console.log(err));
    }

    const pokemonFilter = (name) => {
        var filteredPokemon = [];
        if (name === "") {
            getPokemons();
        }

        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name.toLowerCase())) {
                filteredPokemon.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemon);
    }

    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xg">
                <Grid2 container spacing={2}>
                    {pokemons.length === 0 ? (<Skeletons />) :
                        (
                            pokemons.map((pokemon, key) => (
                                <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={key}>
                                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} type={pokemon.data.types} />
                                </Grid2>
                            ))
                        )
                    }
                </Grid2>
            </Container>
        </div>
    )
}