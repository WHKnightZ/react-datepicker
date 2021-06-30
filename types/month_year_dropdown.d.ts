export default class MonthYearDropdown {
    static propTypes: {
        dropdownMode: any;
        dateFormat: any;
        locale: any;
        maxDate: any;
        minDate: any;
        date: any;
        onChange: any;
        scrollableMonthYearDropdown: any;
    };
    state: {
        dropdownVisible: boolean;
    };
    renderSelectOptions: () => any[];
    onSelectChange: (e: any) => void;
    renderSelectMode: () => any;
    renderReadView: (visible: any) => any;
    renderDropdown: () => any;
    renderScrollMode: () => any[];
    onChange: (monthYearPoint: any) => void;
    toggleDropdown: () => any;
    render(): any;
}
