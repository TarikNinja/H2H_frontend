import { Component } from '@angular/core';
import {Annonce} from '../../annonce';
import {RechercheService} from '../../services/recherche.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {

  searchKeyword: string = ''; // Mot-clé de recherche
  searchResults: Annonce[] = []; // Résultats de recherche

  constructor(
    private rechercheService: RechercheService,
  ) { }

  onSearchSubmit() {
    if (this.searchKeyword) {
      this.rechercheService.searchAnnonces(this.searchKeyword).subscribe(
        (results: Annonce[]) => {
          this.searchResults = results; // Stocke les résultats
          console.log('Résultats de la recherche :', this.searchResults);
        },
        (error) => {
          console.error('Erreur lors de la recherche :', error);
        }
      );
    }
  }
}
