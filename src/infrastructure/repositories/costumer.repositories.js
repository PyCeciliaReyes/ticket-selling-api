const db = require("../../config/db");

class CustomerRepository {
  async create(customer) {
    const sql = `
            INSERT INTO
                customer (name, phone)
            VALUES
                (?, ?)
        `;

    const [result] = await db.execute(sql, [customer.name, customer.phone]);
    return {
      id: result.insertId,
      ...customer,
    };
  }

  async findById(id) {
    sql = `
       SELECT
            id,
            name,
            phone
        FROM
            customer
        WHERE
            id = ?
    `;

    const [rows] = await db.execute(sql, [id]);

    return rows.length ? rows[0] : null;
  }
}

module.exports = { CustomerRepository };
