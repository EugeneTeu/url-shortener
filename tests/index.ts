import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import assert from "assert";
import { hashUrl } from "../src/util";

chai.use(chaiHttp);
chai.should();

describe("UNIT TEST - test hash function", () => {
  it("should hash string", () => {
    const seqNumber = 1;
    const testString = "test";
    const hashString = hashUrl(testString, seqNumber);
    assert.notEqual(hashString, testString);
  });
  it("should hash to same string with no change in seq number", () => {
    const seqNumber = 1;
    const testString = "test";
    const hashString = hashUrl(testString, seqNumber);
    const hashStringTwo = hashUrl(testString, seqNumber);
    assert.equal(hashString, hashStringTwo);
  });
  it("should hash to different string with  change in seq number", () => {
    const seqNumber = 1;
    const testString = "test";
    const hashString = hashUrl(testString, seqNumber);
    const hashStringTwo = hashUrl(testString, seqNumber + 1);
    assert.notEqual(hashString, hashStringTwo);
  });
});
