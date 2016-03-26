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
          <li messages class="dropdown messages-menu"></li>
          <li notifications class="dropdown notifications-menu"></li>
          <li tasks class="dropdown tasks-menu"></li>
          <li profile class="dropdown user user-menu"></li>
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

/**
 * HeaderComponent
 */
export class HeaderComponent {
    constructor(){ } 
}