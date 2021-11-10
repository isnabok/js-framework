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
        <app-header></app-header>
        <div class="container">
            <div class="row" sty>
                <div class="col s12 m12">
                <div class="card blue-grey lighten-5 hoverable">
                    <div class="card-content black-text">
                    <span class="card-title">Главная страница</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Переход на другую страницу</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `
});