export interface Annonce {
  idAnnonce: number;
  type: TypeAnnonce;
  titreAnnonce: string;
  etatObjet: EtatObjet;
  description: string;
  images: string[];
  datePub: Date;
  estReserve: boolean;
  //user: User;
  categorie: Categorie;
  emplacement: Emplacement;
}

export enum TypeAnnonce {
  OBJET = 'Objet',
  NOURITTURE = 'Nouritture',
}

export enum EtatObjet {
  COMMENEUF = "Comme neuf",
  BONETAT = "Bon etat",
  ETATMOYEN = "Etat moyen",
  ABRICOLER = "A bricoler",
}

// export class User {
//   idUser: number;
//   nom: string;
//   prenom: string;
//   email: string;
//   // Autres propriétés de l'utilisateur
// }

export class Categorie {
   idCategorie?: number;
   nomCategorie?: string;
 }

export class Emplacement {
  idEmplacement?: number;
  city?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

