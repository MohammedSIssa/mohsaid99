// import { loadData, saveData } from "./localStorage";

const cache = new Map();

export async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  cache.set(url, data);
  return data;
}

// export function removeFromCache(url) {
// console.log(cache);
// console.log(cache.has(url));
// if (cache.has(url)) {
//   return cache.delete(url);
// }
// }

// export async function fetchWithLocalStorageCache(url) {
//   if (loadData(url)) {
//     return loadData(url);
//   }
//   const res = await fetch(url);
//   const data = await res.json();

//   saveData(url, data);
//   return data;
// }
