"use client";

import React, { useState } from "react";

const PeacockGreenMatchGame = () => {
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([
    { id: 1, src: "https://www.hindustantimes.com/ht-img/img/2023/09/17/1600x900/AP09-17-2023-000493A-0_1694970339107_1694970371437.jpg", name: "South Africa Cricket Team", hidden: false },
    { id: 2, src: "https://i.pinimg.com/736x/9f/c9/d0/9fc9d0a75b8d43e401107fca9e0f38a9.jpg", name: "StarbucksLogo", hidden: false },
    { id: 3, src: "https://medias.spotern.com/spots/w640/126/126106-1532336916.jpg", name: "La La Land", hidden: false },
    { id: 4, src: "https://logos-world.net/wp-content/uploads/2020/11/The-Body-Shop-Logo.png", name: "Body Shop", hidden: false },
  ]);
  const [result, setResult] = useState("");

  const names = [
    { id: 1, name: "StarbucksLogo", description: "The cafe that charges rent money for coffee" },
    { id: 2, name: "La La Land", description: "Proof that Ryan Gosling can break hearts with a piano" },
    { id: 3, name: "Body Shop", description: "Fruit salad vibes, skincare disguise" },
    { id: 4, name: "South Africa Cricket Team", description: "Where talent is endless but luck forgot the address." },
  ];

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetName: string) => {
    e.preventDefault();
    const draggedName = e.dataTransfer.getData("text/plain");

    if (draggedName === targetName) {
      setImages((prevImages) =>
        prevImages.map((img) =>
          img.name === draggedName ? { ...img, hidden: true } : img
        )
      );
      setScore((prevScore) => prevScore + 5);
    } else {
      setScore((prevScore) => prevScore - 2);
      alert("Wrong Match! -2 points");
    }

    checkWin();
  };

  const checkWin = () => {
    if (images.every((img) => img.hidden)) {
      setResult(`🎉 Peacock green champs! You nailed it! Final Score: ${score}`);
    }
  };

  const resetGame = () => {
    setScore(0);
    setResult("");
    setImages((prevImages) =>
      prevImages.map((img) => ({ ...img, hidden: false }))
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e0f7f1", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#00695c" }}>Hue Got This</h1>
      <div id="scoreboard" style={{ textAlign: "center", fontSize: "1.2em", color: "#004d40", marginTop: "10px" }}>
        Score: {score}
      </div>

      <div id="game-container" style={{ display: "flex", justifyContent: "space-between", maxWidth: "900px", margin: "40px auto", padding: "20px", backgroundColor: "#ffffff", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <div id="images" style={{ width: "45%" }}>
          {images.map((img) =>
            !img.hidden ? (
              <img
                key={img.id}
                src={img.src}
                alt={img.name}
                draggable="true"
                className="w-full h-[150px]"
                onDragStart={(e) => e.dataTransfer.setData("text/plain", img.name)}
                style={{
                  margin: "10px auto",
                  cursor: "grab",
                  border: "3px solid #00695c",
                  borderRadius: "10px",
                  objectFit: "cover", // Ensure the image fits properly
                }}
              />
            ) : null
          )}
        </div>

        <div id="names" style={{ width: "45%" }}>
          {names.map((name) => (
            <div
              key={name.id}
              className="name-box w-full h-[150px]"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, name.name)}
              style={{
                padding: "10px", // Adjust padding to fit content
                margin: "10px auto",
                backgroundColor: "#b2dfdb",
                textAlign: "center",
                borderRadius: "10px",
                cursor: "pointer",
                border: "2px solid #004d40",
                transition: "background-color 0.3s",
                display: "flex", // Center the text
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9em", // Adjust font size for better fit
              }}
            >
              {name.description}
            </div>
          ))}
        </div>
      </div>

      <div id="result" style={{ textAlign: "center", marginTop: "20px", fontSize: "1.2em", color: "#004d40" }}>
        {result}
      </div>
      <button
        onClick={resetGame}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          fontSize: "1em",
          backgroundColor: "#00695c",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default PeacockGreenMatchGame;