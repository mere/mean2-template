import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomeComponent {
    public title: string;

    constructor() {
        this.title = 'Homepage';
    }
}
