

const logger = async (url) => {
  const clock = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const API = "https://logger-6ujg.onrender.com/";
  const os = navigator.platform + "";
  if (os !== "Linux x86_64") {
    const res = await fetch(API + "view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clock, date, url, os }),
    });

    if (!res.ok) {
      throw new Error("An error occurred");
    }
  }
};

export default logger;
