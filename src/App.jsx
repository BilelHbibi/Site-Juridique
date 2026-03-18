import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import jsPDF from "jspdf";

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

    await new Promise((resolve) => setTimeout(resolve, 800));

    let fakeResponse = "";
    const q = question.toLowerCase();

    /* ===== TRAVAIL ===== */
    if (category === "Travail") {

      if (q.includes("licenciement")) {
        fakeResponse = `Votre problème concerne un licenciement.

En général, un employeur doit respecter certaines règles avant de licencier un salarié. Cela inclut une justification valable et une procédure légale.

Vous pouvez vérifier :
- Votre contrat de travail
- La lettre de licenciement
- Si un préavis a été respecté

Si ces règles ne sont pas respectées, vous pouvez contester la décision et demander une indemnisation.`;
      }

      else {
        fakeResponse = `Votre problème concerne le droit du travail.

Chaque situation dépend du contrat, des conditions de travail et des lois applicables.

Il est conseillé de vérifier vos droits et de consulter un spécialiste si nécessaire.`;
      }
    }

    /* ===== IMMOBILIER ===== */
    else if (category === "Immobilier") {
      fakeResponse = `Votre problème concerne l'immobilier.

Les relations entre locataire et propriétaire sont encadrées par la loi.

Par exemple :
- Un propriétaire ne peut pas expulser un locataire sans décision de justice
- Le contrat de location définit les droits et obligations

Il est recommandé de vérifier votre contrat et de demander conseil si besoin.`;
    }

    /* ===== FAMILLE ===== */
    else if (category === "Famille") {
      fakeResponse = `Votre problème concerne le droit de la famille.

Cela peut inclure le divorce, la garde des enfants ou les pensions alimentaires.

Chaque cas est spécifique, mais il est souvent nécessaire de passer par une procédure légale.

Un avocat peut vous aider à défendre vos droits.`;
    }

    /* ===== AUTRES ===== */
    else {
      fakeResponse = `Votre demande a été analysée.

Les règles juridiques dépendent de votre situation.

Nous vous recommandons de rassembler vos documents et de consulter un professionnel pour obtenir une réponse adaptée.`;
    }

    setResponse(fakeResponse);
    setLoading(false);
  };

  const exportPDF = () => {
    if (!response) return;
    const doc = new jsPDF();
    doc.text(response, 10, 10);
    doc.save("reponse.pdf");
  };

  return (
    <div style={styles.page}>
      <Header />

      <main style={styles.container}>
        <div style={styles.card}>
          <h2>Assistant Juridique IA</h2>
          <p style={styles.subtitle}>
            Décrivez votre problème pour obtenir une réponse simple
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
            placeholder="Décrivez votre problème juridique en détail..."
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

              <button onClick={exportPDF} style={styles.pdfBtn}>
                Télécharger PDF
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ===== STYLE PRO ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh"
  },
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  },
  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd"
  },
  textarea: {
    width: "100%",
    height: "130px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  responseBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "8px"
  },
  pdfBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginBottom: "10px"
  }
};