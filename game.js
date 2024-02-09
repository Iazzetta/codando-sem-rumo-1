const player = new Player(20, 20, 25);
let enemies = [];

// enemies
for (let i = 0; i < 5; i++) {
  enemies.push(new Enemy(400, 200, 10, player));
}

const gameLoop = () => {
  player.draw();
  for (let e of enemies) e.draw();
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
