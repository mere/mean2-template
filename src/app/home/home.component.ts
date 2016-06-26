import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class HomeComponent {

}
