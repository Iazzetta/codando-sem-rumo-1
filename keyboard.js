const press = (e) => {
  const direction = e.key;
  if (["a", "d", "w", "s"].includes(direction)) {
    player.keyboard[direction] = true;
  }
};
const release = (e) => {
  const direction = e.key;
  if (["a", "d", "w", "s"].includes(direction)) {
    player.keyboard[direction] = false;
  }
};

document.body.addEventListener("keydown", press);
document.body.addEventListener("keyup", release);
