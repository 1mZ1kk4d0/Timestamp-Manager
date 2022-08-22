"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondsToMillis = exports.MillisToSeconds = exports.AddTimeToDate = void 0;
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
function AddTimeToDate(time, inSeconds) {
    if (inSeconds === undefined)
        return new Date().getTime() + ms(time);
    return MillisToSeconds(new Date().getTime() + ms(time));
}
exports.AddTimeToDate = AddTimeToDate;
/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from milliseconds to seconds
 * @returns {number}
 */
function MillisToSeconds(timestamp) {
    return Math.floor(timestamp / 1000);
}
exports.MillisToSeconds = MillisToSeconds;
/**
 *
 * @param {number} timestamp
 * @description - Convert timestamp time from seconds to milliseconds
 * @returns {number}
 */
function SecondsToMillis(timestamp) {
    return Math.floor(timestamp * 1000);
}
exports.SecondsToMillis = SecondsToMillis;
