import { API } from "./api";

export const logger = async (username: string, url: string) => {
  const clock = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const os = navigator.platform + "";
  if (import.meta.env.PROD) {
    await fetch(`${API}/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitedAt: `${clock} - ${date}`,
        os,
        url,
        username,
      }),
    });
  }
};
