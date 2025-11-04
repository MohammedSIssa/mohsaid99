import { loadData, saveData } from "./localStorage";

const cache = new Map();

export async function fetchWithCache(url) {
  if (cache.has(url)) {
    console.log("Serving from memory:", url);
    return cache.get(url);
  }

  console.log("Fetching from API:", url);
  const res = await fetch(url);
  if(!res.ok) return [] 
  const data = await res.json();
  cache.set(url, data);
  return data;
}

export async function fetchWithLocalStorageCache(url) {
  if (loadData(url)) {
    console.log("Fetching from localStorage:", url);
    return loadData(url);
  }
  console.log("Fetching from API:", url);
  const res = await fetch(url);
  const data = await res.json();

  saveData(url, data);
  return data;
}
