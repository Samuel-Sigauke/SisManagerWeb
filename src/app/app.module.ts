import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatSidenav, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatStepperModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { LocationStrategy, HashLocationStrategy,CommonModule } from '@angular/common';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftnavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,  
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
