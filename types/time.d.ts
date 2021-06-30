export default class Time {
    static get defaultProps(): {
        intervals: number;
        onTimeChange: () => void;
        todayButton: any;
        timeCaption: string;
    };
    static calcCenterPosition: (listHeight: any, centerLiRef: any) => number;
    static propTypes: {
        format: any;
        includeTimes: any;
        intervals: any;
        selected: any;
        openToDate: any;
        onChange: any;
        timeClassName: any;
        todayButton: any;
        minTime: any;
        maxTime: any;
        excludeTimes: any;
        filterTime: any;
        monthRef: any;
        timeCaption: any;
        injectTimes: any;
        handleOnKeyDown: any;
        locale: any;
        showTimeSelectOnly: any;
    };
    state: {
        height: any;
    };
    componentDidMount(): void;
    handleClick: (time: any) => void;
    liClasses: (time: any, currH: any, currM: any) => string;
    handleOnKeyDown: (event: any, time: any) => void;
    renderTimes: () => any[];
    centerLi: any;
    render(): any;
    header: any;
    list: any;
}
