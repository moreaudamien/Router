import { Component } from '@angular/core';

class Produit {
  id: number;
  nom: string;
  prix: number | null;
  promo: number | null;

  constructor(id: number, nom: string, prix: number | null, promo: number | null) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.promo = promo;
  }
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  produits: Produit[] = [
    new Produit(1, 'Produit 1', null, 10),
    new Produit(2, 'Produit 2', 20, null),
    new Produit(3, 'Produit 3', 30, null),
    new Produit(4, 'Produit 4', 40, null),
    new Produit(5, 'Produit 5', 50, null),
    new Produit(6, 'Produit 6', 60, null),
    new Produit(7, 'Produit 7', null, null),
    new Produit(8, 'Produit 8', 80, null),
    new Produit(9, 'Produit 9', 90, null),
    new Produit(10, 'Produit 10', 100, null),
  ];

  produitsAvecPrixNonDefini(): Produit[] {
    return this.produits.filter((produit) => produit.prix === null);
  }

  produitsEnPromotion(): Produit[] {
    return this.produits.filter((produit) => produit.promo !== null);
  }

  autresProduits(): Produit[] {
    return this.produits.filter(
      (produit) => produit.prix !== null && produit.promo === null
    );
  }
}
