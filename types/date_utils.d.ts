export function newDate(value: any): any;
export function parseDate(value: any, dateFormat: any, locale: any, strictParsing: any, minDate: any): any;
export function isValid(date: any, minDate: any): any;
export function formatDate(date: any, formatStr: any, locale: any): any;
export function safeDateFormat(date: any, { dateFormat, locale }: {
    dateFormat: any;
    locale: any;
}): any;
export function safeDateRangeFormat(startDate: any, endDate: any, props: any): string;
export function setTime(date: any, { hour, minute, second }: {
    hour?: number;
    minute?: number;
    second?: number;
}): any;
export function getWeek(date: any, locale: any): any;
export function getDayOfWeekCode(day: any, locale: any): any;
export function getStartOfDay(date: any): any;
export function getStartOfWeek(date: any, locale: any, calendarStartDay: any): any;
export function getStartOfMonth(date: any): any;
export function getStartOfYear(date: any): any;
export function getStartOfQuarter(date: any): any;
export function getStartOfToday(): any;
export function getEndOfWeek(date: any): any;
export function getEndOfMonth(date: any): any;
export function isSameYear(date1: any, date2: any): any;
export function isSameMonth(date1: any, date2: any): any;
export function isSameQuarter(date1: any, date2: any): any;
export function isSameDay(date1: any, date2: any): any;
export function isEqual(date1: any, date2: any): any;
export function isDayInRange(day: any, startDate: any, endDate: any): any;
export function getDaysDiff(date1: any, date2: any): any;
export function registerLocale(localeName: any, localeData: any): void;
export function setDefaultLocale(localeName: any): void;
export function getDefaultLocale(): any;
export function getLocaleObject(localeSpec: any): any;
export function getFormattedWeekdayInLocale(date: any, formatFunc: any, locale: any): any;
export function getWeekdayMinInLocale(date: any, locale: any): any;
export function getWeekdayShortInLocale(date: any, locale: any): any;
export function getMonthInLocale(month: any, locale: any): any;
export function getMonthShortInLocale(month: any, locale: any): any;
export function getQuarterShortInLocale(quarter: any, locale: any): any;
export function isDayDisabled(day: any, { minDate, maxDate, excludeDates, includeDates, filterDate }?: {
    minDate: any;
    maxDate: any;
    excludeDates: any;
    includeDates: any;
    filterDate: any;
}): any;
export function isDayExcluded(day: any, { excludeDates }?: {
    excludeDates: any;
}): any;
export function isMonthDisabled(month: any, { minDate, maxDate, excludeDates, includeDates, filterDate }?: {
    minDate: any;
    maxDate: any;
    excludeDates: any;
    includeDates: any;
    filterDate: any;
}): any;
export function isMonthinRange(startDate: any, endDate: any, m: any, day: any): boolean;
export function isQuarterDisabled(quarter: any, { minDate, maxDate, excludeDates, includeDates, filterDate }?: {
    minDate: any;
    maxDate: any;
    excludeDates: any;
    includeDates: any;
    filterDate: any;
}): any;
export function isYearDisabled(year: any, { minDate, maxDate }?: {
    minDate: any;
    maxDate: any;
}): boolean;
export function isQuarterInRange(startDate: any, endDate: any, q: any, day: any): boolean;
export function isOutOfBounds(day: any, { minDate, maxDate }?: {
    minDate: any;
    maxDate: any;
}): boolean;
export function isTimeInList(time: any, times: any): any;
export function isTimeDisabled(time: any, { excludeTimes, includeTimes, filterTime }?: {
    excludeTimes: any;
    includeTimes: any;
    filterTime: any;
}): any;
export function isTimeInDisabledRange(time: any, { minTime, maxTime }: {
    minTime: any;
    maxTime: any;
}): boolean;
export function monthDisabledBefore(day: any, { minDate, includeDates }?: {
    minDate: any;
    includeDates: any;
}): any;
export function monthDisabledAfter(day: any, { maxDate, includeDates }?: {
    maxDate: any;
    includeDates: any;
}): any;
export function yearDisabledBefore(day: any, { minDate, includeDates }?: {
    minDate: any;
    includeDates: any;
}): any;
export function yearsDisabledBefore(day: any, { minDate, yearItemNumber }?: {
    minDate: any;
    yearItemNumber?: number;
}): boolean;
export function yearDisabledAfter(day: any, { maxDate, includeDates }?: {
    maxDate: any;
    includeDates: any;
}): any;
export function yearsDisabledAfter(day: any, { maxDate, yearItemNumber }?: {
    maxDate: any;
    yearItemNumber?: number;
}): boolean;
export function getEffectiveMinDate({ minDate, includeDates }: {
    minDate: any;
    includeDates: any;
}): any;
export function getEffectiveMaxDate({ maxDate, includeDates }: {
    maxDate: any;
    includeDates: any;
}): any;
export function getHightLightDaysMap(highlightDates?: any[], defaultClassName?: string): any;
export function timesToInjectAfter(startOfDay: any, currentTime: any, currentMultiplier: any, intervals: any, injectedTimes: any): any[];
export function addZero(i: any): string;
export function getYearsPeriod(date: any, yearItemNumber?: number): {
    startPeriod: number;
    endPeriod: number;
};
export const DEFAULT_YEAR_ITEM_NUMBER: 12;
export { isDate, setMinutes, setHours, setMonth, setQuarter, setYear, getSeconds, getMinutes, getHours, getMonth, getQuarter, getYear, getDay, getDate, getTime, addMinutes, addDays, addWeeks, addMonths, addYears, addHours, subMinutes, subHours, subDays, subWeeks, subMonths, subYears, isBefore, isAfter };
