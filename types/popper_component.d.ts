export const popperPlacementPositions: any;
export default class PopperComponent {
    static get defaultProps(): {
        hidePopper: boolean;
        popperModifiers: any[];
        popperProps: {};
        popperPlacement: string;
    };
    static propTypes: {
        className: any;
        wrapperClassName: any;
        hidePopper: any;
        popperComponent: any;
        popperModifiers: any;
        popperPlacement: any;
        popperContainer: any;
        popperProps: any;
        targetComponent: any;
        enableTabLoop: any;
        popperOnKeyDown: any;
        portalId: any;
    };
    render(): any;
}
