import assert from "assert";
import { tellSign } from "../lib/tell-sign.js";

describe("tellSign", () => {
  it("identifies the correct sign for various date inputs", () => {
    const { sign: tropicalSign } = tellSign({ month: 12, day: 24 });
    assert.equal(tropicalSign, "Capricorn");

    const { sign: siderealSign } = tellSign({ month: 12, day: 24 }, "sidereal");
    assert.equal(siderealSign, "Sagittarius");
  });

  it("returns facts", () => {
    const sign = tellSign({ month: 2, day: 15 });
    assert.deepEqual(sign.facts, ["Independent", "Open-Minded", "Inventive"]);
  });

  it("returns element", () => {
    const sign = tellSign({ month: 2, day: 15 });
    assert.equal(sign.element, "Air");
  });

  it("returns lucky gem", () => {
    const sign = tellSign({ month: 2, day: 15 });
    assert.equal(sign.luckyGem, "Amethyst");
  });
});
