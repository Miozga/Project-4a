const div = document.body.querySelector("div"); //pobieramy div
let divX = 150; //ustalanie pozycji diva na osi x
let divY = 50; //jw na osi y
div.style.left = divX + "px"; //pozycjonujemy div
div.style.top = `${divY}px`; //jw

//FLAGA
let drawActive = false;

let insertDivX;

let insertDivY;

//ustawiamy  pierwsze zdarzenie polegające na wcisnięciu i przytrzymaniu
div.addEventListener("mousedown", (e) => {
  drawActive = !drawActive;
  div.style.backgroundColor = "gray";
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

//określamy zdarzeniu ruchu myszką na wciśnięteym przycisku
div.addEventListener("mousemove", (e) => {
  if (drawActive) {
    //aktualizuujemy pozycję kwadratu
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

//puszczamy przycisk myszka
div.addEventListener("mouseup", () => {
  drawActive = !drawActive;
  console.log("Puszczamy przycisk myszki");
});
