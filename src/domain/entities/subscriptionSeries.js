const Reservation = require("./reservation");

class SubscriptionSeries extends Reservation {
  constructor(id, reservationDate, customerId, series) {
    super(id, reservationDate, customerId);
    if (!series) throw new Error("El numero de serie es requerido");

    this.series = series;
  }
}

module.exports = { SubscriptionSeries };
