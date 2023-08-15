import express from "express";
import { config } from "dotenv";
import { routes } from "./router";
config();

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(routes);
  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`Rodadndo na Porta ${port}`));
};

main();
