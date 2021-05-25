import { BaseComponent } from '../components/base.component';
import { InitialisedComponents } from '../interfaces/initialised-components.interface copy';

const initialisedComponents: InitialisedComponents[] = [];

export class ComponentService {
    static addInitialisedComponent(componentType: string, element: HTMLElement, instance: BaseComponent): void {
        const componentInstance = this.getInitialisedComponent(componentType);
        if (componentInstance) {
            componentInstance.instances.push({ element, instance });
        } else {
            initialisedComponents.push({
                type: componentType,
                instances: [{ element, instance }]
            });
        }
    }

    static getInitialisedComponent(componentType: string): InitialisedComponents {
        return initialisedComponents.find(comp => comp.type === componentType);
    }

    static removeInitialisedComponents(componentType: string): void {
        const componentInstance = this.getInitialisedComponent(componentType);
        const componentIndex = initialisedComponents.indexOf(componentInstance);
        if (componentIndex > -1) {
            initialisedComponents.splice(componentIndex, 1);
        }
    }
}