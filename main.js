//deklarujemy wartości wejściowe dla kolorów rgb

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// Funkcja zmieniająca kolor tła po naciśnięciu klawiszy strzałek
const changeColor = (e) => {
  switch (e.keyCode) {
    case 38: // Strzałka w górę - rozjaśnianie
      red = red < 255 ? red + 3 : 255;
      green = green < 255 ? green + 3 : 255;
      blue = blue < 255 ? blue + 3 : 255;
      break;
    case 40: // Strzałka w dół - przyciemnianie
      red = red > 0 ? red - 3 : 0;
      green = green > 0 ? green - 3 : 0;
      blue = blue > 0 ? blue - 3 : 0;
      break;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("keydown", changeColor);

// PRZESUWANIE KWADRATU
const div = document.body.querySelector("div");
if (div) {
  let divX = 150;
  let divY = 50;
  div.style.position = "absolute";
  div.style.left = divX + "px";
  div.style.top = `${divY}px`;

  let drawActive = false;
  let insertDivX;
  let insertDivY;

  div.addEventListener("mousedown", (e) => {
    drawActive = true;
    div.style.backgroundColor = "gray";
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
  });

  div.addEventListener("mousemove", (e) => {
    if (drawActive) {
      divX = e.clientX - insertDivX;
      divY = e.clientY - insertDivY;
      div.style.left = `${divX}px`;
      div.style.top = `${divY}px`;
    }
  });

  div.addEventListener("mouseup", () => {
    drawActive = false;
  });
} else {
  console.error("Nie znaleziono elementu div. Dodaj go do HTML.");
}
