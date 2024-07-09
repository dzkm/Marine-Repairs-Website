import requests from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    requests(app).get("/").expect(200, done);
  });
});

describe("GET /gallery", () => {
  it("should return 200 OK", (done) => {
    requests(app).get("/gallery").expect(200, done);
  });
});

describe("POST /send_contact", () => {
  it("should return 200 OK", (done) => {
    requests(app).post("/send_contact").expect(200, done);
  });
});

describe("GET /send_contact", () => {
  it("should return 404 Not Found", (done) => {
    requests(app).get("/send_contact").expect(404, done);
  });
});

describe("GET /notfound", () => {
  it("should return 404 Not Found", (done) => {
    requests(app).get("/notfound").expect(404, done);
  });
});
