# Design System

Cette application est un design system permettant de développer plus rapidement la partie front d'un projet classique, développée avec **React JS**, **TypeScript**, **Vite**, **HTML** et **SCSS**.

## Fonctionnalités principales

- **Suivi des ventes :** Visualisez le nombre d'articles vendus, non vendus, les bénéfices, et les montants des ventes par mois pour une année donnée.
- **Ajout d'articles :** Ajoutez facilement de nouveaux articles à vendre, avec gestion des quantités et des tailles.
- **Filtres avancés :** Filtrez les articles par état (vendu ou non vendu), par mois et année.
- **Export de données :** Exportez les listes d'articles et les rapports de ventes en fichiers CSV ou Excel.
- **Interface utilisateur réactive :** Design adapté pour les appareils mobiles et de bureau, avec un style moderne.

## Technologies utilisées

- **React JS & TypeScript :** Pour une architecture modulaire et un typage strict.
- **Vite JS :** Utilisé pour le build rapide et le développement avec Hot Module Replacement (HMR).
- **SCSS :** Pour une gestion avancée des styles avec un design réactif.

## Installation et démarrage

1. Clonez le dépôt :

```bash
git clone https://github.com/Andriamahay11master/MaDesignSystem.git
cd MaDesignSystem
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez l'application en mode développement :

```bash
npm run dev
```

4. Accédez à l'application sur `http://localhost:5173`.

## Structure du projet

- **src/** : Contient le code source de l'application.
  - **components/** : Composants réutilisables tels que les formulaires, alertes, tableaux, etc.
  - **pages/** : Pages principales de l'application.
  - **assets/** : Fichiers SCSS pour la gestion des styles globaux et des composants.
  - **models/** : Pour le typage des données.
  - **data/** : Pour les données statiques utilisés par l'application.

## Commandes utiles

- **`npm run dev`** : Démarre l'application en mode développement.
- **`npm run build`** : Génère un build de production.
- **`npm run lint`** : Vérifie et corrige le code avec ESLint.

## Contribution

Les contributions sont les bienvenues. Si vous souhaitez contribuer, ouvrez un problème ou une pull request.
