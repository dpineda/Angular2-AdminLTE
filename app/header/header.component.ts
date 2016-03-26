import {Component} from 'angular2/core';
import {TasksComponent} from './tasks.component';
import {NotificationsComponent} from './notifications.component';
import {ProfileComponent} from './profile.component';
import {MessagesComponent} from './messages.component'

@Component({
    selector: 'app-header',
    template: `
    <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li messages [class.open]="messages.open" (click)="messages.toggle()" class="dropdown messages-menu"></li>
          <li notifications [class.open]="notifications.open" (click)="notifications.toggle()" class="dropdown notifications-menu"></li>
          <li tasks [class.open]="tasks.open" (click)="tasks.toggle()" class="dropdown tasks-menu"></li>
          <li profile [class.open]="profile.open" (click)="profile.toggle()" class="dropdown user user-menu"></li>
          <!-- Control Sidebar Toggle Button -->
          <li><a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a></li>
        </ul>
      </div>
    </nav>
  </header>
        `,
    directives: [
        TasksComponent, 
        NotificationsComponent, 
        ProfileComponent,
        MessagesComponent
    ]
})

export class HeaderComponent {
    public tasks = { 
        open: false,
        toggle: () => {
            this.tasks.open = !this.tasks.open;
        }
    };
    
    public notifications = { 
        open: false,
        toggle: () => {
            this.notifications.open = !this.notifications.open;
        }
    };
    
    public profile = {
        open: false,
        toggle: () => {
            this.profile.open = !this.profile.open;
        } 
    }
    
    public messages = {
        open: false,
        toggle: () => {
            this.messages.open = !this.messages.open;
        } 
    }
    
    constructor(){ } 
}