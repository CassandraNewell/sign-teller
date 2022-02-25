import assert from "assert";
import { getDateDetails } from "../utils/index.js";

describe("Library Utils", () => {
  describe("getDateDetails()", () => {
    it("should return date Details", () => {
      const [month, day] = getDateDetails(24, 12);
      assert.equal(month, "December", "Month Should be December");
      assert.equal(day, 24, "Day should be 24");
    });
  });
});
