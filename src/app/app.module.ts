import { AuthGuard } from './util/auth.guard';
import { ItemService } from './item/item.service';
import { LocalStorageService } from './util/local-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { UserService } from './login/user.service';

const appRoutes: Routes = ROUTES;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    LocalStorageService,
    UserService,
    ItemService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
