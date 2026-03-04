function moveWindows() {

  // Skapa två popup-fönster
  let window1 = window.open(location.href, "_blank", "width=200,height=200");
  let window2 = window.open(location.href, "_blank", "width=200,height=200");

  // Om popup blockerad
  if (!window1 || !window2) {
    document.getElementById("message").innerText =
      "Popup blockerare är aktiverad! Tillåt popups och försök igen.";
    return;
  }

  // Startpositioner
  let window1X = 100;
  let window1Y = 100;
  let window1VX = 3;
  let window1VY = 3;

  let window2X = 300;
  let window2Y = 200;
  let window2VX = -3;
  let window2VY = 3;

  function frame() {

    // Flytta window 1
    window1X += window1VX;
    window1Y += window1VY;
    window1.moveTo(window1X, window1Y);

    // Studsa
    if (window1X <= 0 || window1X >= screen.width - 200) {
      window1VX *= -1;
    }
    if (window1Y <= 0 || window1Y >= screen.height - 200) {
      window1VY *= -1;
    }

    // Flytta window 2
    window2X += window2VX;
    window2Y += window2VY;
    window2.moveTo(window2X, window2Y);

    if (window2X <= 0 || window2X >= screen.width - 200) {
      window2VX *= -1;
    }
    if (window2Y <= 0 || window2Y >= screen.height - 200) {
      window2VY *= -1;
    }

    requestAnimationFrame(frame);
  }

  frame();
}
