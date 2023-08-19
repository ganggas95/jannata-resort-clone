import { timeNumberToString } from "../time-utils";
import { describe, it, expect } from "vitest";
describe("timeNumberToString", () => {
  it("should return a string representation of the given number with leading zeros if necessary", () => {
    expect(timeNumberToString(0)).toBe("00");
    expect(timeNumberToString(5)).toBe("05");
    expect(timeNumberToString(10)).toBe("10");
    expect(timeNumberToString(99)).toBe("99");
    expect(timeNumberToString(100)).toBe("100");
  });
});
