'use strict';

import { WFMComponent } from "../../framework";

class TabsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    events() {
        return {
            'click .collapsible': 'onTabClick',
        }
    }
    onTabClick({ target }) {
        if (!target.classList.contains('collapsible-header')) return;

        this.el.querySelectorAll('.js-tab').forEach(e => e.classList.remove('active'));
        target.parentNode.classList.add('active');
    }

}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
    <div class="container">
        <div class="row" style="margin-top: 30px;">
            <div class="col s12 m12">
                <ul class="collapsible popout">
                    <li class="js-tab">
                    <div class="collapsible-header" tabindex="0">First</div>
                    <div class="collapsible-body">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span>
                    </div>
                    </li>
                    <li class="js-tab">
                    <div class="collapsible-header" tabindex="0">Second</div>
                    <div class="collapsible-body">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        </span>
                    </div>
                    </li>
                    <li class="js-tab">
                    <div class="collapsible-header" tabindex="0">Third</div>
                    <div class="collapsible-body">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        </span>
                    </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>

    
    `,
});