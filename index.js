const express = require("express");
const app = express();

// LOG des IP
app.use((req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("Nouvelle visite → IP :", ip);
  next();
});

app.get("/", (req, res) => {
  res.redirect("https://www.google.com");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serveur en ligne !");
});
