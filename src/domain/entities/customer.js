class Customer {
  constructor(id, name, phone) {
    if (!name || !phone)
      throw new Error("El nombre y el telefono son requeridos");

    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

module.exports = { Customer };
