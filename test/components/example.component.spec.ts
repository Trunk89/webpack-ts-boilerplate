import { Example } from '../../src/components/example.component';

describe("Example Component", () => {
    let component: Example;
    let element: HTMLElement;
    const fixture = `<div class="example" data-message="custom message"></div>`;
    const fixtureEmpty = `<div class="example"></div>`;

    afterEach(() => {
        document.body.innerHTML = '';
    });

    describe("When Example Component is loaded with specified message", () => {
        beforeEach(() => {
            const elem = document.createElement('div');
            elem.innerHTML = fixture;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({ selector: 'test' }, element);
        });

        test("Then MESSAGE is defined as custom message", () => {
            expect(component.MESSAGE).toEqual('custom message');
        });

        test("And document contains the correct html", () => {
            expect(document.querySelector('.example').outerHTML).toBe('<div class="example" data-message="custom message">custom message</div>');
        });
    });

    describe("When Example Component is loaded without specified message", () => {
        beforeEach(() => {
            const elem = document.createElement('div');
            elem.innerHTML = fixtureEmpty;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({ selector: 'test' }, element);
        });

        test("Then MESSAGE is set to default text Message not set", () => {
            expect(component.MESSAGE).toEqual('Message not set');
        });

        test("And container contains the correct html", () => {
            expect(document.querySelector('.example').outerHTML).toBe('<div class="example">Message not set</div>');
        });
    });
});