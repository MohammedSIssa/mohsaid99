const cache = new Map();

export async function fetchWithCache(url) {
  if (cache.has(url)) {
    console.log("Serving from cache:", url);
    return cache.get(url);
  }

  console.log("Fetching from server:", url);
  const res = await fetch(url);
  const data = await res.json();

  cache.set(url, data);
  return data;
}
