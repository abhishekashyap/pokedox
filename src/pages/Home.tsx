import React, { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState("initialState");
  async function fetchPokemons(offset: number, limit: number) {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    fetchPokemons(0, 10);
  }, []);

  return <div>Home</div>;
}
