// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  document.body.style.zoom="114%"
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
