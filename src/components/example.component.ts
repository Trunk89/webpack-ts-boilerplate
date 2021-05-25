import { ComponentProps } from "../interfaces/component.props.interface";
import { BaseComponent } from "./base.component";

export class Example extends BaseComponent {
    private _MESSAGE: string;

    constructor(props: ComponentProps, container: HTMLElement) {
        super(props, container);

        this._MESSAGE = container.dataset.message || 'Message not set';

        this.init();
    }

    get MESSAGE():string {
        return this._MESSAGE;
    }

    private init() {
        this.appendMessage();
    }

    private appendMessage() {
        this.container.append(this._MESSAGE);
    }
}