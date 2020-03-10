import { ComponentInterface } from '../interfaces/component.interface';

let instances = [];
let initialisedComponents = {};

export class ComponentService {
    static addComponent<ComponentInterface>(instance: ComponentInterface) {
        instances.push(instance);
    }

    static returnAllActiveComponents(): ComponentInterface[] {
        return instances;
    }

    static returnComponent<ComponentInterface>(instance: any): ComponentInterface {
        return instances.find((element) => {
            return element instanceof instance;
        });
    }

    static deleteInitialisedComponents() {
        initialisedComponents = {};
    }

    static addInitialisedComponent(component: string, element: Element) {
        initialisedComponents[component].push(element)
    }

    static getInitialisedComponent(component: string) {
        return initialisedComponents[component];
    }

    static removeInitialisedComponents(component: string) {
        initialisedComponents[component] = [];
    }
}