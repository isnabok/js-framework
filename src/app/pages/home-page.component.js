'use strict';

import { WFMComponent } from '../../framework/index';
import { router } from '../../framework/tools/router';

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    events() {
        return {
            'click .js-link': 'goToTabs',
        }
    }

    onInit() {
        console.log('Component init!');
    }

    afterInit() {
        console.log('Component after init!');
    }

    goToTabs(event) {
        event.preventDefault();
        router.navigate('tabs');
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
    <div class="container">
        <div class="row" style="margin-top: 30px;">
            <div class="col s12 m12">
            <div class="card blue-grey lighten-5 hoverable">
                <div class="card-content black-text">
                <span class="card-title">Главная страница</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                <a href="#" class="js-link">Переход на другую страницу</a>
                </div>
            </div>
            </div>
        </div>
    </div>
    `,
});