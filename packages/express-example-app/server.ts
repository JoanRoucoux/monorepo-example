import express from 'express';
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
  res.json({ value: "my awesome data" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});