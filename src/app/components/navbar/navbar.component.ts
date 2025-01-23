import { Component } from '@angular/core';
import { AuthResponse } from '../../auth-response';
import { HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {SignUpService} from '../../services/sign-up.service';
import {RechercheService} from '../../services/recherche.service';
import {Annonce} from '../../annonce';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  email: string = '';
  password: string = '';
  nom: string = '';
  prenom: string = '';
  username: string = '';
  numTel: string = '';
  cin: string = '';
  searchKeyword: string = ''; // Mot-clé de recherche
  searchResults: Annonce[] = []; // Résultats de recherche

  constructor(
    private authService: AuthService,
    private signupService: SignUpService,
    private rechercheService: RechercheService,
  ) { }

  onLoginSubmit() {
    this.authService.authenticate(this.email, this.password).subscribe(
      (response: AuthResponse) => {
        alert(response.message); // Utilisez le champ de l'interface
        // Gérer la redirection ou le stockage des informations de session
      },
      (error: HttpErrorResponse) => { // Spécifiez le type ici
        alert('Échec de l\'authentification : ' + error.message);
        // Vous pouvez également gérer les erreurs plus en détail ici
      }
    );
  }

  onRegisterSubmit() {
    // Créez l'objet d'inscription avec les données du formulaire
    const signupData = {
      email: this.email,
      password: this.password,
      nom: this.nom,
      prenom: this.prenom,
      username: this.username,
      numTel: this.numTel,
      cin: this.cin
    };

    // Appelez le service d'inscription
    this.signupService.registerUser(signupData).subscribe(
      (response: AuthResponse) => {
        alert(response.message); // Utilisez le champ de l'interface
        // Gérer la redirection ou le stockage des informations de session
      },
      (error: HttpErrorResponse) => {
        alert('Échec de l\'inscription : ' + error.message);
      }
    );
  }

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
