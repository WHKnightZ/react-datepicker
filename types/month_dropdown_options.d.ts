export default class MonthDropdownOptions {
    static propTypes: {
        onCancel: any;
        onChange: any;
        month: any;
        monthNames: any;
    };
    renderOptions: () => any;
    onChange: (month: any) => any;
    handleClickOutside: () => any;
    render(): any;
}
