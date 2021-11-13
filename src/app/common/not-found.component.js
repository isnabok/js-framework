'use strict';

import { WFMComponent } from "../../framework";

class NotFound extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
    <div class="container">
        <div class="row" style="margin-top: 30px;">
            <div class="col s12 m12">
            <div class="card blue-grey lighten-5 hoverable">
                <div class="card-content black-text">
                <span class="card-title">Страница не найдена!</span>
                </div>
                <div class="card-action">
                <a href="#">Переход на главную</a>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
})