import { useTimeLogic } from "../useTimeLogic";
import { it, describe, vi, expect } from "vitest";
import { withSetup } from "@/utils/test-utils";

describe("useTimeLogic", () => {
  it("returns the hour and minute as strings with leading zeros", () => {
    describe("useTimeLogic", () => {
      const [{ hourString, minuteString }, app] =
        withSetup<typeof useTimeLogic>(useTimeLogic);
      expect(hourString.value).toMatch(/^([0-9]|0[0-9]|1[0-9]|2[0-3])$/);
      expect(minuteString.value).toMatch(/^([0-9]|[0-5][0-9])$/);
      app.unmount();
    });
  });

  it("should return 1 when the hour is 13", () => {
    const [{ hourValue, hourRef }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(hourRef, "value", "get").mockReturnValue(13);
    expect(hourValue.value).toBe(1);
    app.unmount();
  });
  
  it("should return 0 when the hour is 24", () => {
    const [{ hourValue, hourRef }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(hourRef, "value", "get").mockReturnValue(24);
    expect(hourValue.value).toBe(0);
    app.unmount();
  });

  it('returns "AM" when the hour is less than 12', () => {
    const [{ amPMValue, hourRef }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(hourRef, "value", "get").mockReturnValue(1);
    expect(amPMValue.value).toBe("AM");
    app.unmount();
  });

  it('returns "PM" when the hour is greater than or equal to 12', () => {
    // Mocking the current time to be 12:00 PM
    const [{ amPMValue, hourRef }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(hourRef, "value", "get").mockReturnValue(13);
    expect(amPMValue.value).toBe("PM");
    app.unmount();
  });

  it("returns an object with opacity 1 when timeHitter is true", () => {
    const [{ dotStyles, timeHitter }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(timeHitter, "value", "get").mockReturnValueOnce(true);
    expect(dotStyles.value.opacity).toBe(1);
    app.unmount();
  });

  it("returns an object with opacity 0 when timeHitter is false", () => {
    // Mocking the timeHitter value to be false
    const [{ timeHitter, dotStyles }, app] =
      withSetup<typeof useTimeLogic>(useTimeLogic);
    vi.spyOn(timeHitter, "value", "get").mockReturnValueOnce(false);
    expect(dotStyles.value.opacity).toBe(0);
    app.unmount();
  });
});
