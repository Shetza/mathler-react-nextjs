# Mathler — Next.js 13 + React + TypeScript

![Demo Screenshot](./screenshot.png)

## 🎯 Présentation

Mathler est un jeu inspiré de **Mathler**, combinant calcul mental et logique de type Wordle.  
Le joueur doit deviner l’équation du jour. Chaque caractère de la tentative est évalué :  

- `correct` : caractère à la bonne position  
- `present` : caractère présent mais mal placé  
- `absent` : caractère inexistant dans la solution  

L’objectif est de reproduire une architecture **fullstack moderne** avec un front-end interactif, une API backend pour la logique métier et une gestion d’état propre.

---

## 🛠️ Technologies utilisées

- **Next.js 13** (App Router + React 18)  
- **React + TypeScript**  
- **Tailwind CSS** pour le styling rapide et responsive  
- **Jest + ts-jest** pour les tests unitaires  
- **Playwright** pour les tests E2E (end-to-end)  
- **SPA navigation** via `<Link>` et App Router  
- **Context API** pour le state global (solution)  

---

## 🏗️ Architecture

```txt
src/
  app/
    layout.tsx           # Layout global avec header/navigation
    page.tsx             # Page Home (GameBoard)
    rules/page.tsx       # Page règles du jeu
    history/page.tsx     # Page historique
    api/
      solution/route.ts  # API GET solution
      check/route.ts     # API POST évaluation guess
  components/
    GameBoard.tsx
    Keypad.tsx
    KeyButton.tsx
    GuessRow.tsx
  context/
    SolutionContext.tsx
  domain/
    evaluator.ts         # logique métier évaluation
tests/
  unit/        # tests Jest unitaires
    evaluator.test.ts
  e2e/         # tests Playwright end-to-end
    game.spec.ts
```

---

## ⚡ Fonctionnement

1. **Récupération de la solution**  
   - La solution du jour est récupérée via `/api/solution`.  
   - Stockée dans un **Context React** pour éviter les fetchs multiples (SPA + Strict Mode dev).  

2. **Saisie du joueur**  
   - Clavier virtuel (`Keypad`) → gestion de l’état local `currentGuess`.  
   - Suppression avec `⌫` et validation avec `OK`.  

3. **Évaluation du guess**  
   - Chaque tentative est envoyée à l’API `/api/check` ou évaluée localement via `evaluateGuess`.  
   - Résultat : tableau de `correct / present / absent`.  

4. **Affichage des résultats**  
   - Chaque guess est affichée avec des carrés colorés :  
     - Vert = correct  
     - Jaune = present  
     - Gris = absent  

5. **Navigation SPA**  
   - `<Link>` et App Router → navigation fluide entre `Home`, `Rules`, `History`.  
   - Pas de rechargement complet du navigateur.  

6. **Tests unitaires**  
   - `evaluator.ts` testé avec Jest (`tests/unit/evaluator.test.ts`).  
   - Couvre : match exact, lettres correct/present, doublons et erreurs de longueur.

---

## 🎨 Choix techniques

- **Next.js 13 App Router** : structure moderne, routage flexible, SSR hybride.  
- **Context API** pour solution globale → évite double fetch en dev.  
- **TypeScript** pour sécurité des types et meilleure lisibilité du code.  
- **Tailwind CSS** : rapide à utiliser, design responsive et minimal.  
- **SPA navigation** via `<Link>` → expérience utilisateur fluide.  
- **Séparation front / back** : logique métier dans `/domain` → testable indépendamment.  

---

## 🧪 Lancer le projet

1. Installation

```bash
npm install
```

2. Lancer le serveur dev

```bash
npm run dev
```

Visiter : `http://localhost:3000`

---

## 🧪 Tester la logique métier

### Tests unitaires (Jest)

```bash
npm test
```

- Ces tests se trouvent dans tests/unit/
- Testent uniquement la logique métier (evaluateGuess)
- Ne touchent pas l’interface ni le navigateur

### Tests E2E (Playwright)


```bash
npm run test:e2e // identique à npx playwright test
```

- Ces tests se trouvent dans tests/e2e/
- Simulent des interactions réelles dans un navigateur
- Vérifient le GameBoard, la saisie des touches, et la navigation SPA
- Playwright peut démarrer automatiquement le serveur Next.js si nécessaire (via webServer config)

## 🚀 Points clés de l’implémentation

- Architecture front / back séparée pour un code modulaire et maintenable
- SPA avec routing client-side fluide via `<Link>` et App Router
- State global propre pour la solution via Context API, évitant les fetchs redondants
- Tests unitaires avec Jest pour la logique métier (`evaluateGuess`)
- Tests E2E avec Playwright pour valider les interactions utilisateur
- Code TypeScript strict et bien structuré
- API backend minimaliste mais fonctionnelle

---

## 📌 Améliorations possibles

- Historique des parties en `localStorage` ou backend
- Génération dynamique de la solution du jour
- Limitation du nombre de tentatives et gestion victoire/défaite
- Animations CSS pour feedback utilisateur (bounce, shake, etc.)
- Support mobile complet et responsive
