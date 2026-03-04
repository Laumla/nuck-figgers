let box1, box2;
let smallMode = false;
let created = false;
const TOTAL_BOXES = 500;
let boxes = [];

// Skapa overlay-rutor
function createWindows() {
  box1 = document.createElement("div");
  box2 = document.createElement("div");
function createBoxes() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < TOTAL_BOXES; i++) {
    let box = document.createElement("div");

  [box1, box2].forEach(box => {
    box.style.position = "fixed";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.background = "red";
    box.style.width = "40px";
    box.style.height = "40px";
    box.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    box.style.zIndex = "9999";
    box.style.pointerEvents = "none"; // så de inte blockerar klick
    document.body.appendChild(box);
  });
    box.style.pointerEvents = "none";
    box.style.willChange = "transform";

  box1.style.left = "100px";
  box1.style.top = "100px";
    box.x = Math.random() * window.innerWidth;
    box.y = Math.random() * window.innerHeight;
    box.vx = (Math.random() - 0.5) * 20;
    box.vy = (Math.random() - 0.5) * 20;

  box2.style.left = "400px";
  box2.style.top = "200px";
    fragment.appendChild(box);
    boxes.push(box);
  }

  moveBoxes();
  created = true;
  document.body.appendChild(fragment);
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
function animate() {
  for (let box of boxes) {

    if (x2 <= 0 || x2 >= window.innerWidth - box2.offsetWidth) vx2 *= -1;
    if (y2 <= 0 || y2 >= window.innerHeight - box2.offsetHeight) vy2 *= -1;
    box.x += box.vx;
    box.y += box.vy;

    box1.style.left = x1 + "px";
    box1.style.top = y1 + "px";
    if (box.x <= 0 || box.x >= window.innerWidth - 40) box.vx *= -1;
    if (box.y <= 0 || box.y >= window.innerHeight - 40) box.vy *= -1;

    box2.style.left = x2 + "px";
    box2.style.top = y2 + "px";

    requestAnimationFrame(frame);
    box.style.transform = `translate(${box.x}px, ${box.y}px)`;
  }

  frame();
  requestAnimationFrame(animate);
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
  createBoxes();
  animate();
};

// Klicka var som helst för att ändra storlek
document.addEventListener("click", function () {
  if (created) {
    toggleSize();
  }
});
