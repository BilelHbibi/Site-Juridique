<<<<<<< HEAD
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
=======
# ⚖️ Assistant Juridique IA
## 📌 Description

Application web permettant de poser une question juridique et d’obtenir une réponse générée par une IA spécialisée en droit français.


## 🚀 Démo

🌐 https://site-juridique.netlify.app/


## ⚙️ Fonctionnalités

- Choix de catégorie juridique
- Saisie d’un problème
- Réponse IA dynamique
- Gestion du chargement et des erreurs
- Backend simple pour traiter les questions

---

## 🛠️ Stack

- Frontend : React
- Backend : Node.js + Express
- API IA : OpenAI
- Styles : `styles.css`
- Versioning : Git + GitHub

---

## 📁 Structure du projet
Site-Juridique/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── Footer.jsx
│ │ └── Header.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── vite.config.js


---

## ▶️ Installation et exécution
>>>>>>> 3ab6937 (four commit)

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/BilelHbibi/Site-Juridique.git
cd Site-Juridique
<<<<<<< HEAD
=======

Backend
npm install
node server.js
3️⃣ Frontend
npm install
npm run dev

Frontend : http://localhost:5173

Backend : http://localhost:5000

🔐 Configuration

Créer un fichier .env :

OPENAI_API_KEY=your_api_key
>>>>>>> 3ab6937 (four commit)
