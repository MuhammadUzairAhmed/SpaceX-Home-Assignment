import { formatDate } from "../utils/formatDate";

describe("formatDate()", () => {
    test("formats a standard UTC date string into DD-MM-YYYY", () => {
        const input = "2023-08-05T12:34:56.000Z";
        const result = formatDate(input);
        expect(result).toBe("05-08-2023");
    });

    test("returns empty string when input is null or undefined", () => {
        expect(formatDate(null)).toBe("");
        expect(formatDate(undefined)).toBe("");
    });

    test("returns empty string when input is empty", () => {
        expect(formatDate("")).toBe("");
    });
});
