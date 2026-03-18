import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
<<<<<<< HEAD

export default function App() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Travail");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendQuestion = async () => {
    if (!question) {
=======
=======
>>>>>>> 3ab6937 (four commit)
import "./styles.css"; // Import du fichier CSS externe

export default function App() {
  /* =========================
     STATE MANAGEMENT
     ========================= */

  // Stocke la question saisie par l'utilisateur
  const [question, setQuestion] = useState("");

  // Catégorie juridique sélectionnée (valeur par défaut : Travail)
  const [category, setCategory] = useState("Travail");

  // Réponse renvoyée par l'API backend
  const [response, setResponse] = useState("");

  // Indique si une requête est en cours (pour UX : loading)
  const [loading, setLoading] = useState(false);

  // Gestion des erreurs (validation ou serveur)
  const [error, setError] = useState("");

  /* =========================
     API CALL FUNCTION
     ========================= */

  const sendQuestion = async () => {
    // Validation : empêcher l'envoi d'une question vide
    if (!question.trim()) {
<<<<<<< HEAD
>>>>>>> 290dd09 (four commit)
=======
>>>>>>> 3ab6937 (four commit)
      setError("Veuillez décrire votre problème.");
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Initialisation des états avant la requête
>>>>>>> 290dd09 (four commit)
=======
    // Initialisation des états avant la requête
>>>>>>> 3ab6937 (four commit)
    setLoading(true);
    setError("");
    setResponse("");

    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, category }),
      });

      const data = await res.json();
      if (data.answer) setResponse(data.answer);
      else setError("Réponse vide");
    } catch {
      setError("Erreur serveur");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.container}>
        <div style={styles.card}>
          <h2>Assistant Juridique IA</h2>
          <p style={styles.subtitle}>
            Décrivez votre problème pour obtenir une réponse rapide
          </p>

          {error && <p style={styles.error}>{error}</p>}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
=======
=======
>>>>>>> 3ab6937 (four commit)
      // Appel API vers le backend (endpoint local)
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Envoi des données utilisateur au serveur
        body: JSON.stringify({ question, category }),
      });

      // Vérification du status HTTP (bonne pratique souvent oubliée)
      if (!res.ok) {
<<<<<<< HEAD
        const errorText = await res.text();
        throw new Error(errorText || "Erreur HTTP");
=======
        throw new Error("Erreur HTTP");
>>>>>>> 3ab6937 (four commit)
      }

      // Conversion de la réponse JSON
      const data = await res.json();

      // Vérification du contenu retourné
      if (data.answer) {
        setResponse(data.answer);
      } else {
        setError("Réponse vide");
      }
    } catch (err) {
      // Gestion des erreurs réseau ou serveur
<<<<<<< HEAD
      setError(`Erreur serveur, veuillez réessayer. (${err.message})`);
    } finally {
      // Fin du loading
      setLoading(false);
    }
=======
      setError("Erreur serveur, veuillez réessayer.");
    }

    // Fin du loading
    setLoading(false);
>>>>>>> 3ab6937 (four commit)
  };

  /* =========================
     UI RENDER
     ========================= */

  return (
    <div className="page">
      {/* Header global de l'application */}
      <Header />

      <main className="container">
        <div className="card">
          <h2>Assistant Juridique IA</h2>

          {/* Texte d'introduction */}
          <p className="subtitle">
            Décrivez votre problème pour obtenir une réponse rapide
          </p>

          {/* Affichage conditionnel des erreurs */}
          {error && <p className="error">{error}</p>}

          {/* Sélecteur de catégorie juridique */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
<<<<<<< HEAD
>>>>>>> 290dd09 (four commit)
=======
>>>>>>> 3ab6937 (four commit)
          >
            <option>Travail</option>
            <option>Famille</option>
            <option>Immobilier</option>
            <option>Pénal</option>
            <option>Consommation</option>
          </select>

<<<<<<< HEAD
<<<<<<< HEAD
=======
          {/* Zone de saisie du problème utilisateur */}
>>>>>>> 290dd09 (four commit)
=======
          {/* Zone de saisie du problème utilisateur */}
>>>>>>> 3ab6937 (four commit)
          <textarea
            placeholder="Décrivez votre problème..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
            style={styles.textarea}
          />

          <button onClick={sendQuestion} style={styles.button}>
            {loading ? "Analyse..." : "Obtenir une réponse"}
          </button>

          {response && (
            <div style={styles.responseBox}>
=======
=======
>>>>>>> 3ab6937 (four commit)
            className="textarea"
            disabled={loading} // Bloqué pendant l'appel API
          />

          {/* Bouton d'envoi avec état dynamique */}
          <button
            onClick={sendQuestion}
            className="button"
            disabled={loading}
          >
            {loading ? "Analyse en cours..." : "Obtenir une réponse"}
          </button>

          {/* Affichage de la réponse si disponible */}
          {response && (
            <div className="responseBox">
<<<<<<< HEAD
>>>>>>> 290dd09 (four commit)
=======
>>>>>>> 3ab6937 (four commit)
              <h3>Réponse :</h3>
              <p style={{ whiteSpace: "pre-line" }}>{response}</p>
            </div>
          )}

<<<<<<< HEAD
<<<<<<< HEAD
          <p style={styles.disclaimer}>
=======
          {/* Disclaimer légal */}
          <p className="disclaimer">
>>>>>>> 290dd09 (four commit)
=======
          {/* Disclaimer légal */}
          <p className="disclaimer">
>>>>>>> 3ab6937 (four commit)
            ⚠️ Cet assistant ne remplace pas un avocat. Il fournit une première
            orientation seulement.
          </p>
        </div>
      </main>
<<<<<<< HEAD
<<<<<<< HEAD
      <Footer />
    </div>
  );
}

/* ===== STYLE MINIMAL ===== */
const styles = {
  page: { fontFamily: "Arial", background: "#f4f6f9", minHeight: "100vh" },
  container: { maxWidth: "700px", margin: "auto", padding: "20px" },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  subtitle: { fontSize: "13px", color: "#666", marginBottom: "15px" },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "100%",
    height: "130px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  responseBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "8px",
  },
  error: { color: "red", marginBottom: "10px" },
  disclaimer: { marginTop: "15px", fontSize: "12px", color: "#999" },
};
=======
=======
>>>>>>> 3ab6937 (four commit)

      {/* Footer global */}
      <Footer />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> 290dd09 (four commit)
=======
}
>>>>>>> 3ab6937 (four commit)
