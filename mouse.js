const targetMove = (e) => {
  player.goTo(e.clientX, e.clientY);
};

document.body.addEventListener("click", targetMove);
