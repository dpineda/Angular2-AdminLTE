import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component'

@Component({
    selector: 'my-app',
    template: `<app-header></app-header>
    {{title}}
    `,
    directives: [HeaderComponent]
})
export class AppComponent {
    public title = 'Angular2 - Admin LTE';
}
