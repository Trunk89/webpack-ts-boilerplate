import { COMPONENTS_CONFIG } from "../constants/components.config";
import { COMPONENTS } from "../constants/components.const";
import { ComponentService } from "../services/components.service";
import { ComponentInterface } from "../interfaces/component.interface";

export class ComponentInitialiser {
    constructor() {
        this.initialiseComponents(document);

        document.addEventListener("dom-change", (e) => {
            this.initialiseComponents(e.target as Document);
        });
    }

    initialiseComponents(doc: Document): void {
        COMPONENTS_CONFIG.forEach((component: ComponentInterface) => {
            if (!ComponentService.getInitialisedComponent(component.name)) {
                ComponentService.removeInitialisedComponents(component.name)
            }

            Array.from(doc.querySelectorAll(component.props.selector)).forEach((element: HTMLElement) => {

                const componentInstance = ComponentService.getInitialisedComponent(component.name);
                if (!componentInstance || !componentInstance.instances.find(instance => instance.element === element)) {
                    ComponentService.addInitialisedComponent(component.name, element, new COMPONENTS[component.name](component.props, element));
                }
            });
        });
    }
}