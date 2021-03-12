import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ParamsType = { id: string };

export default function Details() {
  async function fetchPokemons(id: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  }

  const { id } = useParams<ParamsType>();

  useEffect(() => {
    if (id) fetchPokemons(Number(id));
  }, [id]);

  return <div>Details</div>;
}
