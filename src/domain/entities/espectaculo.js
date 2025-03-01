class Espectaculo {
  constructor(id, title) {
    if (!title) throw new Error("El titulo es requerido");

    this.id = id;
    this.title = title;
  }
}

module.exports = { Espectaculo };
