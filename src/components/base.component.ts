import { ComponentProps } from "../interfaces/component.props.interface";

export class BaseComponent {
    private _container: HTMLElement;
    private _props: ComponentProps;

    constructor(props: ComponentProps, container: HTMLElement) {
        this._container = container;
        this._props = props;
    }

    get container(): HTMLElement {
        return this._container;
    }

    get props(): ComponentProps {
        return this._props;
    }
}