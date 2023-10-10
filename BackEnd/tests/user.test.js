const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);
const User = require("../models/userModel");

let token = null;

describe("User API tests", () => {
  // Clear user data before the user registration test
  beforeAll(async () => {
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
  test("User can get their profile", async () => {
    const res = await api
      .get("/api/users/profile")
      .set("Cookie", `token=${token}`)
      .expect(200);
  });
  test("User should be able to update their profile", async () => {
    const testUser = new User({
      firstname: "Test",
      lastname: "User",
      email: "test@example.com",
      phonenumber: "1234567890",
      password: "password123",
    });

    await testUser.save();
    const updatedData = {
      firstname: "UpdatedFirstName",
      lastname: "UpdatedLastName",
      email: "updated@example.com",
      phonenumber: "9876543210",
      password: "newpassword123",
    };
    await api
      .put(`/api/users/profile/${testUser._id.toString()}`)
      .set("Cookie", `token=${token}`)
      .send(updatedData)
      .expect(200);
    expect(response.body).toMatchObject(updatedData);
    await User.findByIdAndDelete(testUser._id);
  });
  afterAll(() => {
    mongoose.connection.close();
  });
});
