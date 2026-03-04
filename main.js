let box1, box2;
let smallMode = false;
let created = false;

// Skapa overlay-rutor
function createWindows() {
  box1 = document.createElement("div");
  box2 = document.createElement("div");

  [box1, box2].forEach(box => {
    box.style.position = "fixed";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.background = "red";
    box.style.zIndex = "9999";
    box.style.pointerEvents = "none"; // så de inte blockerar klick
    document.body.appendChild(box);
  });

  box1.style.left = "100px";
  box1.style.top = "100px";

  box2.style.left = "400px";
  box2.style.top = "200px";

  moveBoxes();
  created = true;
}

// Rörelse
let x1 = 100, y1 = 100, vx1 = 3, vy1 = 3;
let x2 = 400, y2 = 200, vx2 = -3, vy2 = 3;

function moveBoxes() {

  function frame() {

    x1 += vx1;
    y1 += vy1;

    x2 += vx2;
    y2 += vy2;

    if (x1 <= 0 || x1 >= window.innerWidth - box1.offsetWidth) vx1 *= -1;
    if (y1 <= 0 || y1 >= window.innerHeight - box1.offsetHeight) vy1 *= -1;

    if (x2 <= 0 || x2 >= window.innerWidth - box2.offsetWidth) vx2 *= -1;
    if (y2 <= 0 || y2 >= window.innerHeight - box2.offsetHeight) vy2 *= -1;

    box1.style.left = x1 + "px";
    box1.style.top = y1 + "px";

    box2.style.left = x2 + "px";
    box2.style.top = y2 + "px";

    requestAnimationFrame(frame);
  }

  frame();
}

// Gör rutorna små
function toggleSize() {
  smallMode = !smallMode;

  if (smallMode) {
    box1.style.width = "50px";
    box1.style.height = "50px";
    box2.style.width = "50px";
    box2.style.height = "50px";
  } else {
    box1.style.width = "200px";
    box1.style.height = "200px";
    box2.style.width = "200px";
    box2.style.height = "200px";
  }
}

// Starta automatiskt när sidan laddas
window.onload = function () {
  createWindows();
};

// Klicka var som helst för att ändra storlek
document.addEventListener("click", function () {
  if (created) {
    toggleSize();
  }
});
