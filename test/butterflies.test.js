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

   describe("GET /butterflies/:id", () => {
    test("should return a single butterfly when id exists", async () => {
      const response = await request(app).get("/butterflies/1").send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("name");
    });

    test("should return 404 when butterfly does not exist", async () => {
      const response = await request(app).get("/butterflies/99999").send();
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error");
    });
  });
});
