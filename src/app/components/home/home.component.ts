import { Component } from '@angular/core';
import {AnnonceService} from '../../services/annonce.service';
import {Annonce} from '../../annonce';
import {ImageService} from '../../services/image.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  annonces: Annonce[] = [];
  imageUrls: SafeUrl[] = [];

  constructor(
    private annonceService: AnnonceService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    this.getAnnonces();
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


}
