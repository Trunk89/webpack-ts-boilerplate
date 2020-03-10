import './styles/main.scss';
import { ComponentInitialiser } from './initialiser/component.initialiser';

class App {
    constructor() {
        new ComponentInitialiser();
    }
}

new App();
