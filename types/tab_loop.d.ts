export default class TabLoop {
    static get defaultProps(): {
        enableTabLoop: boolean;
    };
    static propTypes: {
        children: any;
        enableTabLoop: any;
    };
    constructor(props: any);
    tabLoopRef: any;
    getTabChildren: () => any;
    handleFocusStart: (e: any) => void;
    handleFocusEnd: (e: any) => void;
    render(): any;
}
