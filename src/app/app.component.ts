import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home';


@Component({
    moduleId: module.id,
    selector: 'mean2-app',
    templateUrl: 'app.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
    { path: '/', component: HomeComponent },
])
export class AppComponent {

    constructor(private router: Router) {
        
    }
}
