export default class MonthDropdown {
    static propTypes: {
        dropdownMode: any;
        locale: any;
        month: any;
        onChange: any;
        useShortMonthInDropdown: any;
    };
    state: {
        dropdownVisible: boolean;
    };
    renderSelectOptions: (monthNames: any) => any;
    renderSelectMode: (monthNames: any) => any;
    renderReadView: (visible: any, monthNames: any) => any;
    renderDropdown: (monthNames: any) => any;
    renderScrollMode: (monthNames: any) => any[];
    onChange: (month: any) => void;
    toggleDropdown: () => any;
    render(): any;
}
