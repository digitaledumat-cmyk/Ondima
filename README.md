# Ondima.ma — IPTV Maroc Premium

Site web premium de streaming IPTV pour [ondima.ma](https://ondima.ma), construit avec Next.js 15 et Tailwind CSS 4.

---

## Prérequis

- **Node.js** 18.18 ou supérieur (recommandé : v20+)
- **npm** (inclus avec Node.js)

Vérifier l'installation :

```bash
node -v
npm -v
```

---

## Prévisualisation en local (Localhost)

### 1. Ouvrir le terminal dans le dossier du projet

```bash
cd /Users/mac/Desktop/Ondima
```

### 2. Installer les dépendances (première fois uniquement)

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

### 4. Ouvrir le site dans votre navigateur

Une fois le serveur démarré, ouvrez :

**http://localhost:3000**

Le terminal affichera un message du type :

```
▲ Next.js 15.x.x
- Local:   http://localhost:3000
```

> Le rechargement est automatique : toute modification du code met à jour la page instantanément (Hot Reload).

### 5. Arrêter le serveur

Dans le terminal, appuyez sur `Ctrl + C`.

### Dépannage — erreur de compilation ou page 500

Si le localhost affiche une erreur (`ENOENT`, `MODULE_NOT_FOUND`, page blanche) :

```bash
# 1. Arrêter tous les serveurs (Ctrl + C)
# 2. Nettoyer le cache Next.js
npm run clean
# 3. Reconstruire et relancer
npm run build
npm run dev
```

> **Cause fréquente** : un ancien `npm run dev` tourne encore en arrière-plan pendant un `npm run build`, ce qui corrompt le dossier `.next`.

---

## Commandes utiles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement sur **http://localhost:3000** |
| `npm run build` | Compile le projet pour la production |
| `npm run start` | Lance le build de production en local (après `npm run build`) |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run clean` | Supprime le cache `.next` (en cas d'erreur) |

### Tester le build de production en local

```bash
npm run build
npm run start
```

Le site sera accessible sur **http://localhost:3000** (mode production).

---

## Déploiement Vercel

1. Connectez le dépôt GitHub à Vercel
2. Ajoutez le domaine `ondima.ma` (sans www)
3. Le redirect `www → non-www` est configuré via `next.config.ts` et `vercel.json`

---

## Structure du projet

- `src/app/layout.tsx` — Métadonnées SEO
- `src/app/page.tsx` — Page d'accueil
- `src/components/` — Composants UI (Hero, Pricing, Features…)
- `src/lib/pricing.ts` — Données des offres
# Ondima
