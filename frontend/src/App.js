import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedDice, setSelectedDice] = useState(6);
  const [rollResult, setRollResult] = useState(null);
  const [history, setHistory] = useState([]);

  const rollDice = async () => {
    setRollResult(null); // Limpa resultado anterior

    try {
      const response = await fetch(`http://localhost:5000/roll/${selectedDice}`);
      const data = await response.json();
      setRollResult({ diceType: selectedDice, result: data.result });

      // Atualiza o histórico dos últimos 5 lançamentos
      setHistory((prevHistory) => [{ diceType: selectedDice, result: data.result }, ...prevHistory.slice(0, 4)]);
    } catch (error) {
      console.error("Erro ao rolar o dado:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Simulador de Dados 🎲</h1>

      {/* Botões dos lados dos dados */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Escolha um dado:</h2>
        {[4, 6, 8, 10, 12, 20, 100].map((dice) => (
          <button
            key={dice}
            onClick={() => setSelectedDice(dice)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              backgroundColor: selectedDice === dice ? "#d32f2f" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            D{dice}
          </button>
        ))}
      </div>

      {/* Botão de rolar os dados */}
      <button
        onClick={rollDice}
        style={{
          marginLeft: "10px",
          backgroundColor: "lightgray",
          color: "white",
          fontSize: "25px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Rolar Dado
      </button>

      {/* Mostra o resultado */}
      {rollResult && (
        <div>
          <h2 className="result">
            Resultado:  {rollResult.result}
          </h2>
        </div>
      )}

      {/* Histórico de escolhas e resultados */}
      <div style={{ marginTop: "20px", 
                    color: "white",
                    fontSize: "30px"
        
      }}>
        <h2>Histórico:</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              Lançamento {index + 1}: D{entry.diceType} - Resultado: {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;