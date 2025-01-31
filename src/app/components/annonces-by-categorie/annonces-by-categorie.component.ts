import { Component } from '@angular/core';
import {AnnonceService} from '../../services/annonce.service';
import {ActivatedRoute} from '@angular/router';
import {Annonce, Categorie} from '../../annonce';
import {ImageService} from '../../services/image.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-annonces-by-categorie',
  templateUrl: './annonces-by-categorie.component.html',
  styleUrl: './annonces-by-categorie.component.css'
})
export class AnnoncesByCategorieComponent {

  annonce: Annonce[] = [];
  imageUrls: SafeUrl[] = [];
  categories: Categorie[] = [];
  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private categorieService: CategorieService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const idCategorie = params['idCategorie'];
      this.getAnnoncesByCategorie(idCategorie);
    });
    this.getCategories();
  }

  getAnnoncesByCategorie(idCategorie: number) {
    this.annonceService.getAnnoncesByCategorie(idCategorie).subscribe(
      (annonces) => {
        this.annonce = annonces;
        this.getFirstImageData();
      },
      (error) => {
        console.error('Erreur lors de la récupération des annonces :', error);
      }
    );
  }
  getFirstImageData() {
    this.annonce.forEach((annonce) => {
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
