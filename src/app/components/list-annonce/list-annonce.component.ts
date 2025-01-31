import { Component } from '@angular/core';
import {Annonce, Categorie} from '../../annonce';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AnnonceService} from '../../services/annonce.service';
import {ImageService} from '../../services/image.service';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrl: './list-annonce.component.css'
})
export class ListAnnonceComponent {
  annonces: Annonce[] = [];
  imageUrls: SafeUrl[] = [];
  categories: Categorie[] = [];

  constructor(
    private annonceService: AnnonceService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private categorieService: CategorieService
  ) { }


  ngOnInit() {
    this.getAnnonces();
    this.getCategories()
  }

  getAnnonces() {
    this.annonceService.getAllAnnonces().subscribe(
      (data) => {
        this.annonces = data;
        this.getFirstImageData();
      },
      (error) => {
        console.error('Erreur lors de la récupération des annonces :', error);
      }
    );
  }

  getFirstImageData() {
    this.annonces.forEach((annonce) => {
      if (annonce.images.length > 0) {
        this.imageService.getImageData(annonce.images[0]).subscribe(
          (response) => {
            if (response.body instanceof Blob) {
              const imageUrl = this.sanitizer.bypassSecurityTrustUrl(
                URL.createObjectURL(response.body)
              );
              this.imageUrls.push(imageUrl);
            } else {
              this.imageUrls.push(''); // Ajouter une chaîne vide si le corps de la réponse n'est pas un Blob
            }
          },
          (error) => {
            console.error('Erreur lors de la récupération de l\'image :', error);
            this.imageUrls.push(''); // Ajouter une chaîne vide en cas d'erreur
          }
        );
      } else {
        this.imageUrls.push(''); // Ajouter une chaîne vide si l'annonce n'a pas d'image
      }
    });
  }

  getCategories(): void {
    this.categorieService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    );
  }

}
