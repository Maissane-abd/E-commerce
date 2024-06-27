# E-commerce App

Ce projet illustre l'utilisation de React avec Redux pour gérer un panier d'achat interactif. Voici une vue d'ensemble des différents composants et fonctionnalités implémentés :

## Composants Principaux

### 1. FloatingCartButton
Ce composant représente un bouton flottant qui affiche le nombre d'articles actuellement dans le panier. Lorsque l'utilisateur clique sur ce bouton, il ouvre un modal qui affiche le contenu détaillé du panier.

### Fonctionnalités clés :
Affiche le nombre d'articles dans le panier.
Utilise createPortal de React pour afficher le modal dans le DOM.

### 2. Cart
Le composant Cart est un modal qui affiche le contenu détaillé du panier d'achat.

### Fonctionnalités clés :
Affiche chaque article dans le panier avec son image, titre, quantité sélectionnée et option pour supprimer l'article.
Permet à l'utilisateur de modifier la quantité d'un article à l'aide d'un sélecteur.
Calcule et affiche le total du panier.
Bouton pour procéder au paiement.

## Redux : Gestion de l'État
Les états globaux de l'application sont gérés à l'aide de Redux, en utilisant des slices pour les fonctionnalités spécifiques du panier (cart) et des produits (products).

### Actions Redux :
createCartItem: Ajoute un nouvel article au panier.
updateItemFromSelect: Met à jour la quantité d'un article dans le panier.
deleteFromCart: Supprime un article du panier.

## Intégration avec les Produits
Les produits sont chargés à partir d'un fichier JSON (inventory.json) et sont affichés dans une liste à l'aide du composant ProductsList.

### Fonctionnalités clés :
Affiche une liste de produits avec leurs détails (image, titre, prix).
Permet à l'utilisateur d'ajouter des produits au panier en cliquant sur un bouton.


![image](https://github.com/Maissane-abd/E-commerce/assets/145986616/86ead556-1a36-4768-af4c-ea1972b4fd5d)
