const Qs = (el) => document.querySelector(el);
const QsAll = (el) => document.querySelectorAll(el);
const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MAP = Qs(".map");
