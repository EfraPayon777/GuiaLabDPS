"use client";
import styles from "./page.module.css";
import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const handleOperacion = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || (operacion !== "√" && isNaN(n2))) {
      setError("Por favor, ingresa números válidos.");
      return;
    }

    setError(""); // Limpiar errores

    switch (operacion) {
      case "+":
        setResultado(n1 + n2);
        break;
      case "-":
        setResultado(n1 - n2);
        break;
      case "*":
        setResultado(n1 * n2);
        break;
      case "/":
        if (n2 === 0) {
          setError("No se puede dividir por cero.");
        } else {
          setResultado(n1 / n2);
        }
        break;
      case "^":
        setResultado(Math.pow(n1, n2));
        break;
      case "√":
        if (n1 < 0) {
          setError("No se puede calcular la raíz cuadrada de un número negativo.");
        } else {
          setResultado(Math.sqrt(n1));
        }
        break;
      default:
        setError("Operación no válida.");
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResultado("");
    setError("");
  };

  return (
    <div className={styles.calculadora}>
      <h2>Calculadora</h2>
      <div>
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className={styles.botones}>
        <button onClick={() => handleOperacion("+")}>Suma</button>
        <button onClick={() => handleOperacion("-")}>Resta</button>
        <button onClick={() => handleOperacion("*")}>Multiplicación</button>
        <button onClick={() => handleOperacion("/")}>División</button>
        <button onClick={() => handleOperacion("^")}>Potenciación</button>
        <button onClick={() => handleOperacion("√")}>Raíz Cuadrada</button>
        <button onClick={handleReset}>Borrar</button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {resultado !== "" && <p className={styles.resultado}>Resultado: {resultado}</p>}
    </div>
  );
};
const Equipos = ({ equipos }) => {
  return (
    <div>
      <h2 className={styles.title}>Equipos de Fútbol</h2> 
      <div className={styles.container__list}>
        {equipos.map((equipo) => (
          <div key={equipo.id}>
            <h3 className={styles.nameclub}>{equipo.nombre}</h3>
            <ul className={styles.container__list}>
              {equipo.plantilla.map((jugador) => (
                <li className={styles.playerCard} key={jugador.id}>
                  <img src={jugador.foto} alt={jugador.nombre} />
                  <strong>{jugador.nombre}</strong>
                  <p>
                    Altura: {jugador.Altura}m <br />
                    Peso: {jugador.Peso}Kg
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Eden Hazard",
          Altura: "1.75",
          Peso: "74",
          foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eden_Hazard_WC2022.jpg/250px-Eden_Hazard_WC2022.jpg",
        },
        {
          id: 2,
          nombre: "Gonzalo García",
          Altura: "1.82",
          Peso: "74",
          foto: "https://sportsunlimitednews.com/wp-content/uploads/2025/06/Gonzalo-Garcia-Real-Madrid-006-GettyImages-1920x1280.jpg",
        },
        {
          id: 3,
          nombre: "Karim Benzema",
          Altura: "1.85",
          Peso: "81",
          foto: "https://media.cnn.com/api/v1/images/stellar/prod/221017111358-01-karim-benzema.jpg?c=16x9&q=h_720,w_1280,c_fill",
        },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Marc-André ter Stegen",
          Altura: "1.87",
          Peso: "85",
          foto: "https://www.prokeeper.eu/wp-content/uploads/Marc-Andre-ter-Stegen.jpg",
        },
        {
          id: 2,
          nombre: "Iñigo Martinez",
          Altura: "1.82",
          Peso: "76",
          foto: "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/10/25/671bba1cab90a.jpeg",
        },
        {
          id: 3,
          nombre: "Gavi",
          Altura: "1.73",
          Peso: "70",
          foto: "https://tse2.mm.bing.net/th/id/OIP.OeafOmTHPGdTMduPdgO4uQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
      ],
    },
    {
      id: 3,
      nombre: "Atlético de Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Jan Oblak",
          Altura: "1.88",
          Peso: "87",
          foto: "https://th.bing.com/th/id/R.37b3b0224db00003526c89c2d9f6b2ce?rik=Rq9Wv8MZlJ7TnA&pid=ImgRaw&r=0",
        },
        {
          id: 2,
          nombre: "Antoine Griezmann",
          Altura: "1.76",
          Peso: "73",
          foto: "https://th.bing.com/th/id/R.5c80217a25a563a44e092cdf41b87dea?rik=Yo%2bKjPWlNdIiug&pid=ImgRaw&r=0",
        },
        {
          id: 3,
          nombre: "Koke",
          Altura: "1.78",
          Peso: "75",
          foto: "https://agentelibredigital.com/wp-content/uploads/2023/12/Portada-Koke.png",
        },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <h1>Mi Aplicación de Fútbol</h1>
      <Equipos equipos={equiposData} />
      <Calculadora /> {/* Calculadora añadida debajo de los equipos */}
    </main>
  );
}
