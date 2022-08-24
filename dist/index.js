"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimeToDate = exports.MillisToSeconds = exports.SecondsToMillis = exports.StringFormat = void 0;
//const Month: any[] = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez']
const ms = require("ms");
const Month = ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/**
 * @copyright This function uses MS library, all library credit goes to Vercel
 * @description - Adds a time to the current timestamp. example: AddTimeToDate('1d') returns in milliseconds - s, m, h, d
 */
function AddTimeToDate(time, inSeconds) {
    if (inSeconds === undefined || !inSeconds)
        return new Date().getTime() + ms(time);
    return MillisToSeconds(new Date().getTime() + ms(time));
}
exports.AddTimeToDate = AddTimeToDate;
/**
 *
 * @description - Convert timestamp time from milliseconds to seconds
 */
function MillisToSeconds(timestamp) {
    return Math.floor(timestamp / 1000);
}
exports.MillisToSeconds = MillisToSeconds;
/**
 * @description - Convert timestamp time from seconds to milliseconds
 */
function SecondsToMillis(timestamp) {
    return Math.floor(timestamp * 1000);
}
exports.SecondsToMillis = SecondsToMillis;
/**
 * @description - Do a date formatting to string - StringFormat('you are in the day DD/MM/YYYY') or StringFormat('you are in the day DD/MM/YYYY', { monthName: true, date: new Date(47865378525837) })
 */
function StringFormat(format, options) {
    const d = options?.date === undefined ? new Date() : options?.date;
    //Give Values
    const h_0 = d.getHours();
    const m_0 = d.getMinutes();
    const s_0 = d.getSeconds();
    const yyyy_0 = d.getFullYear();
    const mm_0 = d.getMonth() + 1;
    const mm_00 = d.getMonth();
    const dd_0 = d.getDate();
    //Format in String
    const h = h_0 <= 9 ? h_0 <= 0 ? "00" : `0${h_0}` : h_0.toString();
    const m = m_0 <= 9 ? m_0 <= 0 ? "00" : `0${m_0}` : m_0.toString();
    const s = s_0 <= 9 ? s_0 <= 0 ? "00" : `0${s_0}` : s_0.toString();
    const yyyy = yyyy_0 <= 9 ? yyyy_0 <= 0 ? "00" : `0${yyyy_0}` : yyyy_0.toString();
    const mm = mm_0 <= 9 ? mm_0 <= 0 ? "00" : `0${mm_0}` : mm_0.toString();
    const dd = dd_0 <= 9 ? dd_0 <= 0 ? "00" : `0${dd_0}` : dd_0.toString();
    if (typeof options?.monthName === 'undefined' || !options?.monthName)
        return format.replace('h', h).replace('m', m).replace('s', s).replace('YYYY', yyyy).replace('MM', mm).replace('DD', dd);
    return format.replace('h', h).replace('m', m).replace('s', s).replace('YYYY', yyyy).replace('MM', options.monthName ? Month[mm_00] : mm).replace('DD', dd);
}
exports.StringFormat = StringFormat;
//# sourceMappingURL=index.js.map