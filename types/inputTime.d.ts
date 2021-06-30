export default class inputTime {
    static propTypes: {
        onChange: any;
        date: any;
        timeString: any;
        timeInputLabel: any;
        customTimeInput: any;
    };
    static getDerivedStateFromProps(props: any, state: any): {
        time: any;
    };
    constructor(props: any);
    state: {
        time: any;
    };
    onTimeChange: (time: any) => void;
    renderTimeInput: () => any;
    render(): any;
}
