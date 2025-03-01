const Reservation = require("./reservation");

class IndividualReservation extends Reservation {
  constructor(id, reservationDate, customerId) {
    super(id, reservationDate, customerId);
  }
}

module.exports = { IndividualReservation };
