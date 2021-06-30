export default class Year {
    static propTypes: {
        date: any;
        disabledKeyboardNavigation: any;
        onDayClick: any;
        preSelection: any;
        selected: any;
        inline: any;
        maxDate: any;
        minDate: any;
        yearItemNumber: any;
    };
    constructor(props: any);
    handleYearClick: (day: any, event: any) => void;
    isSameDay: (y: any, other: any) => any;
    isKeyboardSelected: (y: any) => any;
    onYearClick: (e: any, y: any) => void;
    getYearClassNames: (y: any) => any;
    render(): any;
}
