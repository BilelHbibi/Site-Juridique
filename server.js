<<<<<<< HEAD
=======
// Import des dépendances nécessaires
>>>>>>> 290dd09 (four commit)
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

<<<<<<< HEAD
// Charger les variables d'environnement
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

=======
// Chargement des variables d'environnement (.env)
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Middleware pour autoriser les requêtes cross-origin (frontend React)
app.use(cors());

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Initialisation du client OpenAI avec la clé API sécurisée
if (!process.env.OPENAI_API_KEY) {
  console.error("Erreur: variable d'environnement OPENAI_API_KEY manquante.");
  process.exit(1);
}

>>>>>>> 290dd09 (four commit)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

<<<<<<< HEAD
app.post("/ask", async (req, res) => {
  try {
    const { question, category } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `Tu es un assistant juridique spécialisé en droit français. Catégorie : ${category}` },
        { role: "user", content: question }
      ]
    });

    const answer = completion.choices[0].message.content;
    res.json({ answer });

  } catch (error) {
    console.error(error);
=======
/* =========================
   ROUTE PRINCIPALE API
   ========================= */

app.post("/ask", async (req, res) => {
  try {
    // Extraction des données envoyées par le frontend
    const { question, category } = req.body;

    // Validation basique (souvent oubliée)
    if (!question || !category) {
      return res.status(400).json({ error: "Données manquantes" });
    }

    // Appel à l'API OpenAI pour générer une réponse (OpenAI SDK v6.x)
    const completion = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `Tu es un assistant juridique spécialisé en droit français. Catégorie : ${category}`
        },
        {
          role: "user",
          content: question
        }
      ]
    });

    // Récupération de la réponse générée (génération texte standard)
    const answer = completion.output_text ||
      completion.output?.
        map((item) =>
          item.content
            ?.filter((c) => c.type === "output_text")
            .map((c) => c.text)
            .join("")
        )
        .join("\n") ||
      "";

    if (!answer.trim()) {
      return res.status(500).json({ error: "Pas de réponse générée par OpenAI" });
    }

    // Envoi de la réponse au frontend
    res.json({ answer });

  } catch (error) {
    // Log serveur pour debug (important en dev)
    console.error("Erreur API :", error);

    // Réponse générique côté client (éviter fuite d'infos sensibles)
>>>>>>> 290dd09 (four commit)
    res.status(500).json({ error: "Erreur serveur" });
  }
});

<<<<<<< HEAD
app.listen(5000, () => console.log("Backend démarré sur le port 5000"));
=======
/* =========================
   LANCEMENT DU SERVEUR
   ========================= */

// Démarrage du serveur sur le port 5000
app.listen(5000, () => {
  console.log("Backend démarré sur le port 5000");
});
>>>>>>> 290dd09 (four commit)
