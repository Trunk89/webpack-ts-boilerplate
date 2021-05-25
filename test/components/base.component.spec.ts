import { BaseComponent } from '../../src/components/base.component';

describe("Base Component", () => {
    let component: BaseComponent;
    let element: HTMLElement;
    const fixture = `<div class="example" data-message="custom message"></div>`;
    let elem: HTMLElement;

    afterEach(() => {
        document.body.innerHTML = '';
        elem = null;
        element = null;
    });

    describe("When Base Component is loaded with specified message", () => {
        beforeEach(() => {
            elem = document.createElement('div');
            elem.innerHTML = fixture;
            element = elem.querySelector('.example');
            document.body.append(element);
            component = new BaseComponent({ selector: 'test' }, element);
        });

        test("Then component.container is defined", () => {
            expect(component.container.outerHTML).toBe('<div class="example" data-message="custom message"></div>');
        });

        test("And component.props is defined", () => {
            expect(component.props).toEqual({"selector": "test"});
        });
    });
});