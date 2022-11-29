import express from 'express';
const app = express();
const port = 3001;

app.use((_req, res, next) => {
  // Allow any website to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Continue to next middleware
  next();
});

app.get("/data", (req, res) => {
  res.json({ value: "my awesome data" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});