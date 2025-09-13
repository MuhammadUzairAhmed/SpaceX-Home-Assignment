import { __testables } from "../components/Pagination";

const { buildPageList } = __testables;

describe("buildPageList()", () => {
  test("shows compact window in the middle", () => {
    expect(buildPageList(5, 10, 1)).toEqual([1, "…", 4, 5, 6, "…", 10]);
  });

  test("handles near start", () => {
    expect(buildPageList(1, 5, 1)).toEqual([1, 2, "…", 5]);
  });

  test("handles near end", () => {
    expect(buildPageList(9, 10, 1)).toEqual([1, "…", 8, 9, 10]);
  });

  test("returns empty when only one page", () => {
    expect(buildPageList(1, 1, 1)).toEqual([]);
  });

  test("works with wider neighbor window", () => {
    expect(buildPageList(5, 12, 2)).toEqual([1, "…", 3, 4, 5, 6, 7, "…", 12]);
  });
});
