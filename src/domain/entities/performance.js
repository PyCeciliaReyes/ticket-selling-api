class Performance {
  constructor(id, performanceDate, performanceTime, espectaculoId) {
    if (!performanceDate || !performanceTime || !espectaculoId)
      throw new Error("Fecha, hora y espectaculoId son requeridos");

    this.id = id;
    this.performanceDate = performanceDate;
    this.performanceTime = performanceTime;
    this.espectaculoId = espectaculoId;
  }
}

module.exports = { Performance };
