/**
 *
 * @param {number} time
 * @param {boolean} inSeconds
 * @copyright This function uses MS library, all library credit goes to Vercel
 * @description - Adds a time to the current timestamp. example: AddTimeToDate('1d') returns in milliseconds - s, m, h, d,
 * @returns { number } return number
 */
export declare function AddTimeToDate(time: number, inSeconds?: boolean): number;
/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from milliseconds to seconds
 * @returns {number}
 */
export declare function MillisToSeconds(timestamp: number): number;
/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from seconds to milliseconds
 * @returns {number}
 */
export declare function SecondsToMillis(timestamp: number): number;
/**
 *
 * @param {string} format
 * @param {Date} date
 * @description - Do a date formatting to string - FormatDate('you are in the day mm/dd/yyyy') or FormatDate('you are in the day mm/dd/yyyy', new Date(2266150973543))
 * @returns {number}
 */
export declare function FormatDate(format: string, date?: Date): string;
//# sourceMappingURL=index.d.ts.map