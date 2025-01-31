import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AnnonceService} from '../../services/annonce.service';
import {ImageService} from '../../services/image.service';
import {Annonce} from '../../annonce';

@Component({
  selector: 'app-list-annonce-nonreserver',
  templateUrl: './list-annonce-nonreserver.component.html',
  styleUrl: './list-annonce-nonreserver.component.css'
})
export class ListAnnonceNonreserverComponent {
  imageUrls: SafeUrl[] = [];
  annonces: Annonce[] = [];

  constructor(
    private annonceService: AnnonceService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getAnnoncesNonReservees()
  }

  getAnnoncesNonReservees() {
    this.annonceService.getAnnoncesNonReservees().subscribe(
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

}
