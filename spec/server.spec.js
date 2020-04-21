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
});
