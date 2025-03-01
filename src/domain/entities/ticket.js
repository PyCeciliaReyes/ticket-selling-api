class Ticket {
  constructor(id, available, reservationId, performanceId) {
    if (available === undefined || !reservationId || !performanceId)
      throw new Error("Disponibilidad, reserva y performance son requeridos");

    this.id = id;
    this.available = available;
    this.reservationId = reservationId;
    this.performanceId = performanceId;
  }
}

module.exports = { Ticket };
