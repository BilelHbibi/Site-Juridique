# Assistant Juridique IA

![License](https://img.shields.io/badge/license-MIT-green) ![React](https://img.shields.io/badge/React-17.0.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express-4.x-orange)

---

## 🔹 Description

**Assistant Juridique IA** est une application web permettant à un utilisateur de poser des questions juridiques et de recevoir une **réponse rapide** selon la catégorie choisie (Travail, Famille, Immobilier, Pénal, Consommation).  

Le projet a été développé pour :  
- Fournir une **première orientation juridique**.  
- Démontrer des compétences professionnelles en **React et Node.js**.  
- Respecter les bonnes pratiques Git et GitHub (gestion de secrets, workflow branches).  

> ⚠️ Cet assistant **ne remplace pas un avocat**. Il fournit seulement des indications générales.

---

## 🔹 Fonctionnalités

1. Sélection de **catégorie juridique**.  
2. Zone de saisie pour décrire le problème en détail.  
3. Réponse adaptée avec gestion des erreurs et chargement.  
4. Backend simple pour traiter les questions.  
5. Gestion des erreurs réseau et validation de saisie.  
6. **Sécurité** : les clés API (OpenAI ou autres) ne sont jamais exposées sur GitHub.  

---

## 🔹 Technologies utilisées

- **Frontend :** React.js (hooks, state management)  
- **Backend :** Node.js, Express.js (API REST)  
- **Styles :** CSS inline minimaliste (possibilité de migration vers Tailwind ou SCSS)  
- **Versioning :** Git + GitHub, workflow professionnel avec branches et protection `main`  
- **Sécurité :** `.env` ignoré par Git, secrets jamais exposés  

---

## 🔹 Installation et exécution

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/BilelHbibi/Site-Juridique.git
cd Site-Juridique
