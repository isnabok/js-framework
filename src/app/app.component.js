'use strict';

import { WFMComponent } from "../framework/index";

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <div>
            <h4>App component works!</h4>
            <h6>Does is really work?</h6>
        </div>
    `
});