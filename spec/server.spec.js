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
    it("get user_id from username", () => {
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
  });
  describe("/demons", () => {
    it("get demon from id", () => {
      return request(server)
        .get("/api/demons/1")
        .expect(200)
        .then((result) => {
          expect(result.body.demon.name).to.equal("Stian");
          expect(result.body.demon.weight).to.equal(4);
        });
    });
  });
});
