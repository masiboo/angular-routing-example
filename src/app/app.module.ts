import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ProductComponent } from './product.component';
import { ErrorComponent } from './error.component';

import { ProductService } from './product.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
