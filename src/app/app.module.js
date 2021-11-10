'use strict';

import { WFModule } from '../framework/index';
import { appComponent } from './app.component';

class AppModule extends WFModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appComponent,
        appHeader,
    ]
});