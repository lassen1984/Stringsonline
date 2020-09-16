import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { ProductsComponent } from './pages/products/products.component';
import { TermsComponent } from './pages/terms/terms.component';


const routes: Routes = [

  { path: '', component: FrontpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'betingelser', component: TermsComponent },
  { path: 'kurv', component: BasketComponent },
  { path: 'produkter/:id', component: ProductsComponent },
  { path: 'produktdetaljer/:id', component: ProductdetailsComponent },
  { path: '**', component: PagenotfoundComponent } //404 error page



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
