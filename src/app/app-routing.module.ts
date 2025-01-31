import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {
  ListAnnonceNonreserverComponent
} from './components/list-annonce-nonreserver/list-annonce-nonreserver.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'annonces-non-reservees', component: ListAnnonceNonreserverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
