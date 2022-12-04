import express from 'express';
import _ from 'lodash';
import { QueryPayload } from 'shared-example-data';
const app = express();
const port = 3001;

app.use((_req, res, next) => {
  // Allow any website to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Continue to next middleware
  next();
});

app.get("/data", (req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase("Awesome server data returned successfully"),
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});