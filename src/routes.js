import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ messa: "Hello Dude" });
});

export default routes;
