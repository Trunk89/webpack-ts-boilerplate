import { BaseComponent } from '../../src/components/base.component';
import { ComponentService } from '../../src/services/components.service';

describe("Component Service", () => {
    describe("When addInitialisedComponent is called with BaseComponent", () => {
        const element = document.createElement("div");
        const element2 = document.createElement("div");
        let component;
        let component2;

        beforeEach(() => {
            component = new BaseComponent({ selector: 'test'}, element);
            ComponentService.addInitialisedComponent('BaseComponent', element, component);
        });

        afterEach(() => {
            component = null;
            component2 = null;
            ComponentService.removeInitialisedComponents('BaseComponent');
        });

        test("Then instance of it is added", () => {
            expect(ComponentService.getInitialisedComponent('BaseComponent')).toEqual({"instances": [
                {"element": element, "instance": {"_container": element, "_props": {"selector": "test"}}}], "type": "BaseComponent"});
        });

        describe("When addInitialisedComponent is called with BaseComponent again", () => {    
            beforeEach(() => {
                component2 = new BaseComponent({ selector: 'test'}, element2);
                ComponentService.addInitialisedComponent('BaseComponent', element2, component2);
            });
    
            test("Then instance of it is added", () => {
                expect(ComponentService.getInitialisedComponent('BaseComponent')).toEqual({"instances": 
                    [
                        {"element": element, "instance": {"_container": element, "_props": {"selector": "test"}}}, 
                        {"element": element2, "instance": {"_container": element2, "_props": {"selector": "test"}}}
                    ], "type": "BaseComponent"});
            });

            describe("When removeInitialisedComponents is called with BaseComponent", () => {    
                beforeEach(() => {
                    component2 = new BaseComponent({ selector: 'test'}, element2);
                    ComponentService.addInitialisedComponent('BaseComponent', element2, component2);
                    ComponentService.removeInitialisedComponents('BaseComponent');
                });
        
                test("Then instance of it are deleted", () => {
                    expect(ComponentService.getInitialisedComponent('BaseComponent')).toEqual(undefined);
                });
            });
        });
    });
});