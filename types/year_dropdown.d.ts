export default class YearDropdown {
    static propTypes: {
        adjustDateOnChange: any;
        dropdownMode: any;
        maxDate: any;
        minDate: any;
        onChange: any;
        scrollableYearDropdown: any;
        year: any;
        yearDropdownItemNumber: any;
        date: any;
        onSelect: any;
        setOpen: any;
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
    onChange: (year: any) => void;
    toggleDropdown: (event: any) => void;
    handleYearChange: (date: any, event: any) => void;
    onSelect: (date: any, event: any) => void;
    setOpen: () => void;
    render(): any;
}
