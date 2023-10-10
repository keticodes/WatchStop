const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);
const Watch = require("../models/watchModel"); // Import your Watch model
const watches = require("./data/watches.js"); // Import your watch data
const User = require("../models/userModel");

let token = null;

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

const watchesInDb = async () => {
  const watches = await Watch.find({});
  return watches.map((watch) => watch.toJSON());
};

describe("when there are initially some watches saved", () => {
  beforeEach(async () => {
    await Watch.deleteMany({});
    await api
      .post("/api/watches")
      .set("Authorization", "bearer " + token)
      .send(watches[0])
      .send(watches[1]);
  });

  it("should return watches", async () => {
    await api
      .get("/api/watches")
      .set("Authorization", "bearer " + token)
      .expect(200);
  });

  it("should add a new watch", async () => {
    const newWatch = {
      name: "Test Watch",
      description: "Test Description",
      imageUrl: "test.jpg",
      price: "100",
      city: "Test City",
    };
    await api
      .post("/api/watches")
      .set("Authorization", "bearer " + token)
      .send(newWatch)
      .expect(201);
  });
});

describe("deleting a watch", () => {
  let watchToDelete;

  beforeEach(async () => {
    const response = await api
      .post("/api/watches")
      .set("Authorization", "bearer " + token)
      .send(watches[0]);
    watchToDelete = response.body;
  });

  it("should remove a watch", async () => {
    const watchesAtStart = await watchesInDb();

    await api
      .delete(`/api/watches/${watchToDelete._id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    const watchesAtEnd = await watchesInDb();

    expect(watchesAtEnd).toHaveLength(watchesAtStart.length - 1);

    const names = watchesAtEnd.map((r) => r.name);
    expect(names).not.toContain(watchToDelete.name);
  });
});

describe("updating a watch", () => {
  it("should update a watch", async () => {
    const response = await api
      .get("/api/watches")
      .set("Authorization", "bearer " + token)
      .send(watches[0]);
    const watchToUpdate = response.body[0];

    const updatedWatchData = {
      name: "Updated Watch Name",
      description: "Updated Description",
      imageUrl: "updated.jpg",
      price: "200",
      city: "Updated City",
    };
    await api
      .put(`/api/watches/${watchToUpdate._id}`)
      .set("Authorization", "bearer " + token)
      .send(updatedWatchData)
      .expect(200);

    const updatedWatch = await Watch.findById(watchToUpdate._id);

    expect(updatedWatch).toMatchObject(updatedWatchData);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
