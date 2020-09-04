import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './partials/navigation/navigation.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FrontpageComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
