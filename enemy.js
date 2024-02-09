class Enemy {
  constructor(x, y, size, target) {
    this.id = randInt(0, 99999);
    this.x = x;
    this.y = y;
    this.size = size;
    this.target = target;
    this.step = randInt(1, 3);
    MAP.insertAdjacentHTML(
      "beforeend",
      `<div class="entity enemy" style="width: ${this.size}px;height:${this.size}px" id="enemy-${this.id}"></div>`
    );
  }

  draw() {
    this.followTarget();
    const element = Qs(`#enemy-${this.id}`);
    element.style.left = `${this.x}px`;
    element.style.top = `${this.y}px`;
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
