import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">⚖️ JurIA</h1>
      <nav>
        <a href="#assistant" className="nav-link">Assistant</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}