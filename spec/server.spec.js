process.env.NODE_ENV = "test";

const chai = require("chai");
chai.use(require("chai-sorted"));
const { expect } = chai;
const request = require("supertest");
const server = require("../server");
const connection = require("../db/connection");

describe("/API", () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  after(() => {
    return connection.destroy();
  });
  it("GET:200 returns an object of all endpoints", () => {
    return request(server)
      .get("/api")
      .expect(200)
      .then((result) => {
        console.log(result.body);
        expect(result.body).to.be.an("object");
      });
  });
  describe("/users", () => {
    it("get user from username", () => {
      return request(server)
        .get("/api/users/Joe")
        .expect(200)
        .then((result) => {
          expect(result.body.user.username).to.equal("Joe");
        });
    });
    it("get list of users", () => {
      return request(server)
        .get("/api/users")
        .expect(200)
        .then((result) => {
          expect(result.body.users).to.be.an("array");
          expect(result.body.users.length).to.equal(1);
        });
    });
    it("get demons from username", () => {
      return request(server)
        .get("/api/users/Joe/demons")
        .expect(200)
        .then((result) => {
          expect(result.body.demons[0].name).to.equal("Stian");
          expect(result.body.demons).to.be.an("array");
        });
    });
    it("add new user", () => {
      return request(server)
        .post("/api/users")
        .send({ username: "Barry" })
        .expect(201)
        .then((result) => {
          expect(result.body.user.username).to.equal("Barry");
        });
    });
    it("error if add new user does not contain a username", () => {
      return request(server).post("/api/users").send({}).expect(400);
    });
    it("error if add new user repeats a username", () => {
      return request(server)
        .post("/api/users")
        .send({ username: "Joe" })
        .expect(403)
        .then((response) => {
          expect(response.body.msg).to.equal("Username already exists");
        });
    });
    it("delete a user and all their demons", () => {
      return request(server)
        .delete("api/users/Joe")
        .expect(204)
        .then(() => {
          return request(server).get("api/users/Joe").expect(404);
        });
    });
  });
  describe("/demons", () => {
    it("get demon from id", () => {
      return request(server)
        .get("/api/demons/1")
        .expect(200)
        .then((result) => {
          expect(result.body.demon.name).to.equal("Stian");
          expect(result.body.demon.weight).to.equal(4);
          expect(result.body.demon.life_stage).to.equal(1);
        });
    });
    it("add new demon", () => {
      return request(server)
        .post("/api/demons")
        .send({
          name: "Bellsy Bob",
          owner: "Joe",
          personality: "Erratic",
          weight: "2",
          type: "drude",
        })
        .expect(201)
        .then((result) => {
          expect(result.body.demon.owner).to.equal("Joe");
          expect(result.body.demon.life_stage).to.equal(1);
        });
    });
    it("add new demon errors if not given complete info, eg no type", () => {
      return request(server)
        .post("/api/demons")
        .send({
          name: "Bellsy Bob",
          owner: "Joe",
          personality: "Erratic",
          weight: "2",
        })
        .expect(400);
    });
    it("update demon life_stage", () => {
      return request(server)
        .patch("/api/demons/1")
        .send({ life_stage: 2 })
        .expect(200)
        .then((result) => {
          expect(result.body.demon.life_stage).to.equal(2);
        });
    });
    it("update demon weight", () => {
      return request(server)
        .patch("/api/demons/1")
        .send({ weight: 9 })
        .expect(200)
        .then((result) => {
          expect(result.body.demon.weight).to.equal(9);
        });
    });
  });
});
