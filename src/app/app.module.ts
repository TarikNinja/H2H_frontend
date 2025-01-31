import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';
import { ListAnnonceComponent } from './components/list-annonce/list-annonce.component';
import { ListAnnonceNonreserverComponent } from './components/list-annonce-nonreserver/list-annonce-nonreserver.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CreateAnnonceComponent } from './components/create-annonce/create-annonce.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { AnnoncesByCategorieComponent } from './components/annonces-by-categorie/annonces-by-categorie.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListAnnonceComponent,
    ListAnnonceNonreserverComponent,
    CategorieComponent,
    CreateAnnonceComponent,
    HomeUserComponent,
    NavbarUserComponent,
    AnnoncesByCategorieComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
