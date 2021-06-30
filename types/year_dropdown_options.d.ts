export default class YearDropdownOptions {
    static propTypes: {
        minDate: any;
        maxDate: any;
        onCancel: any;
        onChange: any;
        scrollableYearDropdown: any;
        year: any;
        yearDropdownItemNumber: any;
    };
    constructor(props: any);
    state: {
        yearsList: number[];
    };
    myRef: any;
    componentDidMount(): void;
    renderOptions: () => any[];
    onChange: (year: any) => void;
    handleClickOutside: () => void;
    shiftYears: (amount: any) => void;
    incrementYears: () => void;
    decrementYears: () => void;
    render(): any;
}
