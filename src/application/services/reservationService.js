const {
  Reservation,
  SubscriptionSeries,
  IndividualReservation,
} = require("../../domain/entities/index");

class ReservationService {
  constructor(reservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async createReservation(customerId, reservationDate, type, series = null) {
    let reservation;
    if (type === "subscription") {
      reservation = new SubscriptionSeries(
        null,
        reservationDate,
        customerId,
        series
      );
    } else if (type === "individual") {
      reservation = new IndividualReservation(
        null,
        reservationDate,
        customerId
      );
    } else {
      throw new Error("Tipo de reserva invalido");
    }
    return await this.reservationRepository.create(reservation);
  }

  async getReservationById(id) {
    return await this.reservationRepository.findById(id);
  }
}

module.exports = { ReservationService };
