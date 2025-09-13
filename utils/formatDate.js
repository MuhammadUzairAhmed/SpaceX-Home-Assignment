/**
 * Format a UTC date string into DD-MM-YYYY format.
 * @param {string} dateUtc
 * @returns {string}
 */
export function formatDate(dateUtc) {
    if (!dateUtc) return "";
    return dateUtc.slice(0, 10).split("-").reverse().join("-");
}