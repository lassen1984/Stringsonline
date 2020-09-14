import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { CookieService } from 'ngx-cookie-service'; //Cookie handler, cookiebanner, login-set-cookie etc.


import { AppComponent } from './app.component';
import { NavigationComponent } from './partials/navigation/navigation.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CookiebannerComponent } from './pages/cookiebanner/cookiebanner.component';
import { LoginComponent } from './pages/login/login.component';
import { SliderComponent } from './partials/slider/slider.component';
import { TermsComponent } from './pages/terms/terms.component';
import { BreadcrumbsComponent } from './partials/breadcrumbs/breadcrumbs.component';
import { SidecategoryComponent } from './partials/sidecategory/sidecategory.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { SearchbarComponent } from './partials/searchbar/searchbar.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FrontpageComponent,
    PagenotfoundComponent,
    CookiebannerComponent,
    LoginComponent,
    SliderComponent,
    TermsComponent,
    BreadcrumbsComponent,
    SidecategoryComponent,
    SearchresultComponent,
    SearchbarComponent,
    BasketComponent,
    ProductsComponent,
    ProductCardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
