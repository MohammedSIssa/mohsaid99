export const getToken = () =>
  JSON.parse(localStorage.getItem("token") ?? "null");

export const setTokenLocal = (token: string | null | undefined) => {
  if (token != null) {
    localStorage.setItem("token", JSON.stringify(token));
  }
};

export const removeToken = () => localStorage.removeItem("token");
