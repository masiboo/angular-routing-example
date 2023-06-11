import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
  <div class="container">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" [routerLink]="['/']"
          ><strong> Angular Router Example </strong></a
        >
      </div>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['product']">Product</a></li>
        <li><a [routerLink]="['contact']">Contact us</a></li>
      </ul>
    </div>
  </nav>

  <router-outlet></router-outlet>

  <b>Read : <a href="https://www.tektutorialshub.com/angular/angular-routing-navigation/" target="_blank">Angular Router</a></b>
  
</div>
  
  `,
})
export class AppComponent {}
