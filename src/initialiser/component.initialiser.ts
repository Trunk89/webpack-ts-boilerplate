import { COMPONENTS_CONFIG } from '../constants/components.config';
import { COMPONENTS } from '../constants/components.const';
import { ComponentService } from '../services/components.service';
import { ComponentInterface } from '../interfaces/component.interface';

export class ComponentInitialiser {
    constructor() {
        this.initialiseComponents(document);

        document.addEventListener('dom-change', (e) => {
            this.initialiseComponents(e.target as Document);
        });
    }

    initialiseComponents(doc: Document) {
        COMPONENTS_CONFIG.forEach((component: ComponentInterface) => {
            if (!ComponentService.getInitialisedComponent(component.name)) {
                ComponentService.removeInitialisedComponents(component.name)
            }

            Array.from(doc.querySelectorAll(component.props.selector)).forEach(element => {
                if (!ComponentService.getInitialisedComponent(component.name).includes(element)) {
                    ComponentService.addInitialisedComponent(component.name, element);
                    ComponentService.addComponent(new COMPONENTS[component.name](component.props, element));
                }
            });
        });
    }
}