
//const Month: any[] = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez']
const ms = require("ms");

/**
 *
 * @param {number} time
 * @param {boolean} inSeconds
 * @copyright This function uses MS library, all library credit goes to Vercel
 * @description - Adds a time to the current timestamp. example: AddTimeToDate('1d') returns in milliseconds - s, m, h, d,
 * @returns { number } return number
 */
export function AddTimeToDate(time: number, inSeconds?: boolean): number {

    if (inSeconds === undefined)
        return new Date().getTime() + ms(time);

    return MillisToSeconds(new Date().getTime() + ms(time));

}

/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from milliseconds to seconds
 * @returns {number}
 */
export function MillisToSeconds(timestamp: number): number {
    return Math.floor(timestamp / 1000);
}

/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from seconds to milliseconds
 * @returns {number}
 */
export function SecondsToMillis(timestamp: number): number {
    return Math.floor(timestamp * 1000);
}

