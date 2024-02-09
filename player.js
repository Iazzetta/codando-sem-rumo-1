class Player {
  constructor(x, y, size) {
    this.id = randInt(0, 99999);
    this.x = x;
    this.y = y;
    this.size = size;
    this.target = false;
    this.keyboard = { a: false, d: false, w: false, s: false };
    this.step = 5;
    MAP.insertAdjacentHTML(
      "beforeend",
      `<div class="entity player" style="width: ${this.size}px;height:${this.size}px" id="player-${this.id}"></div>`
    );
  }

  draw() {
    this.move();
    this.followTarget();
    const element = Qs(`#player-${this.id}`);
    element.style.left = `${this.x}px`;
    element.style.top = `${this.y}px`;
  }

  move() {
    if (this.keyboard.a) this.x -= this.step;
    if (this.keyboard.d) this.x += this.step;
    if (this.keyboard.w) this.y -= this.step;
    if (this.keyboard.s) this.y += this.step;
  }

  goTo(x, y) {
    this.target = { x: x, y: y };
  }

  followTarget() {
    if (this.target) {
      if (this.x < this.target.x) this.x += this.step;
      if (this.x + this.size / 2 > this.target.x) this.x -= this.step;
      if (this.y < this.target.y) this.y += this.step;
      if (this.y + this.size / 2 > this.target.y) this.y -= this.step;

      if (this.x == this.target.x && this.y == this.target.y) {
        this.target = false;
      }
    }
  }
}
