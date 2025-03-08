const db = require("../../config/db");

class ReservationRepository {
  async create(reservation) {
    const sql = `
        INSERT INTO
            reservation (reservation_date, customer_id)
        VALUES
            (?, ?)
    `;

    const [result] = await db.execute(sql, [
      reservation.reservationDaete,
      reservation.customerId,
    ]);

    return {
      id: result.insertId,
      ...reservation,
    };
  }
  async findById(id) {
    const sql = `
        SELECT
            *
        FROM
            reservation
        WHERE
            id = ? 
    `;

    const [rows] = await db.execute(sql, [id]);
    return rows.length ? rows[0] : null;
  }
}

module.exports = {
  ReservationRepository,
};
