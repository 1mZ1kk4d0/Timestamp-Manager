
//const Month: any[] = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez']
const ms = require("ms");


interface Datas {
    a: string
    b: string
    c?: number
}






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




/**
 *
 * @param {string} format
 * @param {Date} date
 * @description - Do a date formatting to string - FormatDate('you are in the day mm/dd/yyyy') or FormatDate('you are in the day mm/dd/yyyy', new Date(2266150973543))
 * @returns {number}
 */
export function FormatDate(format: string, date?: Date): string {

    if (date === undefined) {

        var d = new Date();

        //Give Values
        const h_0: number = d.getHours();
        const m_0: number = d.getMinutes();
        const s_0: number = d.getSeconds();

        const yyyy_0: number = d.getFullYear();
        const mm_0: number = d.getMonth() + 1;
        const dd_0: number = d.getDate();


        //Format in String
        const h: string = h_0 <= 9 ? h_0 <= 0 ? "00" : `0${h_0}` : h_0.toString();
        const m: string = m_0 <= 9 ? m_0 <= 0 ? "00" : `0${m_0}` : m_0.toString();
        const s: string = s_0 <= 9 ? s_0 <= 0 ? "00" : `0${s_0}` : s_0.toString();

        const yyyy: string = yyyy_0 <= 9 ? yyyy_0 <= 0 ? "00" : `0${yyyy_0}` : yyyy_0.toString();
        const mm: string = mm_0 <= 9 ? mm_0 <= 0 ? "00" : `0${mm_0}` : mm_0.toString();
        const dd: string = dd_0 <= 9 ? dd_0 <= 0 ? "00" : `0${dd_0}` : dd_0.toString();


        return format.replace('h', h).replace('m', m).replace('ss', s).replace('yyyy', yyyy).replace('mm', mm).replace('dd', dd);
    }


    const h_1 = date!.getHours();
    const m_1 = date!.getMinutes();
    const s_1 = date!.getSeconds();

    const yyyy_1 = date!.getFullYear();
    const mm_1 = date!.getMonth() + 1;
    const dd_1 = date!.getDate();


    //Format in String
    const h: string = h_1 <= 9 ? h_1 <= 0 ? "00" : `0${h_1}` : h_1.toString();
    const m: string = m_1 <= 9 ? m_1 <= 0 ? "00" : `0${m_1}` : m_1.toString();
    const s: string = s_1 <= 9 ? s_1 <= 0 ? "00" : `0${s_1}` : s_1.toString();

    const yyyy: string = yyyy_1 <= 9 ? yyyy_1 <= 0 ? "00" : `0${yyyy_1}` : yyyy_1.toString();
    const mm: string = mm_1 <= 9 ? mm_1 <= 0 ? "00" : `0${mm_1}` : mm_1.toString();
    const dd: string = dd_1 <= 9 ? dd_1 <= 0 ? "00" : `0${dd_1}` : dd_1.toString();


    return format.replace('h', h).replace('m', m).replace('ss', s).replace('yyyy', yyyy).replace('mm', mm).replace('dd', dd);
}
