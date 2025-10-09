const logger = async (url) => {
  const clock = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const API = "http://localhost:3000/";
  const res = await fetch(API + "view", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clock, date, url }),
  });

  if (!res.ok) {
    throw new Error("An error occurred");
  }
};

export default logger;
