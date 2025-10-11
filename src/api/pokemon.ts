// src/api/pokemon.ts
import { API_BASE_URL } from "../config";
import type { PokemonListResult, Pokemon } from "./pokemon.type";

export const fetchPokemonList = async (
  offset: number = 20,
  limit: number = 20
): Promise<PokemonListResult> => {
  const response = await fetch(
    `${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("ポケモン一覧の取得に失敗しました");
  }
  const data = await response.json();
  return data;
};

export const fetchPokemon = async (id: number | string): Promise<Pokemon> => {
  const response = await fetch(`${API_BASE_URL}/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("ポケモンの取得に失敗しました");
  }
  const data = await response.json();
  return data;
};

// PokemonListResultと他の型を再エクスポート
export type {
  PokemonListResult,
  Pokemon,
  PokemonType,
  PokemonAbility,
} from "./pokemon.type";
