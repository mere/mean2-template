import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home';


@Component({
    moduleId: module.id,
    selector: 'mean2-app',
    templateUrl: 'app.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {

}
