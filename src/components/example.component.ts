export class Example {

    private _MESSAGE: string;
    private _container: HTMLElement;
    private _props: any;

    constructor(props: any, container: HTMLElement) {
        this._MESSAGE = container.dataset.message || 'Message not set';
        this._container = container;
        this._props = props;
        this.init();
    }

    private init() {
        this.appendMessage();
    }

    private appendMessage() {
        this._container.append(this._MESSAGE);
    }
}