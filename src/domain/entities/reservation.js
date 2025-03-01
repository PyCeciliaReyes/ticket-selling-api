class Reservation {
  constructor(id, reservationDate, customerId) {
    if (!reservationDate || !customerId)
      throw new Error("Fecha de reserva y cliente son requeridos");

    this.id = id;
    this.reservationDate = reservationDate;
    this.customerId = customerId;
  }
}

module.exports = { Reservation };
