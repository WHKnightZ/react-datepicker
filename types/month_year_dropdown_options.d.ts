export default class MonthYearDropdownOptions {
    static propTypes: {
        minDate: any;
        maxDate: any;
        onCancel: any;
        onChange: any;
        scrollableMonthYearDropdown: any;
        date: any;
        dateFormat: any;
        locale: any;
    };
    constructor(props: any);
    state: {
        monthYearsList: any[];
    };
    renderOptions: () => any[];
    onChange: (monthYear: any) => any;
    handleClickOutside: () => void;
    render(): any;
}
