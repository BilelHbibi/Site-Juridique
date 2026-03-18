import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Travail");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendQuestion = async () => {
    if (!question) {
      setError("Veuillez décrire votre problème.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
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
          >
            <option>Travail</option>
            <option>Famille</option>
            <option>Immobilier</option>
            <option>Pénal</option>
            <option>Consommation</option>
          </select>

          <textarea
            placeholder="Décrivez votre problème..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={styles.textarea}
          />

          <button onClick={sendQuestion} style={styles.button}>
            {loading ? "Analyse..." : "Obtenir une réponse"}
          </button>

          {response && (
            <div style={styles.responseBox}>
              <h3>Réponse :</h3>
              <p style={{ whiteSpace: "pre-line" }}>{response}</p>
            </div>
          )}

          <p style={styles.disclaimer}>
            ⚠️ Cet assistant ne remplace pas un avocat. Il fournit une première
            orientation seulement.
          </p>
        </div>
      </main>
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
