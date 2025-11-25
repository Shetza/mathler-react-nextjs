# Mémo Synthétique -- React/Next.js, Tests Unitaires, E2E (Playwright), Debug & Bonnes Pratiques

## 1. Structure et bonnes pratiques

-   Séparer clairement la logique métier (`domain`), l'UI (`components`)
    et les services.
-   Utiliser une arborescence dédiée : `src/domain`, `src/services`,
    `src/components`, `tests/unit`, `tests/e2e`.
-   Documenter les choix techniques dans le README (DDD, Jest,
    Playwright, Docker).

## 2. Tests unitaires (Jest)

-   Jest doit uniquement exécuter `tests/unit`.
-   Exclure les tests e2e via `testPathIgnorePatterns`.
-   Erreur *"describe is not defined"* → un test Playwright est exécuté
    par Jest.

## 3. Tests end-to-end (Playwright)

-   Playwright doit uniquement exécuter `tests/e2e`.
-   Lancer avec : `npx playwright test` ou un script dédié.
-   Next.js doit être lancé avant : `npm run dev`.
-   Utiliser `page.locator()` pour cibler des éléments.
-   Ajouter des `id` dans le DOM pour simplifier les sélecteurs.
-   Déboguer avec :
    -   `await locator.count()`
    -   `await locator.innerHTML()`
    -   `console.log(await locator.allInnerTexts())`
    -   `await page.pause()` (inspector Playwright)

## 4. Debug Playwright

-   Si un locator retourne **0 éléments** → problème de timing ou
    sélecteur incorrect.
-   Timeout 5000ms → augmenter le timeout ou ajouter un
    `waitForSelector`.
-   Attendre la réponse API :\
    `await page.waitForResponse('/api/solution');`

## 5. Tests E2E sur interactions clavier/jeu

-   Vérifier que le GameBoard est visible avant les interactions.
-   Après un clic sur "OK", vérifier :
    -   nombre de cellules
    -   classes CSS (`bg-green-600`, etc.)

## 6. Bonnes pratiques React/Next.js

-   Bien comprendre l'asynchronisme (useEffect, fetch, renders).
-   Toujours utiliser une clé stable dans les listes : `key={value}`.
-   Ajouter des attributs ARIA pour l'accessibilité et les tests.

## 7. Dockerisation

-   Scripts utiles :
    -   `docker build`
    -   `docker run`
-   Playwright en Docker nécessite les dépendances Chromium.

## 8. README

-   Expliquer l'architecture, les choix techniques, la gestion des
    tests.
-   Expliquer comment lancer l'application et les tests.

## 9. Commandes essentielles

-   `npm run dev` → lancer Next.js\
-   `npm test` → exécuter Jest\
-   `npm run test:e2e` → exécuter Playwright\
-   `npx playwright show-report` → afficher le rapport

## 10. Rappels pour futurs projets

-   Toujours séparer **unit** et **e2e**.\
-   Ajouter des IDs pour les tests E2E.\
-   Prévoir des scripts clairs : `test`, `test:unit`, `test:e2e`.\
-   Documenter les zones complexes.
