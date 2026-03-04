const TOTAL_BOXES = 500;
let boxes = [];

function createBoxes() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < TOTAL_BOXES; i++) {
    let box = document.createElement("div");

    box.style.position = "fixed";
    box.style.width = "40px";
    box.style.height = "40px";
    box.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    box.style.zIndex = "9999";
    box.style.pointerEvents = "none";
    box.style.willChange = "transform";

    box.x = Math.random() * window.innerWidth;
    box.y = Math.random() * window.innerHeight;
    box.vx = (Math.random() - 0.5) * 20;
    box.vy = (Math.random() - 0.5) * 20;

    fragment.appendChild(box);
    boxes.push(box);
  }

  document.body.appendChild(fragment);
}

function animate() {
  for (let box of boxes) {

    box.x += box.vx;
    box.y += box.vy;

    if (box.x <= 0 || box.x >= window.innerWidth - 40) box.vx *= -1;
    if (box.y <= 0 || box.y >= window.innerHeight - 40) box.vy *= -1;

    box.style.transform = `translate(${box.x}px, ${box.y}px)`;
  }

  requestAnimationFrame(animate);
}

window.onload = function () {
  createBoxes();
  animate();
};
