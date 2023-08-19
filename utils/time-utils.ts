export const timeNumberToString = (value: number): string => {
  /**
   * Returns a string representation of the given number,
   * with leading zeros if necessary.
   *
   * @param {number} value - The number to be converted to a string.
   * @return {string} The string representation of the number,
   * with leading zeros if necessary.
   */
  return `${value}`.padStart(2, "0");
};
