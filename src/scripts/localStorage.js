export const saveUser = (user) =>
  localStorage.setItem("user", JSON.stringify(user));

export const clearUser = () => {
  localStorage.removeItem("user");
  location.reload();
};

export const loadUser = () => JSON.parse(localStorage.getItem("user")) || {};
