import request from "supertest";
import { app } from "../app.js";

describe("test butterfly crud", () => {
  describe("GET/butterflies", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/butterflies").send();
    });
    test("should return a response with status 200 and type json", async () => {
      // const response = await request(app).get('/butterflies').send()
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    test("should return array with all butterflies", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
