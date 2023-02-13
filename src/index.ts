
//const Month: any[] = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez']
const ms = require("ms");

const Month: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


interface OptionsDate {
    monthName?: boolean
    date?: Date
}


/**
 * @copyright This function uses MS library, all library credit goes to Vercel
 * @description - Adds a time to the current timestamp. example: AddTimeToDate('1d') returns in milliseconds - s, m, h, d
 */
function AddTimeToDate(time: number | string, inSeconds?: boolean): number {

    if (inSeconds === undefined || !inSeconds)
        return new Date().getTime() + ms(time);

    return MillisToSeconds(new Date().getTime() + ms(time));

}

/**
 *
 * @description - Convert timestamp time from milliseconds to seconds
 */
function MillisToSeconds(timestamp: number): number {
    return Math.floor(timestamp / 1000);
}

/**
 * @description - Convert timestamp time from seconds to milliseconds
 */
function SecondsToMillis(timestamp: number): number {
    return Math.floor(timestamp * 1000);
}


/**
 * @description - Do a date formatting to string - StringFormat('you are in the day DD/MM/YYYY') or StringFormat('you are in the day DD/MM/YYYY', { monthName: true, date: new Date(47865378525837) })
 */
function StringFormat(format: string, options?: OptionsDate): string {

    const d = options?.date === undefined ? new Date() : options?.date


    //Give Values
    const h_0: number = d.getHours();
    const m_0: number = d.getMinutes();
    const s_0: number = d.getSeconds();

    const yyyy_0: number = d.getFullYear();
    const mm_0: number = d.getMonth() + 1;
    const mm_00: number = d.getMonth();
    const dd_0: number = d.getDate();


    //Format in String
    const h: string = h_0 <= 9 ? h_0 <= 0 ? "00" : `0${h_0}` : h_0.toString();
    const m: string = m_0 <= 9 ? m_0 <= 0 ? "00" : `0${m_0}` : m_0.toString();
    const s: string = s_0 <= 9 ? s_0 <= 0 ? "00" : `0${s_0}` : s_0.toString();

    const yyyy: string = yyyy_0 <= 9 ? yyyy_0 <= 0 ? "00" : `0${yyyy_0}` : yyyy_0.toString();
    const mm: string = mm_0 <= 9 ? mm_0 <= 0 ? "00" : `0${mm_0}` : mm_0.toString();
    const dd: string = dd_0 <= 9 ? dd_0 <= 0 ? "00" : `0${dd_0}` : dd_0.toString();


    if (typeof options?.monthName === 'undefined' || !options?.monthName)
        return format.replace('hr', h).replace('mn', m).replace('ss', s).replace('YYYY', yyyy).replace('MM', mm).replace('DD', dd);


    return format.replace('hr', h).replace('mn', m).replace('ss', s).replace('YYYY', yyyy).replace('MM', options!.monthName ? Month[mm_00] : mm).replace('DD', dd);

}

//Exports modules
export { StringFormat, SecondsToMillis, MillisToSeconds, AddTimeToDate }