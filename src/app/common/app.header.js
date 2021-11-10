'use strict';

import { WFMComponent } from "../../framework/index";

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="teal darken-3">
            <div class="nav-wrapper" style="margin: 0 15px;">
            <a href="#" class="brand-logo">JS Framework</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#tabs">Tabs</a></li>
            </ul>
            </div>
        </nav>
    `
})