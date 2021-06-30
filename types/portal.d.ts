export default class Portal {
    static propTypes: {
        children: any;
        portalId: any;
    };
    constructor(props: any);
    el: HTMLDivElement;
    componentDidMount(): void;
    portalRoot: HTMLElement;
    componentWillUnmount(): void;
    render(): any;
}
