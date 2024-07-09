import { Request, Response } from "express";

function getHomeController(req: Request, res: Response) {
  res.send("Hello World!");
}

function getGalleryController(req: Request, res: Response) {
  res.send("Gallery");
}

function postSendContactController(req: Request, res: Response) {
  res.send("Send Form");
}

export { getHomeController, getGalleryController, postSendContactController };
