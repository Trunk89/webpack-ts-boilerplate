import { Example } from '../../src/components/example.component';

describe("Example Component", () => {
let component: any; //set as any to be able to access private class members
let element: HTMLElement;
const fixture = `<div class="example" data-message="custom message"></div>`;
const fixtureEmpty = `<div class="example"></div>`;

    describe("When Example Component is loaded with specified message", () => {
        
        beforeEach(() => {
            let elem = document.createElement('div');
            elem.innerHTML = fixture;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({}, element);
        });

        it("Then MESSAGE is defined as custom message", () => {
            expect(component.MESSAGE).toEqual('custom message');
        });

        it("And container contains the correct html", () => {
            expect(component.container.outerHTML).toBe('<div class="example" data-message="custom message">custom message</div>');
        });

        it("And props are defiend", () => {
            expect(component.props).not.toBe(undefined);
        });

    });

    describe("When Example Component is loaded without specified message", () => {
        
        beforeEach(() => {
            let elem = document.createElement('div');
            elem.innerHTML = fixtureEmpty;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new Example({}, element);
        });

        it("Then MESSAGE is set to default text Message not set", () => {
            expect(component.MESSAGE).toEqual('Message not set');
        });

        it("And container contains the correct html", () => {
            expect(component.container.outerHTML).toBe('<div class="example">Message not set</div>');
        });

        it("And props are defiend", () => {
            expect(component.props).not.toBe(undefined);
        });

    });
});