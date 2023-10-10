const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);
const User = require("../models/userModel");

let token = null;

describe("User API tests", () => {
  // Clear user data before the user registration test
  beforeEach(async () => {
    await User.deleteMany({});
    const result = await api.post("/api/users").send({
      firstname: "matti",
      lastname: "jori",
      phonenumber: "123456789",
      email: "mattiv@matti.fi",
      password: "R3g5T7#gh",
    });
    token = result.body.token;
  });

  test("User can be created with all the fields filled in", async () => {
    const res = await api
      .post("/api/users/")
      .send({
        firstname: "test",
        lastname: "test2",
        phonenumber: "123456789",
        email: "jeff1134354311@amazon.com",
        password: "Testi1234!",
      })
      .expect(201);
    token = res.body.token;
  });

  test("User can't be created with invalid fields", async () => {
    const res = await api
      .post("/api/users/")
      .send({
        firstname: "test",
        email: "",
        password: "Testi1234!",
      })
      .expect(400);
  });

  test("User can login with valid credentials", async () => {
    const res = await api
      .post("/api/users/login")
      .send({
        email: "mattiv@matti.fi",
        password: "R3g5T7#gh",
      })
      .expect(200);
    token = res.body.token;
  });
  afterAll(() => {
    mongoose.connection.close();
  });
});
