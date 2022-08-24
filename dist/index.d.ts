interface OptionsDate {
    monthName?: boolean;
    date?: Date;
}
/**
 * @copyright This function uses MS library, all library credit goes to Vercel
 * @description - Adds a time to the current timestamp. example: AddTimeToDate('1d') returns in milliseconds - s, m, h, d
 */
declare function AddTimeToDate(time: number, inSeconds?: boolean): number;
/**
 *
 * @description - Convert timestamp time from milliseconds to seconds
 */
declare function MillisToSeconds(timestamp: number): number;
/**
 * @description - Convert timestamp time from seconds to milliseconds
 */
declare function SecondsToMillis(timestamp: number): number;
/**
 * @description - Do a date formatting to string - StringFormat('you are in the day DD/MM/YYYY') or StringFormat('you are in the day DD/MM/YYYY', { monthName: true, date: new Date(47865378525837) })
 */
declare function StringFormat(format: string, options?: OptionsDate): string;
export { StringFormat, SecondsToMillis, MillisToSeconds, AddTimeToDate };
//# sourceMappingURL=index.d.ts.map