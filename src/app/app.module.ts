import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routing';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ShareModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
